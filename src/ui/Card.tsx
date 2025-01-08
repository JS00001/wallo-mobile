import classNames from "classnames";
import { TouchableOpacity, View, ViewProps } from "react-native";

import Text from "@/ui/Text";
import ProgressBar from "@/ui/ProgressBar";
import colors from "tailwindcss/colors";

interface Props extends ViewProps {
  title: string;
  description: string;
  color?: string;
  leftImage?: React.ReactNode;
  progress?: {
    progress: number;
    total: number;
  };
  onPress?: () => void;
}

export default function Card({
  title,
  description,
  progress,
  leftImage = null,
  color = colors.indigo[500],
  onPress,
  className,
  ...props
}: Props) {
  const containerClasses = classNames(
    "flex-row items-center gap-5",
    "card p-5",
    className,
  );

  return (
    <TouchableOpacity onPress={onPress} className={containerClasses} {...props}>
      {leftImage}

      <View className="flex-1 gap-3">
        <View>
          <Text size="lg" style={{ color }} className="font-medium" lines={1}>
            {title}
          </Text>
          <Text size="sm" lines={2} className="text-gray-500">
            {description}
          </Text>
        </View>

        {progress && (
          <ProgressBar
            color={color}
            progress={progress.progress}
            total={progress.total}
          />
        )}
      </View>
    </TouchableOpacity>
  );
}
