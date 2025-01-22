import { FlatList, View } from "react-native";

import Text from "@/ui/Text";
import Button from "@/ui/Button";
import SelectionCard from "@/ui/SelectionCard";
import useOnboardingStore from "@/store/onboarding";
import { useGetCourseCatalog } from "@/hooks/api/courses";

export default function OnboardingStep1() {
  const query = useGetCourseCatalog();
  const { preferredCourses, toggleCourse, nextScreen } = useOnboardingStore();

  if (query.isLoading) return null;
  if (query.error) return null;

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
          renderItem={({ item }) => {
            const isSelected = preferredCourses.includes(item._id);

            return (
              <SelectionCard
                title={item.name}
                description={item.description}
                selected={isSelected}
                icon="Wallo.Book"
                onPress={() => toggleCourse(item._id)}
              />
            );
          }}
        />
      </View>

      <Button disabled={!preferredCourses.length} onPress={nextScreen}>
        Continue
      </Button>
    </View>
  );
}
