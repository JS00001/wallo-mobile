import { SafeAreaView, ScrollView, View } from "react-native";
import Text from "@/ui/Text";

export default function Home() {
  return (
    <>
      <SafeAreaView className="flex-1">
        <ScrollView className="overflow-visible px-6 pt-4">
          <View className="absolute -left-6 -top-40 h-80 w-screen bg-blue-700" />

          <View className="flex-row items-center justify-between">
            <Text className="text-3xl font-semibold text-white">Home</Text>

            <View className="flex-row items-center gap-2">
              <Text>Hello</Text>
            </View>
          </View>
        </ScrollView>
      </SafeAreaView>
    </>
  );
}
