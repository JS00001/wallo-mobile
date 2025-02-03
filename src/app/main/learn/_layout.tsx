import { Stack } from "expo-router";

interface LayoutProps {}

const Layout: React.FC<LayoutProps> = () => {
  return (
    <Stack
      initialRouteName="index"
      screenOptions={{
        headerShown: false,
        contentStyle: { backgroundColor: "white" },
      }}
    >
      <Stack.Screen name="index" />
      <Stack.Screen name="[courseId]/home" />
      <Stack.Screen name="[courseId]/lesson" />
      <Stack.Screen name="[courseId]/quiz" />
    </Stack>
  );
};

export default Layout;
