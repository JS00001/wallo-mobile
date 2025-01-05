import colors from "tailwindcss/colors";
import { DimensionValue, View } from "react-native";

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
  color = colors.blue[600],
}: Props) {
  const barStyles = {
    backgroundColor: color,
    width: `${(progress / total) * 100}%` as DimensionValue,
  };

  const labelStyles = {
    color: total > 0 ? color : colors.gray[400],
  };

  return (
    <View className="flex-row items-center gap-2">
      {/* Bar */}
      <View className="h-4 w-full shrink rounded-full bg-gray-200">
        <View style={barStyles} className="h-full rounded-full px-2">
          <View className="mt-[3px] h-1 w-full rounded-full bg-white/25" />
        </View>
      </View>

      {/* Label */}
      {!hideLabel && (
        <Text size="sm" className="font-medium text-gray-400">
          <Text style={labelStyles}>{progress}</Text> / {total}
        </Text>
      )}
    </View>
  );
}
