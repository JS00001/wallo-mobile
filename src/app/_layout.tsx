import { Stack } from "expo-router";
import * as SplashScreen from "expo-splash-screen";

import "../styles/global.css";
import SplashScreenProvider from "@/providers/SplashScreen";

// Prevent the native splash screen from auto-hiding
SplashScreen.preventAutoHideAsync();

export default function RootLayout() {
  return (
    <SplashScreenProvider>
      <Stack screenOptions={{ headerShown: false }} />
    </SplashScreenProvider>
  );
}
