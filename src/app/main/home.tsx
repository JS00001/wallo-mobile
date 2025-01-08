import { View } from "react-native";
import colors from "tailwindcss/colors";

import Icon from "@/ui/Icon";
import Card from "@/ui/Card";
import Section from "@/ui/Section";
import StreakCard from "@/components/StreakCard";

import ScreenLayout from "@/components/ScreenLayout";

export default function Home() {
  return (
    <ScreenLayout title="Home" showGems showStreak>
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
          leftImage={
            <View className="rounded-full bg-blue-100 p-2">
              <Icon icon="Wallo.Gem" size={24} />
            </View>
          }
        />
        <Card
          title="Complete 3 Lessons"
          description="Complete 3 lessons to earn 50 gems"
          color={colors.red[500]}
          progress={{
            progress: 1,
            total: 3,
          }}
          leftImage={
            <View className="rounded-full bg-red-100 p-2">
              <Icon icon="Wallo.Book" size={24} color={colors.red[500]} />
            </View>
          }
        />
        <Card
          title="Complete 3 Lessons"
          description="Complete 3 lessons to earn 50 gems"
          color={colors.purple[500]}
          progress={{
            progress: 0,
            total: 3,
          }}
          leftImage={
            <View className="rounded-full bg-purple-100 p-2">
              <Icon icon="Wallo.Book" size={24} color={colors.purple[500]} />
            </View>
          }
        />
      </View>
    </ScreenLayout>
  );
}
