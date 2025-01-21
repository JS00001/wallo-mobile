import { useFonts } from "expo-font";
import * as SplashScreen from "expo-splash-screen";
import { PropsWithChildren, useEffect } from "react";

export default function SplashScreenProvider({ children }: PropsWithChildren) {
  const [loaded, error] = useFonts({
    Gabarito: require("../../assets/fonts/Gabarito-VariableFont_wght.ttf"),
  });

  /**
   * When the fonts load, hide the splash screen
   */
  useEffect(() => {
    const checkSplashState = async () => {
      if (loaded || error) {
        // Wait a tick to prevent a flicker of null content still showing
        // when the splash screen is hidden
        await new Promise((resolve) => setTimeout(resolve));
        await SplashScreen.hideAsync();
      }
    };

    checkSplashState();
  }, [loaded, error]);

  if (!loaded || error) {
    return null;
  }

  return children;
}
