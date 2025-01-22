import { useState } from "react";
import { View } from "react-native";
import { Href, Redirect, router, Slot } from "expo-router";
import { SafeAreaView } from "react-native-safe-area-context";

import Button from "@/ui/Button";
import useAuthStore from "@/store/auth";
import ProgressBar from "@/ui/ProgressBar";

enum Step {
  PreferredCourses,
  Age,
  TermsOfService,
  Finish,
}

/**
 * "Middleware" for auth, don't ever show the auth layout if the user is already
 * authenticated. Also, redirect to the home page once the user logs in.
 */
export default function Layout() {
  const { user } = useAuthStore();
  const [step, setStep] = useState(1);

  const onContinue = () => {
    setStep((step) => step + 1);
    // if (step === Step.Finish) {
    //   return;
    // }

    // const nextStep = `/onboarding/step${step + 1}` as Href;
    // router.push(nextStep);
  };

  if (!user) {
    return <Redirect href="/auth/login" />;
  }

  if (user.onboarded) {
    return <Redirect href="/main/home" />;
  }

  return (
    <SafeAreaView className="flex-1 gap-4 p-6">
      <ProgressBar progress={step} total={Object.keys(Step).length} hideLabel />

      <View className="flex-1">
        <Slot />
      </View>

      <Button onPress={onContinue}>Continue</Button>
    </SafeAreaView>
  );
}
