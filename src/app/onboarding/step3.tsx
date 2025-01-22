import { View } from "react-native";

import Text from "@/ui/Text";
import Button from "@/ui/Button";
import { useUpdateUser } from "@/hooks/api/user";
import useOnboardingStore from "@/store/onboarding";

export default function OnboardingStep3() {
  const updateUserMutation = useUpdateUser();
  const { age, preferredCourses } = useOnboardingStore();

  const onContinuePress = () => {
    updateUserMutation.mutate({
      age: age!,
      preferredCourses,
    });
  };

  return (
    <View className="flex-1 gap-8">
      <View className="flex-1 gap-6">
        <View className="gap-2">
          <Text size="3xl" className="font-semibold text-gray-800">
            Disclaimer
          </Text>

          <View className="gap-4">
            <Text className="text-gray-500">
              The content provided in this app is for educational and
              informational purposes only. It is not intended to be financial
              advice, and we are not licensed financial advisors.
            </Text>
            <Text className="text-gray-500">
              All financial decisions you make are your sole responsibility. We
              recommend consulting with a qualified financial professional
              before making any financial decisions.
            </Text>
            <Text className="text-gray-500">
              Use the information provided in this app at your own discretion
              and risk.
            </Text>
            <Text className="text-gray-500">
              By continuing, you agree to our Terms of Service and Privacy
              Policy, along with the above disclaimer.
            </Text>
          </View>
        </View>
      </View>

      <Button loading={updateUserMutation.isPending} onPress={onContinuePress}>
        Continue
      </Button>
    </View>
  );
}
