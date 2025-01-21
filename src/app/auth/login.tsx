import AppleOAuthButton from "@/components/AppleOAuthButton";
import { SafeAreaView } from "react-native-safe-area-context";

export default function Login() {
  return (
    <SafeAreaView>
      <AppleOAuthButton />
    </SafeAreaView>
  );
}
