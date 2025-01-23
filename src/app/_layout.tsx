import { Slot } from "expo-router";
import * as SplashScreen from "expo-splash-screen";
import { QueryClientProvider } from "@tanstack/react-query";
import { SafeAreaProvider } from "react-native-safe-area-context";

import "@/styles/global.css";

import AuthProvider from "@/providers/Auth";
import queryClient from "@/lib/query-client";
import SplashScreenProvider from "@/providers/SplashScreen";
import setupRequestInterceptors from "@/lib/axios/interceptors";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import { BottomSheetModalProvider } from "@gorhom/bottom-sheet";
import BottomSheetComponent from "@/components/BottomSheets";

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
            <GestureHandlerRootView style={{ flex: 1 }}>
              <BottomSheetModalProvider>
                <BottomSheetComponent />
                <Slot />
              </BottomSheetModalProvider>
            </GestureHandlerRootView>
          </SafeAreaProvider>
        </SplashScreenProvider>
      </AuthProvider>
    </QueryClientProvider>
  );
}
