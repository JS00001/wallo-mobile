import { View } from "react-native";

import Text from "@/ui/Text";

interface Props {
  color?: "light" | "dark";
  children: React.ReactNode;
}

export default function Section({ children, color = "light" }: Props) {
  const textClasses = color === "light" ? "text-gray-800" : "text-white";

  return (
    <View className="gap-4">
      <View className="flex-row items-center gap-3">
        <Text className={textClasses}>{children}</Text>
        <View className="h-px flex-1 bg-gray-300" />
      </View>
    </View>
  );
}
