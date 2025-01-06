import { View } from "react-native";
import classNames from "classnames";

import Text from "@/ui/Text";
import Icon from "@/ui/Icon";

interface Props {
  size: number;
  weekData: boolean[];
}

export default function StreakCard({ size, weekData }: Props) {
  const TODAY = new Date().getDay();
  const DAYS_OF_WEEK = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

  const containerClasses = classNames("gap-y-3 p-5 card");

  return (
    <View className={containerClasses}>
      <View>
        <Text size="lg" className="font-semibold text-blue-700">
          {size}-day Streak
        </Text>
        <Text size="sm" className="tracking-[0px] text-gray-500">
          Come back every day this week to earn 200 gems
        </Text>
      </View>

      <View className="flex-row items-center justify-between">
        {DAYS_OF_WEEK.map((day, i) => {
          const hasStreak = weekData[i];
          const isToday = i === TODAY;

          const containerClasses = classNames(
            "items-center gap-1 p-2 rounded-xl",
            isToday && "bg-blue-700",
          );

          const iconContainerClasses = classNames(
            "h-7 w-7 rounded-full",
            "items-center justify-center",
            "border border-blue-700",
            isToday && !hasStreak && "border-white",
            isToday && hasStreak && "bg-blue-900",
            !isToday && hasStreak && "bg-blue-700",
            !isToday && !hasStreak && "border-blue-700",
          );

          const textClasses = classNames(
            isToday ? "text-white" : "text-blue-700",
          );

          return (
            <View key={i} className={containerClasses}>
              <View className={iconContainerClasses}>
                {hasStreak && <Icon icon="Wallo.Flame" size={20} />}
              </View>
              <Text size="xs" className={textClasses}>
                {day}
              </Text>
            </View>
          );
        })}
      </View>
    </View>
  );
}
