import ProgressRing from "@/ui/ProgressRing";
import { SafeAreaView } from "react-native";

export default function ModuleHome() {
  return (
    <SafeAreaView>
      <ProgressRing progress={2} total={8} icon="Wallo.CheckmarkFilled" />
    </SafeAreaView>
  );
}
