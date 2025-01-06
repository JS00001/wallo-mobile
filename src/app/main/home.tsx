import colors from "tailwindcss/colors";
import { SafeAreaView, ScrollView, View } from "react-native";

import Text from "@/ui/Text";
import Card from "@/ui/Card";
import Section from "@/ui/Section";
import Gems from "@/components/Statistics/Gems";
import StreakCard from "@/components/StreakCard";
import Streak from "@/components/Statistics/Streak";

export default function Home() {
  return (
    <>
      <SafeAreaView className="flex-1">
        <ScrollView
          showsVerticalScrollIndicator={false}
          className="overflow-visible px-6 pt-4"
          contentContainerClassName="gap-6 pb-24"
        >
          <View className="absolute -left-6 -top-96 h-[500px] w-screen bg-blue-700" />

          {/* Header */}
          <View className="flex-row items-center justify-between pb-6">
            <Text size="4xl" className="font-semibold text-white">
              Home
            </Text>

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
            <Section>Jump Back In</Section>
            <Card
              title="Finance 101"
              description="Learn the basics of finance"
              progress={{
                progress: 5,
                total: 8,
              }}
            />
          </View>

          {/* Section */}
          <View className="gap-4">
            <Section>Daily Quests</Section>
            <Card
              title="Daily Chest"
              description="Open your daily chest to earn rewards"
              color={colors.blue[500]}
            />
            <Card
              title="Complete 3 Lessons"
              description="Complete 3 lessons to earn 50 gems"
              color={colors.red[500]}
              progress={{
                progress: 1,
                total: 3,
              }}
            />
            <Card
              title="Complete 3 Lessons"
              description="Complete 3 lessons to earn 50 gems"
              color={colors.purple[500]}
              progress={{
                progress: 0,
                total: 3,
              }}
            />
          </View>
        </ScrollView>
      </SafeAreaView>
    </>
  );
}
