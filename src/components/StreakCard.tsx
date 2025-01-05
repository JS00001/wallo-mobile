import { View } from "react-native";
import classNames from "classnames";

import Text from "@/ui/Text";
import Icon from "@/ui/Icon";

interface Props {
  size: number;
  weekData: boolean[];
}

export default function StreakCard({ size, weekData }: Props) {
  const DAYS_OF_WEEK = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];

  const containerClasses = classNames(
    "gap-y-3 rounded-xl bg-green-50 p-5",
    "border border-green-700",
  );

  return (
    <View
      className={containerClasses}
      style={{ boxShadow: "0px 3px 0px rgb(21, 128, 61)" }}
    >
      <View>
        <Text size="lg" className="font-medium text-green-700">
          {size}-day Streak
        </Text>
        <Text size="sm" className="text-green-700">
          Come back every day this week to earn 200 gems
        </Text>
      </View>

      <View className="flex-row items-center justify-between">
        {DAYS_OF_WEEK.map((day, i) => {
          const hasStreak = weekData[i];
          const isToday = i === new Date().getDay();

          const containerClasses = classNames(
            "items-center gap-1 p-1.5 rounded-xl",
            isToday && "bg-green-700",
          );

          const iconContainerClasses = classNames(
            "h-7 w-7 rounded-full",
            "items-center justify-center",
            "border border-green-700",
            isToday && !hasStreak && "border-green-800",
            isToday && hasStreak && "bg-green-800",
            !isToday && hasStreak && "bg-green-700",
            !isToday && !hasStreak && "border-green-700",
          );

          const textClasses = classNames(
            isToday ? "text-white" : "text-green-700",
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
