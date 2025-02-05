import { View } from "react-native";
import { router, useLocalSearchParams } from "expo-router";

import IconButton from "@/ui/IconButton";
import ProgressBar from "@/ui/ProgressBar";
import { useGetLesson } from "@/hooks/api/lessons";
import GemCount from "@/components/Statistics/GemCount";
import LiveCount from "@/components/Statistics/LiveCount";
import SafeAreaView from "@/ui/SafeAreaView";

export default function Lesson() {
  const { lessonId } = useLocalSearchParams();
  const query = useGetLesson(lessonId as string);

  return (
    <SafeAreaView className="flex-1 gap-6 px-6">
      <View className="flex-1 gap-4">
        <View className="flex-row items-center justify-between">
          <IconButton icon="Solar.Close" onPress={router.back} />
          <View className="flex-row gap-2">
            <LiveCount />
            <GemCount />
          </View>
        </View>

        <ProgressBar hideLabel progress={2} total={4} />
      </View>
    </SafeAreaView>
  );
}
