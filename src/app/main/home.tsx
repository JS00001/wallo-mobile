import { SafeAreaView, ScrollView, View } from "react-native";
import Text from "@/ui/Text";

export default function Home() {
  return (
    <>
      <SafeAreaView className="flex-1">
        <ScrollView className="overflow-visible px-6 pt-4">
          <View className="bg-blue-700 rounded-full w-[1000px] h-[1000px] absolute -top-[850px] -left-[325px]" />
          <Text className="text-white text-3xl font-semibold">Home</Text>
        </ScrollView>
      </SafeAreaView>
    </>
  );
}
