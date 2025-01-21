import { Redirect, Slot } from "expo-router";

import useAuthStore from "@/store/auth";
import { SafeAreaView } from "react-native-safe-area-context";
import ProgressBar from "@/ui/ProgressBar";

/**
 * "Middleware" for auth, don't ever show the auth layout if the user is already
 * authenticated. Also, redirect to the home page once the user logs in.
 */
export default function Layout() {
  const { user } = useAuthStore();

  if (!user) {
    return <Redirect href="/auth/login" />;
  }

  if (user.onboarded) {
    return <Redirect href="/main/home" />;
  }

  return (
    <SafeAreaView className="px-6 py-6">
      <ProgressBar progress={12} total={12} hideLabel />
      <Slot />
    </SafeAreaView>
  );
}
