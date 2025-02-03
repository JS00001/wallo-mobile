import ScreenLayout from "@/components/ScreenLayout";
import { useGetCourse } from "@/hooks/api/courses";
import ProgressRing from "@/ui/ProgressRing";
import { useLocalSearchParams } from "expo-router";
import { View } from "react-native";
import Text from "@/ui/Text";
import { IPopulatedLesson } from "@/@types";
import { IconType } from "@/assets/icons";

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
  const icon: IconType = (() => {
    if (lesson.completed) return "Wallo.CheckmarkFilled";
    if (lesson.locked) return "Wallo.Lock";
    return "Wallo.Book";
  })();

  return (
    <View className="flex-1 items-center">
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
    </View>
  );
}
