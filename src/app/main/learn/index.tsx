import ScreenLayout from "@/components/ScreenLayout";
import Card from "@/ui/Card";
import Icon from "@/ui/Icon";
import Section from "@/ui/Section";
import { router } from "expo-router";
import { View } from "react-native";
import colors from "tailwindcss/colors";

export default function Learn() {
  const onLessonPress = () => {
    router.push("/main/learn/lessonid/home");
  };

  return (
    <ScreenLayout title="Learn" showLives showGems>
      <View className="gap-4">
        <Section color="dark">In Progress</Section>
        <Card
          title="Finance 101"
          description="Lorem ipsum dolor sit amet, consectetur adipiscing elit."
          color={colors.indigo[500]}
          progress={{
            progress: 5,
            total: 8,
          }}
          onPress={onLessonPress}
        />
        <Card
          title="Finance 101"
          description="Lorem ipsum dolor sit amet, consectetur adipiscing elit."
          color={colors.indigo[500]}
          progress={{
            progress: 5,
            total: 8,
          }}
        />
      </View>

      <View className="gap-4">
        <Section>Lessons</Section>
        <Card
          title="Finance 101"
          description="Lorem ipsum dolor sit amet, consectetur adipiscing elit."
          color={colors.gray[500]}
          progress={{
            progress: 0,
            total: 8,
          }}
        />
        <Card
          title="Finance 101"
          description="Lorem ipsum dolor sit amet, consectetur adipiscing elit."
          color={colors.gray[500]}
          progress={{
            progress: 0,
            total: 8,
          }}
        />
        <Card
          title="Finance 101"
          description="Lorem ipsum dolor sit amet, consectetur adipiscing elit."
          color={colors.gray[500]}
          progress={{
            progress: 0,
            total: 8,
          }}
        />
        <Card
          title="Finance 101"
          description="Lorem ipsum dolor sit amet, consectetur adipiscing elit."
          color={colors.gray[500]}
          progress={{
            progress: 0,
            total: 8,
          }}
        />
      </View>

      <View className="gap-4">
        <Section>Completed</Section>
        <Card
          title="Finance 101"
          description="Lorem ipsum dolor sit amet, consectetur adipiscing elit."
          color={colors.green[500]}
          progress={{
            progress: 8,
            total: 8,
          }}
        />
        <Card
          title="Finance 101"
          description="Lorem ipsum dolor sit amet, consectetur adipiscing elit."
          color={colors.green[500]}
          progress={{
            progress: 8,
            total: 8,
          }}
        />
      </View>
    </ScreenLayout>
  );
}
