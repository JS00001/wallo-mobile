import Animated, {
  runOnJS,
  SharedValue,
  useAnimatedStyle,
  useSharedValue,
  withSpring,
  withTiming,
} from "react-native-reanimated";
import { useState } from "react";
import classNames from "classnames";
import { Pressable, View } from "react-native";

import Text from "@/ui/Text";

interface Props {
  data: string[];
}

export default function ContentSwiper({ data }: Props) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const slideX = useSharedValue(0);
  const isAnimating = useSharedValue(false);

  const paddingBottom = 4 * data.length;

  const onAnimationComplete = () => {
    isAnimating.value = false;
  };

  const onForwardPress = () => {
    if (currentIndex === data.length - 1 || isAnimating.value) return;

    isAnimating.value = true;
    slideX.value = withTiming(-400, { duration: 300 }, (finished) => {
      if (finished) {
        runOnJS(setCurrentIndex)(currentIndex + 1);
        slideX.value = 0;
        runOnJS(onAnimationComplete)();
      }
    });
  };

  const onBackPress = () => {
    if (currentIndex === 0) return;

    isAnimating.value = true;
    slideX.value = withTiming(400, { duration: 300 }, (finished) => {
      if (finished) {
        runOnJS(setCurrentIndex)(currentIndex - 1);
        slideX.value = 0;
        runOnJS(onAnimationComplete)();
      }
    });
  };

  const renderedData = data.slice(currentIndex, data.length);

  return (
    <View className="relative flex-1" style={{ paddingBottom }}>
      {renderedData.map((content, index) => (
        <ContentCard
          key={index}
          index={index}
          total={renderedData.length}
          content={content}
          slideX={slideX}
          onBackPress={onBackPress}
          onForwardPress={onForwardPress}
        />
      ))}
    </View>
  );
}

interface CardProps {
  index: number;
  total: number;
  content: string;
  slideX: SharedValue<number>;
  onBackPress: () => void;
  onForwardPress: () => void;
}

function ContentCard({
  index,
  total,
  content,
  slideX,
  onBackPress,
  onForwardPress,
}: CardProps) {
  const containerClasses = classNames(
    "absolute h-full rounded-xl flex-1",
    "border-2 border-gray-200 bg-white pb-4",
  );

  const animatedStyles = useAnimatedStyle(() => {
    const offsetTop = index * 24;

    // Only animate scale for cards behind the top card
    const targetScale = 1 - (index * 6) / 100;
    const scale = withSpring(targetScale, {
      damping: 15,
      stiffness: 100,
    });

    // Only apply horizontal translation to the top card
    const translateX = index === 0 ? slideX.value : 0;

    return {
      transform: [{ scale }, { translateX }],
      top: offsetTop,
      zIndex: total - index,
    };
  });

  return (
    <Animated.ScrollView
      style={animatedStyles}
      className={containerClasses}
      contentContainerClassName="min-h-full"
      showsVerticalScrollIndicator={false}
    >
      {/* Card Content */}
      <View className="p-6">
        <Text>{content}</Text>
      </View>

      {/* Invisible Navigation Controls */}
      <View className="absolute bottom-0 left-0 right-0 top-0 z-10 flex-row">
        <Pressable className="flex-1" onPress={onBackPress} />
        <Pressable className="flex-1" onPress={onForwardPress} />
      </View>
    </Animated.ScrollView>
  );
}
