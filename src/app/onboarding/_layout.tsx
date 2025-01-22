import { Redirect, Slot } from "expo-router";
import { SafeAreaView } from "react-native-safe-area-context";

import useAuthStore from "@/store/auth";
import ProgressBar from "@/ui/ProgressBar";
import useOnboardingStore, { OnboardingScreen } from "@/store/onboarding";

/**
 * "Middleware" for auth, don't ever show the auth layout if the user is already
 * authenticated. Also, redirect to the home page once the user logs in.
 */
export default function Layout() {
  const { user } = useAuthStore();

  const totalScreens = Object.keys(OnboardingScreen).length;
  const progress = useOnboardingStore((state) => state.screen + 1);

  if (!user) {
    return <Redirect href="/auth/login" />;
  }

  if (user.onboarded) {
    return <Redirect href="/main/home" />;
  }

  return (
    <SafeAreaView className="flex-1 gap-8 p-6">
      <ProgressBar hideLabel progress={progress} total={totalScreens} />

      <Slot />
    </SafeAreaView>
  );
}
