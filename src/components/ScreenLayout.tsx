import classNames from "classnames";
import { SafeAreaView, ScrollView, View } from "react-native";

import Text from "@/ui/Text";
import GemCount from "@/components/Statistics/GemCount";
import LiveCount from "@/components/Statistics/LiveCount";
import StreakCount from "@/components/Statistics/StreakCount";

interface Props {
  title: string;
  description?: string;
  backButton?: boolean;
  showStreak?: boolean;
  showGems?: boolean;
  showLives?: boolean;
  className?: string;
  contentContainerClassName?: string;
  children: React.ReactNode;
}

export default function ScreenLayout({
  title,
  description,
  backButton,
  showStreak,
  showGems,
  showLives,
  className,
  contentContainerClassName,
  children,
}: Props) {
  const viewClasses = classNames("overflow-visible px-6 pt-6", className);

  const contentContainerClasses = classNames(
    "gap-4 pb-24",
    contentContainerClassName,
  );

  return (
    <>
      <SafeAreaView className="flex-1 bg-gray-50">
        <ScrollView
          className={viewClasses}
          showsVerticalScrollIndicator={false}
          contentContainerClassName={contentContainerClasses}
        >
          {/* Background */}
          <View className="absolute -left-6 -top-96 h-[490px] w-screen bg-indigo-600" />

          {/* Header */}
          <View className="flex-row items-center justify-between pb-6">
            <View>
              <Text size="4xl" className="font-semibold text-white">
                {title}
              </Text>
              {description && (
                <Text size="lg" className="text-gray-300">
                  {description}
                </Text>
              )}
            </View>

            <View className="flex-row items-center gap-2">
              {showStreak && <StreakCount />}
              {showLives && <LiveCount />}
              {showGems && <GemCount />}
            </View>
          </View>

          {children}
        </ScrollView>
      </SafeAreaView>
    </>
  );
}
