import { Stack } from "expo-router";

interface LayoutProps {}

const Layout: React.FC<LayoutProps> = () => {
  return (
    <Stack>
      <Stack.Screen name="index" />
      <Stack.Screen name="[module]/index" />
      <Stack.Screen name="[module]/lesson" />
      <Stack.Screen name="[module]/quiz" />
    </Stack>
  );
};

export default Layout;
