import { useLogout } from "@/hooks/api/auth";
import { TouchableOpacity, Text } from "react-native";

export default function Profile() {
  const mutation = useLogout();

  const logout = () => {
    mutation.mutateAsync();
  };

  return (
    <TouchableOpacity
      className="mt-32 w-full rounded-full bg-red-500 p-2"
      onPress={logout}
    >
      <Text className="text-center text-white">Logout</Text>
    </TouchableOpacity>
  );
}
