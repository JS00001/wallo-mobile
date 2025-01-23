import { useLogout } from "@/hooks/api/auth";
import Button from "@/ui/Button";
import { TouchableOpacity, Text } from "react-native";

export default function Profile() {
  const mutation = useLogout();

  const logout = () => {
    mutation.mutateAsync();
  };

  return (
    <Button color="danger" className="mt-32" onPress={logout}>
      Logout
    </Button>
  );
}
