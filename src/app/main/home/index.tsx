import ScreenLayout from "@/components/ScreenLayout";
import DailyRewardsWidget from "@/components/Widgets/DailyRewards";
import StreakDetailsWidget from "@/components/Widgets/StreakDetails";
import SuggestedCoursesWidget from "@/components/Widgets/SuggestedCourses";

export default function Home() {
  return (
    <ScreenLayout title="Home" showGems showStreak>
      <StreakDetailsWidget />
      <SuggestedCoursesWidget />
      <DailyRewardsWidget />
    </ScreenLayout>
  );
}
