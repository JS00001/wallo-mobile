import { View } from "react-native";

import Text from "@/ui/Text";
import Course from "@/ui/Course";
import Skeleton from "@/ui/Skeleton";
import { useGetCourses } from "@/hooks/api/courses";
import ErrorMessage from "@/components/ErrorMessage";

export default function SuggestedCoursesWidget() {
  const query = useGetCourses();

  if (query.isLoading) return <LoadingState />;

  if (query.error) {
    return (
      <ErrorMessage
        error={query.error}
        description="Could not load your courses"
      />
    );
  }

  const courses = query.data?.courses || [];

  const suggestedCourses = courses.slice(0, 2);
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

      {suggestedCourses.map((suggestedCourse) => (
        <Course key={suggestedCourse._id} course={suggestedCourse} />
      ))}
    </View>
  );
}

function LoadingState() {
  return (
    <View className="gap-2">
      <Skeleton className="h-7 w-3/4" />
      <Skeleton className="h-28" />
    </View>
  );
}
