import { Tabs } from "expo-router";
import { BlurView } from "expo-blur";
import { StyleSheet } from "react-native";

export default function Layout() {
  return (
    <Tabs
      screenOptions={{
        headerShown: false,
        tabBarStyle: {
          position: "absolute",
        },
        tabBarBackground: () => (
          <BlurView
            intensity={24}
            style={{
              ...StyleSheet.absoluteFillObject,
              backgroundColor: "rgba(255,255,255,0.75)",
            }}
          />
        ),
      }}
    >
      <Tabs.Screen
        name="home"
        options={{
          title: "home",
        }}
      />
      <Tabs.Screen
        name="learn"
        options={{
          title: "learn",
        }}
      />
      <Tabs.Screen
        name="shop"
        options={{
          title: "shop",
        }}
      />
      <Tabs.Screen
        name="profile"
        options={{
          title: "profile",
        }}
      />
    </Tabs>
  );
}
