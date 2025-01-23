import { View } from "react-native";

import type { IPopulatedCourse } from "@/@types";

import Text from "@/ui/Text";
import Pressable from "@/ui/Pressable";
import ProgressBar from "@/ui/ProgressBar";

interface Props {
  course: IPopulatedCourse;
}

export default function Course({ course }: Props) {
  return (
    <Pressable className="gap-3 p-4" size="md">
      <View>
        <Text size="lg" className="text-gray-700">
          {course.name}
        </Text>
        <Text size="sm" className="text-gray-500">
          {course.description}
        </Text>
      </View>

      <ProgressBar
        progress={course.completedLessons}
        total={course.totalLessons}
      />
    </Pressable>
  );
}
