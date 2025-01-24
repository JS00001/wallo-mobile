import { View } from "react-native";
import { router } from "expo-router";
import Animated from "react-native-reanimated";
import { SafeAreaView } from "react-native-safe-area-context";

import Text from "@/ui/Text";
import IconButton from "@/ui/IconButton";
import useBounce from "@/hooks/useBounce";
import RewardBackgroundSvg from "@/assets/RewardBackgroundSvg";

export default function DailyChest() {
  const { style } = useBounce();

  return (
    <SafeAreaView className="relative flex-1 bg-blue-950">
      <RewardBackgroundSvg className="absolute h-screen" />

      <View className="flex-1 p-6">
        <IconButton icon="Solar.Close" onPress={router.back} />

        <Animated.View
          style={style}
          className="flex-1 items-center justify-center"
        >
          <Text size="xl" className="text-white">
            Tap to open your
          </Text>
          <Text size="4xl" className="font-semibold text-white">
            Daily Chest
          </Text>
        </Animated.View>
      </View>
    </SafeAreaView>
  );
}
