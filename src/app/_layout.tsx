import { Slot } from "expo-router";
import * as SplashScreen from "expo-splash-screen";
import { QueryClientProvider } from "@tanstack/react-query";
import { SafeAreaProvider } from "react-native-safe-area-context";

import "@/styles/global.css";

import AuthProvider from "@/providers/Auth";
import queryClient from "@/lib/query-client";
import SplashScreenProvider from "@/providers/SplashScreen";
import setupRequestInterceptors from "@/lib/axios/interceptors";

// Prevent the native splash screen from auto-hiding
SplashScreen.preventAutoHideAsync();

// Setup interceptors to handle common errors and refresh tokens
setupRequestInterceptors();

export default function RootLayout() {
  return (
    <QueryClientProvider client={queryClient}>
      <AuthProvider>
        <SplashScreenProvider>
          <SafeAreaProvider>
            <Slot />
          </SafeAreaProvider>
        </SplashScreenProvider>
      </AuthProvider>
    </QueryClientProvider>
  );
}
