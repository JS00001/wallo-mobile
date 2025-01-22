import { router } from "expo-router";
import { FlatList, View } from "react-native";

import Text from "@/ui/Text";
import Button from "@/ui/Button";
import Skeleton from "@/ui/Skeleton";
import SelectionCard from "@/ui/SelectionCard";
import useOnboardingStore from "@/store/onboarding";
import ErrorMessage from "@/components/ErrorMessage";
import { useGetCourseCatalog } from "@/hooks/api/courses";

export default function OnboardingStep1() {
  const query = useGetCourseCatalog();
  const { preferredCourses, toggleCourse, nextScreen } = useOnboardingStore();

  const ListEmptyComponent = () => {
    if (query.isLoading) {
      return new Array(10)
        .fill(null)
        .map((_, index) => <Skeleton key={index} className="h-24" />);
    }

    return (
      <ErrorMessage error={query.error} description="Could not load courses" />
    );
  };

  const onContinuePress = () => {
    if (preferredCourses.length) {
      nextScreen();
      router.push("/onboarding/step2");
    }
  };

  return (
    <View className="flex-1 gap-8">
      <View className="flex-1 gap-6">
        <View className="gap-2">
          <Text size="3xl" className="font-semibold text-gray-800">
            What interests you?
          </Text>
          <Text className="text-gray-500">
            Select at least one subject that you are interested in learning more
            about
          </Text>
        </View>

        <FlatList
          data={query.data?.courses}
          contentContainerClassName="gap-3"
          showsVerticalScrollIndicator={false}
          keyExtractor={(course) => course._id}
          ListEmptyComponent={ListEmptyComponent}
          renderItem={({ item }) => (
            <SelectionCard
              icon="Wallo.Book"
              title={item.name}
              description={item.description}
              selected={preferredCourses.includes(item._id)}
              onPress={() => toggleCourse(item._id)}
            />
          )}
        />
      </View>

      <Button disabled={!preferredCourses.length} onPress={onContinuePress}>
        Continue
      </Button>
    </View>
  );
}
