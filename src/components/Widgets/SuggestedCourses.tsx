import { View } from "react-native";

import Text from "@/ui/Text";
import Course from "@/ui/Course";
import { useGetCourses } from "@/hooks/api/courses";

export default function SuggestedCoursesWidget() {
  const query = useGetCourses();

  if (query.isLoading) return null;
  if (query.error) return null;

  const courses = query.data?.courses || [];

  const suggestedCourse = courses[0];
  const startedCourses = courses.filter((c) => {
    return c.completedLessons > 0 && c.completedLessons < c.totalLessons;
  });

  // IF the user has courses in progress, show all of them for quick access
  if (startedCourses.length) {
    return (
      <View className="gap-2">
        <Text size="lg" className="font-medium text-gray-700">
          Jump Back In
        </Text>

        {startedCourses.map((course) => (
          <Course key={course._id} course={course} />
        ))}
      </View>
    );
  }

  // If the user has not started any courses, or only has completed courses
  // show a course suggestion
  return (
    <View className="gap-2">
      <Text size="lg" className="font-medium text-gray-700">
        Start a New Course
      </Text>

      <Course course={suggestedCourse} />
    </View>
  );
}
