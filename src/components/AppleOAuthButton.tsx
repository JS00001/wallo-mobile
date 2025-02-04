import * as AppleAuthentication from "expo-apple-authentication";
import AsyncStorage from "@react-native-async-storage/async-storage";

import { useAppleOAuth } from "@/hooks/api/auth";

export default function AppleOAuthButton() {
  const mutation = useAppleOAuth();

  const onPress = async () => {
    try {
      const credential = await AppleAuthentication.signInAsync({
        requestedScopes: [
          AppleAuthentication.AppleAuthenticationScope.FULL_NAME,
          AppleAuthentication.AppleAuthenticationScope.EMAIL,
        ],
      });

      const responseGivenName = credential.fullName?.givenName;
      const responseFamilyName = credential.fullName?.familyName;

      // We only get the full name on the first login, past that, we never receive it again
      // so we need to cache it in case of errors, so that we can still get the value
      if (responseGivenName && responseFamilyName) {
        await AsyncStorage.setItem(
          "appleOAuthFullName",
          JSON.stringify(credential.fullName),
        );
      }

      // Attempt to pull the full name from the cache, or from the request. If we dont have it anywhere,
      // We can pass null. The backend will accept null as long as the user has created their account
      // before with a full name
      const fullName = await (async () => {
        if (responseGivenName && responseFamilyName) return credential.fullName;

        const fullName = await AsyncStorage.getItem("appleOAuthFullName");
        const fullNameObj = JSON.parse(fullName || "null");
        return fullNameObj as AppleAuthentication.AppleAuthenticationFullName | null;
      })();

      await mutation.mutateAsync({
        fullName,
        identityToken: credential.identityToken!,
      });
    } catch (e: any) {
      console.error(e.response.data);
      if (e.code === "ERR_REQUEST_CANCELED") {
        return;
      }
    }
  };

  return (
    <AppleAuthentication.AppleAuthenticationButton
      cornerRadius={12}
      style={{ width: "100%", height: 48 }}
      buttonType={AppleAuthentication.AppleAuthenticationButtonType.CONTINUE}
      buttonStyle={AppleAuthentication.AppleAuthenticationButtonStyle.BLACK}
      onPress={onPress}
    />
  );
}
