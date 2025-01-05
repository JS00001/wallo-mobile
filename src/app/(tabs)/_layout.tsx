import { Tabs } from "expo-router";

export default function Layout() {
  return (
    <Tabs>
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
