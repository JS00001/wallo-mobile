import { View } from "react-native";
import colors from "tailwindcss/colors";

import Text from "@/ui/Text";
import Icon from "@/ui/Icon";
import useAuthStore from "@/store/auth";

export default function StreakDetailsWidget() {
  const DAYS_OF_WEEK = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

  const size = useAuthStore((s) => s.user!.streak);
  const weekData = useAuthStore((s) => s.user!.weekData);

  return (
    <View className="container gap-y-4 p-4">
      <View>
        <View className="flex-row items-center gap-2">
          <Icon icon="Wallo.Flame" size={24} />
          <Text size="lg" className="text-gray-700">
            {size}-day Streak
          </Text>
        </View>
        <Text size="sm" className="text-gray-500">
          Come back every day this week to earn 200 gems
        </Text>
      </View>

      <View className="flex-row items-center justify-between">
        {DAYS_OF_WEEK.map((day, i) => {
          const hasStreak = weekData[i];

          return (
            <View className="items-center gap-1" key={day}>
              {hasStreak && (
                <Icon
                  icon="Wallo.CheckmarkFilled"
                  color={colors.indigo[600]}
                  size={32}
                />
              )}

              {!hasStreak && (
                <View className="h-8 w-8 rounded-full border-2 border-gray-300" />
              )}

              <Text size="xs" className="text-gray-500">
                {day}
              </Text>
            </View>
          );
        })}
      </View>
    </View>
  );
}
