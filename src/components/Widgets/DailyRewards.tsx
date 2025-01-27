import { useMemo } from "react";
import { router } from "expo-router";
import { BlurView } from "expo-blur";
import colors from "tailwindcss/colors";
import { View, ViewStyle } from "react-native";

import Text from "@/ui/Text";
import Icon from "@/ui/Icon";
import { Reward } from "@/@types";
import Pressable from "@/ui/Pressable";
import useAuthStore from "@/store/auth";
import { IconType } from "@/assets/icons";
import ProgressBar from "@/ui/ProgressBar";
import classNames from "classnames";

interface Props {}

export default function DailyRewardsWidget({}: Props) {
  const { user } = useAuthStore();

  const claimedRewards = user!.claimedDailyRewards;

  const onDailyRewardPress = () => {
    router.push("/main/home/daily-chest/Daily");
  };

  const onLessonRewardPress = () => {
    router.push("/main/home/daily-chest/OneLesson");
  };

  const onThreeLessonsRewardPress = () => {
    router.push("/main/home/daily-chest/ThreeLessons");
  };

  const Cards: DailyRewardProps[] = useMemo(() => {
    const items: DailyRewardProps[] = [
      {
        title: "Daily Chest",
        description: "Open the daily chest to claim your reward.",
        available: !claimedRewards.includes(Reward.Daily),
        color: colors.blue[400],
        icon: "Wallo.Gem",
        onPress: onDailyRewardPress,
      },
      {
        title: "Complete 1 Lesson",
        description: "Complete one lesson to earn your reward.",
        available: !claimedRewards.includes(Reward.OneLesson),
        color: colors.red[500],
        icon: "Wallo.Book",
        progress: {
          current: user!.dailyLessonCount || 0,
          total: 1,
        },
        onPress: onLessonRewardPress,
      },
      {
        title: "Complete 3 Lessons",
        description: "Complete three lessons to earn your reward.",
        available: !claimedRewards.includes(Reward.ThreeLessons),
        color: colors.purple[500],
        icon: "Wallo.Book",
        progress: {
          current: user!.dailyLessonCount || 0,
          total: 3,
        },
        onPress: onThreeLessonsRewardPress,
      },
    ];

    // Sort by uncompleted items first
    return items.sort((a, b) => {
      return a.available === b.available ? 0 : a.available ? -1 : 1;
    });
  }, [user]);

  return (
    <View className="gap-2">
      <Text size="lg" className="font-medium text-gray-700">
        Daily Challenges
      </Text>

      {Cards.map((card, i) => (
        <DailyReward key={i} {...card} />
      ))}
    </View>
  );
}

interface DailyRewardProps {
  title: string;
  description: string;
  available: boolean;
  color: string;
  icon: IconType;
  progress?: {
    current: number;
    total: number;
  };
  onPress: () => void;
}

function DailyReward({
  title,
  description,
  available,
  color,
  icon,
  progress,
  onPress,
}: DailyRewardProps) {
  const ringBackground: ViewStyle = {
    backgroundColor: `${color}20`,
  };

  const overlayClasses = classNames(
    "absolute left-0 right-0 top-0 bottom-0",
    "flex-row items-center justify-center gap-2",
    "overflow-hidden rounded-xl bg-white/25",
  );

  return (
    <Pressable
      size="md"
      disabled={!available}
      className="flex-row items-center gap-4 p-4"
      onPress={onPress}
    >
      <View className="rounded-full p-3" style={ringBackground}>
        <Icon icon={icon} size={24} color={color} />
      </View>

      <View className="flex-1 gap-2">
        <View>
          <Text size="lg" className="text-gray-700">
            {title}
          </Text>
          <Text size="sm" className="text-gray-500">
            {description}
          </Text>
        </View>

        {/* Progress bar, if added */}
        {progress && (
          <ProgressBar
            color={color}
            progress={progress.current}
            total={progress.total}
          />
        )}
      </View>

      {/* When content is completed,  show the 'completed' screen */}
      {!available && (
        <BlurView intensity={25} className={overlayClasses}>
          <Icon icon="Wallo.CheckmarkFilled" color={colors.indigo[500]} />
          <Text className="font-medium text-indigo-500">Completed</Text>
        </BlurView>
      )}
    </Pressable>
  );
}
