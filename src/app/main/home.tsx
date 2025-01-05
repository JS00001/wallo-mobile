import { SafeAreaView, ScrollView, View } from "react-native";
import Text from "@/ui/Text";
import Streak from "@/components/Statistics/Streak";
import Gems from "@/components/Statistics/Gems";

import StreakCard from "@/components/StreakCard";

export default function Home() {
  return (
    <>
      <SafeAreaView className="flex-1">
        <ScrollView
          className="overflow-visible px-6 pt-4"
          contentContainerClassName="gap-6"
        >
          <View className="absolute -left-6 -top-40 h-80 w-screen bg-blue-700" />

          {/* Header */}
          <View className="flex-row items-center justify-between">
            <Text className="text-4xl font-semibold text-white">Home</Text>

            <View className="flex-row items-center gap-2">
              <Streak count={20} />
              <Gems count={123} />
            </View>
          </View>

          {/* Streak Box */}
          <StreakCard
            size={212}
            weekData={[true, false, false, false, false, false, false]}
          />

          {/* Section */}
          <View className="gap-4">
            <View className="flex-row items-center gap-3">
              <Text className="text-gray-800">Jump Back In</Text>
              <View className="h-px flex-1 bg-gray-300" />
            </View>
          </View>
        </ScrollView>
      </SafeAreaView>
    </>
  );
}
