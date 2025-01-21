import { Redirect, Slot } from "expo-router";

import useAuthStore from "@/store/auth";

/**
 * "Middleware" for auth, don't ever show the auth layout if the user is already
 * authenticated. Also, redirect to the home page once the user logs in.
 */
export default function Layout() {
  const { isAuthed } = useAuthStore();

  if (isAuthed()) {
    return <Redirect href="/main/home" />;
  }

  return <Slot />;
}
