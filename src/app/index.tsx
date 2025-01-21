import { Redirect } from "expo-router";

import useAuthStore from "@/store/auth";

export default function Index() {
  const { isAuthed } = useAuthStore();

  if (isAuthed()) {
    return <Redirect href="/main/home" />;
  }

  return <Redirect href="/auth/login" />;
}
