import Animated, {
  useAnimatedStyle,
  useSharedValue,
  withTiming,
} from "react-native-reanimated";
import { useEffect } from "react";
import { View } from "react-native";
import colors from "tailwindcss/colors";

import Text from "@/ui/Text";

interface Props {
  progress: number;
  total: number;
  color?: string;
  hideLabel?: boolean;
}

export default function ProgressBar({
  progress,
  total,
  hideLabel,
  color = colors.indigo[600],
}: Props) {
  const initialWidth = Math.min((progress / total) * 100, 100);

  const width = useSharedValue(initialWidth);

  useEffect(() => {
    width.value = withTiming(initialWidth, { duration: 500 });
  }, [progress, total]);

  const animatedStyle = useAnimatedStyle(() => ({
    width: `${width.value}%`,
  }));

  const barStyles = [{ backgroundColor: color }, animatedStyle];

  const labelStyles = {
    color: total > 0 ? color : colors.gray[400],
  };

  return (
    <View className="max-w-full flex-row items-center gap-2">
      {/* Bar */}
      <View className="h-4 w-full shrink rounded-full bg-gray-200">
        <Animated.View style={barStyles} className="h-full rounded-full px-2">
          <View className="mt-[3px] h-1 w-full rounded-full bg-white/25" />
        </Animated.View>
      </View>

      {/* Label */}
      {!hideLabel && (
        <Text size="sm" className="font-medium text-gray-400">
          <Text size="sm" style={labelStyles}>
            {progress}
          </Text>{" "}
          / {total}
        </Text>
      )}
    </View>
  );
}
