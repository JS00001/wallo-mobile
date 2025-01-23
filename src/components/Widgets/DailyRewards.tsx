import { View } from "react-native";

import Text from "@/ui/Text";
import Icon from "@/ui/Icon";
import Pressable from "@/ui/Pressable";
import useAuthStore from "@/store/auth";
import colors from "tailwindcss/colors";
import ProgressBar from "@/ui/ProgressBar";

interface Props {}

export default function DailyRewardsWidget({}: Props) {
  const { user } = useAuthStore();

  return (
    <View className="gap-2">
      <Text size="lg" className="font-medium text-gray-700">
        Daily Challenges
      </Text>

      <Pressable className="flex-row items-center gap-4 p-4" size="md">
        <View className="rounded-full bg-blue-100 p-3">
          <Icon icon="Wallo.Gem" size={24} />
        </View>
        <View className="flex-1">
          <Text size="lg" className="text-gray-700">
            Daily Chest
          </Text>
          <Text size="sm" className="text-gray-500">
            Lorem ipsum is a short string that is great for simulating data
            flow.
          </Text>
        </View>
      </Pressable>

      <Pressable className="flex-row items-center gap-4 p-4" size="md">
        <View className="rounded-full bg-red-100 p-3">
          <Icon icon="Wallo.Book" size={24} color={colors.red[500]} />
        </View>
        <View className="flex-1 gap-2">
          <View>
            <Text size="lg" className="text-gray-700">
              Complete 1 Lesson
            </Text>
            <Text size="sm" className="text-gray-500">
              Lorem ipsum is a short string that is great for simulating data
              flow.
            </Text>
          </View>
          <ProgressBar
            color={colors.red[500]}
            progress={user!.dailyLessonCount || 0}
            total={1}
          />
        </View>
      </Pressable>

      <Pressable className="flex-row items-center gap-4 p-4" size="md">
        <View className="rounded-full bg-purple-100 p-3">
          <Icon icon="Wallo.Book" size={24} color={colors.purple[500]} />
        </View>
        <View className="flex-1 gap-2">
          <View>
            <Text size="lg" className="text-gray-700">
              Complete 3 Lessons
            </Text>
            <Text size="sm" className="text-gray-500">
              Lorem ipsum is a short string that is great for simulating data
              flow.
            </Text>
          </View>
          <ProgressBar
            color={colors.purple[500]}
            progress={user!.dailyLessonCount || 0}
            total={3}
          />
        </View>
      </Pressable>
    </View>
  );
}
