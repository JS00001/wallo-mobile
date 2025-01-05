import { Link } from "expo-router";
import { View } from "react-native";
import Text from "@/ui/Text";

export default function Index() {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Link href="/(tabs)/home">
        <Text className="text-blue-500">
          Edit app/index.tsx to edit this screen.
        </Text>
      </Link>
    </View>
  );
}
