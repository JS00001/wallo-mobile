import { z } from "zod";
import { router } from "expo-router";
import { View } from "react-native";

import Text from "@/ui/Text";
import Button from "@/ui/Button";
import useForm from "@/hooks/useForm";
import TextInput from "@/ui/TextInput";
import useOnboardingStore from "@/store/onboarding";

export default function OnboardingStep2() {
  const { setAge, nextScreen } = useOnboardingStore();

  const form = useForm({
    validators: {
      age: z.string().refine(
        (age) => {
          const num = Number(age);
          return num > 0 && num < 150;
        },
        { message: "Please enter a valid age" },
      ),
    },
    initialValues: {
      age: "",
    },
  });

  const onContinuePress = () => {
    const isValid = form.validateState();

    if (!isValid) return;

    const age = Number(form.state.age.value);

    setAge(age);
    nextScreen();
    router.push("/onboarding/step3");
  };

  return (
    <View className="flex-1 gap-8">
      <View className="flex-1 gap-6">
        <View className="gap-2">
          <Text size="3xl" className="font-semibold text-gray-800">
            How old are you?
          </Text>
          <Text className="text-gray-500">
            We use this information to provide you with the best learning
            experience
          </Text>
        </View>

        <TextInput
          placeholder="Enter your age"
          value={form.state.age.value}
          error={form.state.age.error}
          onChangeText={form.setValue.bind(null, "age")}
        />
      </View>

      <Button disabled={!form.state.age.value} onPress={onContinuePress}>
        Continue
      </Button>
    </View>
  );
}
