import Button from "@/ui/Button";
import { useLogout } from "@/hooks/api/auth";

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
