import { useMemo } from "react";
import { TouchableOpacity, View } from "react-native";
import { router, useLocalSearchParams } from "expo-router";

import Text from "@/ui/Text";
import { IconType } from "@/assets/icons";
import { IPopulatedLesson } from "@/@types";
import ProgressRing from "@/ui/ProgressRing";
import { useGetCourse } from "@/hooks/api/courses";
import ScreenLayout from "@/components/ScreenLayout";

export default function ModuleHome() {
  const { courseId } = useLocalSearchParams();
  const query = useGetCourse(courseId as string);

  if (query.isLoading) return null;
  if (query.isError) return null;

  const course = query.data!.course;
  const lessons = query.data!.lessons;

  // Split the lessons into rows of 2
  const rows = [];
  for (let i = 0; i < lessons.length; i += 2) {
    rows.push(lessons.slice(i, i + 2));
  }

  return (
    <ScreenLayout
      backButton
      title={course.name}
      description={course.description}
    >
      <View className="gap-6">
        {rows.map((row, i) => (
          <View key={i} className="flex-row justify-between gap-6">
            {row.map((lesson) => (
              <Lesson key={lesson._id} lesson={lesson} />
            ))}
          </View>
        ))}
      </View>
    </ScreenLayout>
  );
}

function Lesson({ lesson }: { lesson: IPopulatedLesson }) {
  const icon: IconType = useMemo(() => {
    if (lesson.completed) return "Wallo.CheckmarkFilled";
    if (lesson.locked) return "Wallo.Lock";
    return "Wallo.Book";
  }, [lesson]);

  const disabled = lesson.locked || lesson.completed;

  const onPress = () => {
    router.push({
      pathname: "/main/learn/[courseId]/[lessonId]",
      params: {
        courseId: lesson.course,
        lessonId: lesson._id,
      },
    });
  };

  return (
    <TouchableOpacity
      className="flex-1 items-center"
      disabled={disabled}
      onPress={onPress}
    >
      <ProgressRing
        icon={icon}
        progress={lesson.progress}
        total={lesson.total}
      />

      <Text size="sm" className="text-center text-gray-800">
        {lesson.name}
      </Text>
      <Text size="xs" className="text-center text-gray-500">
        {lesson.description}
      </Text>
    </TouchableOpacity>
  );
}
