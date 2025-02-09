import { TouchableOpacity, View } from "react-native";
import { Swiper } from "rn-swiper-list";
import { router, useLocalSearchParams } from "expo-router";

import IconButton from "@/ui/IconButton";
import ProgressBar from "@/ui/ProgressBar";
import SafeAreaView from "@/ui/SafeAreaView";
import { useGetLesson } from "@/hooks/api/lessons";
import GemCount from "@/components/Statistics/GemCount";
import LiveCount from "@/components/Statistics/LiveCount";
import Text from "@/ui/Text";
import { useRef } from "react";

export default function Lesson() {
  const ref = useRef(null);
  const { lessonId } = useLocalSearchParams();
  const query = useGetLesson(lessonId as string);

  if (query.isLoading) return null;
  if (query.isError) return null;

  const lesson = query.data!.lesson;
  const { contentProgress, questionProgress } = query.data!.progress;

  const userProgress = contentProgress.index + questionProgress.index;
  const totalProgress = lesson.content.length + lesson.questions.length;

  return (
    <SafeAreaView className="flex-1 gap-6 px-6">
      <View className="gap-4">
        <View className="flex-row items-center justify-between">
          <IconButton icon="Solar.Close" onPress={router.back} />
          <View className="flex-row gap-2">
            <LiveCount />
            <GemCount />
          </View>
        </View>

        <ProgressBar hideLabel progress={userProgress} total={totalProgress} />
      </View>

      <View className="relative flex-1">
        <Swiper
          ref={ref}
          disableTopSwipe
          disableLeftSwipe
          disableRightSwipe
          disableBottomSwipe
          cardStyle={{ height: "100%", position: "relative" }}
          data={lesson.content}
          renderCard={(content) => (
            <>
              <View className="h-full flex-1 rounded-xl border-2 border-gray-200 bg-white p-6">
                <Text>{content}</Text>
              </View>
              <View className="absolute h-full w-full flex-row">
                <TouchableOpacity
                  className="h-full flex-1"
                  onPress={() => (ref.current as any)?.swipeBack()}
                />
                <TouchableOpacity
                  className="h-full flex-1"
                  onPress={() => (ref.current as any)?.swipeRight()}
                />
              </View>
            </>
          )}
        />
      </View>

      {/* <Text size="xl" className="font-semibold text-gray-800">
        Which of the following is the answer to the question being asked here?
      </Text>

      <View className="gap-2">
        <View className="flex-row items-center gap-4">
          <Text className="text-gray-800">Select One</Text>
          <View className="h-px flex-1 bg-gray-200" />
        </View>

        <Pressable size="sm" accent={colors.green[700]}>
          <View className="bg-green-100 px-6 py-5">
            <Text className="text-green-700">Option 1</Text>
          </View>
        </Pressable>
        <Pressable size="sm">
          <View className="px-6 py-5">
            <Text className="text-gray-500">Option 1</Text>
          </View>
        </Pressable>
        <Pressable size="sm">
          <View className="px-6 py-5">
            <Text className="text-gray-500">Option 1</Text>
          </View>
        </Pressable>
        <Pressable size="sm">
          <View className="px-6 py-5">
            <Text className="text-gray-500">Option 1</Text>
          </View>
        </Pressable>
        <Button size="lg">Submit</Button>
      </View> */}
    </SafeAreaView>
  );
}
