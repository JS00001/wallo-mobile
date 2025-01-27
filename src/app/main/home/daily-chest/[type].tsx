import Animated, {
  useAnimatedStyle,
  useSharedValue,
  withSpring,
} from "react-native-reanimated";
import * as Haptic from "expo-haptics";
import { useRef, useState } from "react";
import LottieView from "lottie-react-native";
import { Pressable, View } from "react-native";
import { router, useLocalSearchParams } from "expo-router";
import { SafeAreaView } from "react-native-safe-area-context";

import Text from "@/ui/Text";
import { Reward } from "@/@types";
import IconButton from "@/ui/IconButton";
import useBounce from "@/hooks/useBounce";
import GemCount from "@/components/Statistics/GemCount";
import { useClaimDailyReward } from "@/hooks/api/rewards";
import RewardBackgroundSvg from "@/assets/RewardBackgroundSvg";

enum AnimationDirection {
  Forward = 1,
  Backward = -1,
}

export default function DailyChest() {
  const [animationFinished, setAnimationFinished] = useState(false);

  const local = useLocalSearchParams();
  const animation = useRef<LottieView>(null);
  const direction = useRef(AnimationDirection.Forward);

  const { style } = useBounce();
  const mutation = useClaimDailyReward();
  const treasureChestScale = useSharedValue(1);

  const rewardType = local.type as Reward;
  const disablePress = mutation.isPending || animationFinished;

  const chestCta = {
    [Reward.Daily]: "Daily Chest",
    [Reward.OneLesson]: "Daily Lesson Chest",
    [Reward.ThreeLessons]: "Daily Lesson Chest",
  }[rewardType];

  /**
   * When the chest is pressed, open the daily
   * reward, and play the animation
   */
  const onPress = async () => {
    if (animationFinished) {
      router.back();
      return;
    }

    if (disablePress) return;

    animation.current?.play(0);
    mutation.mutateAsync({ type: rewardType });
  };

  /**
   * Simulate a 'press in' scaling effect when
   * the chest is pressed in and out
   */
  const onPressIn = () => {
    if (disablePress) return;
    treasureChestScale.value = withSpring(0.9, { damping: 10, stiffness: 100 });
  };

  const onPressOut = () => {
    if (disablePress) return;
    treasureChestScale.value = withSpring(1, { damping: 10, stiffness: 100 });
  };

  /**
   * When the lottie animation finishes, replay the
   * animation in the opposite direction so that the 'sparkles' on the gems
   * continue animating smoothly/indefinitely
   */
  const onAnimationFinish = async () => {
    if (!animationFinished) {
      setAnimationFinished(true);
      Haptic.notificationAsync(Haptic.NotificationFeedbackType.Success);
    }

    if (direction.current === AnimationDirection.Forward) {
      animation.current?.play(60, 34);
      direction.current = AnimationDirection.Backward;
    } else {
      animation.current?.play(34, 60);
      direction.current = AnimationDirection.Forward;
    }
  };

  const animatedStyle = useAnimatedStyle(() => ({
    transform: [{ scale: treasureChestScale.value }],
  }));

  return (
    <SafeAreaView className="flex-1 bg-blue-950">
      <RewardBackgroundSvg className="absolute" />

      <View className="relative m-6 flex-1">
        {/* Action Bar */}
        <View className="absolute z-10 w-full flex-row items-center justify-between">
          <IconButton icon="Solar.Close" onPress={router.back} />
          <GemCount />
        </View>

        {/* Treasure Chest */}
        <Pressable
          className="flex-1"
          onPress={onPress}
          onPressIn={onPressIn}
          onPressOut={onPressOut}
        >
          <Animated.View
            style={[animatedStyle]}
            className="flex-1 items-center justify-center gap-2 pb-16"
          >
            <LottieView
              ref={animation}
              loop={false}
              onAnimationFinish={onAnimationFinish}
              style={{ width: "100%", height: "50%" }}
              source={require("../../../../assets/animations/treasure.lottie")}
            />
          </Animated.View>
        </Pressable>

        {/* Bottom Text */}
        <View className="absolute bottom-0 mb-32 w-full items-center">
          {/* Open prompt */}
          {!mutation.data && !mutation.isPending && (
            <Animated.View className="items-center" style={style}>
              <Text size="xl" className="text-white">
                Tap to open your
              </Text>
              <Text size="4xl" className="font-semibold text-white">
                {chestCta}
              </Text>
            </Animated.View>
          )}

          {/* Gem count earnings */}
          {animationFinished && mutation.data?.virtualCurrency && (
            <Animated.View className="items-center" style={style}>
              <Text size="xl" className="text-white">
                You earned
              </Text>
              <Text size="4xl" className="font-semibold text-white">
                {mutation.data.virtualCurrency} Gems
              </Text>
            </Animated.View>
          )}
        </View>
      </View>
    </SafeAreaView>
  );
}
