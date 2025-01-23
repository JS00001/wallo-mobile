import { View } from "react-native";

import Text from "@/ui/Text";
import Course from "@/ui/Course";
import { useGetCourses } from "@/hooks/api/courses";
import ScreenLayout from "@/components/ScreenLayout";

export default function Learn() {
  const query = useGetCourses();

  if (query.isLoading) return null;
  if (query.error) return null;

  const courses = query.data?.courses || [];
  const inProgressCourses = courses.filter((c) => {
    return c.completedLessons > 0 && c.completedLessons < c.totalLessons;
  });

  const completedCourses = courses.filter((c) => {
    return c.completedLessons === c.totalLessons;
  });

  const suggestedCourses = courses.filter((c) => {
    return c.completedLessons === 0;
  });

  return (
    <ScreenLayout title="Learn" showLives showGems>
      {inProgressCourses.length > 0 && (
        <View className="gap-2">
          <Text size="lg" className="font-medium text-gray-700">
            In Progress
          </Text>

          {inProgressCourses.map((course) => (
            <Course key={course._id} course={course} />
          ))}
        </View>
      )}

      {completedCourses.length > 0 && (
        <View className="gap-2">
          <Text size="lg" className="font-medium text-gray-700">
            Completed Courses
          </Text>

          {completedCourses.map((course) => (
            <Course key={course._id} course={course} />
          ))}
        </View>
      )}

      <View className="gap-2">
        <Text size="lg" className="font-medium text-white">
          Suggested Courses
        </Text>

        {suggestedCourses.map((course) => (
          <Course key={course._id} course={course} />
        ))}
      </View>
    </ScreenLayout>
  );
}
