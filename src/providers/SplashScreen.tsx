import { useFonts } from "expo-font";
import React, { useEffect } from "react";
import * as SplashScreen from "expo-splash-screen";

const SplashScreenProvider: React.FC<{ children?: React.ReactNode }> = ({
  children,
}) => {
  const [loaded, error] = useFonts({
    Gabarito: require("../../assets/fonts/Gabarito-VariableFont_wght.ttf"),
  });

  /**
   * When the fonts load, hide the splash screen
   */
  useEffect(() => {
    if (loaded || error) {
      SplashScreen.hideAsync();
    }
  }, [loaded, error]);

  if (!loaded || error) {
    return null;
  }

  return children;
};

export default SplashScreenProvider;
