import { BlurView } from "expo-blur";
import colors from "tailwindcss/colors";
import { StyleSheet } from "react-native";
import { Redirect, Tabs } from "expo-router";

import Icon from "@/ui/Icon";
import Text from "@/ui/Text";
import useAuthStore from "@/store/auth";

export default function Layout() {
  const { isAuthed } = useAuthStore();

  if (!isAuthed()) {
    return <Redirect href="/auth/login" />;
  }

  return (
    <Tabs
      screenOptions={{
        headerShown: false,
        tabBarActiveTintColor: colors.indigo[700],
        tabBarInactiveTintColor: colors.gray[500],
        tabBarItemStyle: {
          marginTop: 16,
        },
        tabBarStyle: {
          position: "absolute",
          height: 100,
        },
        sceneStyle: {
          backgroundColor: "white",
        },
        tabBarLabel: ({ color, children }) => {
          return (
            <Text size="xs" style={{ color }}>
              {children}
            </Text>
          );
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
          title: "Home",
          tabBarIcon: ({ color }) => {
            return (
              <Icon
                className="mb-2"
                size={32}
                color={color}
                icon="Solar.HomeDuotone"
              />
            );
          },
        }}
      />
      <Tabs.Screen
        name="learn"
        options={{
          title: "Learn",
          tabBarIcon: ({ color }) => {
            return (
              <Icon
                className="mb-2"
                size={32}
                color={color}
                icon="Solar.BookDuotone"
              />
            );
          },
        }}
      />
      <Tabs.Screen
        name="shop"
        options={{
          title: "Shop",
          tabBarIcon: ({ color }) => {
            return (
              <Icon
                className="mb-2"
                size={32}
                color={color}
                icon="Solar.ShopDuotone"
              />
            );
          },
        }}
      />
      <Tabs.Screen
        name="profile"
        options={{
          title: "Profile",
          tabBarIcon: ({ color }) => {
            return (
              <Icon
                className="mb-2"
                size={32}
                color={color}
                icon="Solar.UserDuotone"
              />
            );
          },
        }}
      />
    </Tabs>
  );
}
