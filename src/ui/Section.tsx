import { View } from "react-native";

import Text from "@/ui/Text";

interface Props {
  children: React.ReactNode;
}

export default function Section({ children }: Props) {
  return (
    <View className="gap-4">
      <View className="flex-row items-center gap-3">
        <Text className="text-gray-800">{children}</Text>
        <View className="h-px flex-1 bg-gray-300" />
      </View>
    </View>
  );
}
