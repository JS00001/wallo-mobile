import { PropsWithChildren } from "react";

import useAuthStore from "@/store/auth";
import { useGetUser } from "@/hooks/api/user";

export default function AuthProvider({ children }: PropsWithChildren) {
  const query = useGetUser();
  const hasHydrated = useAuthStore((state) => state.hasHydrated);

  // We can return null because the splash screen is cleared
  // on a deeper level in the component tree
  if (query.isLoading || !hasHydrated) {
    return null;
  }

  return children;
}
