import * as AppleAuthentication from "expo-apple-authentication";
import AsyncStorage from "@react-native-async-storage/async-storage";

export default function AppleOAuthButton() {
  const onPress = async () => {
    try {
      const credential = await AppleAuthentication.signInAsync({
        requestedScopes: [
          AppleAuthentication.AppleAuthenticationScope.FULL_NAME,
          AppleAuthentication.AppleAuthenticationScope.EMAIL,
        ],
      });

      // We only get the email on the first login, past that, we never receive it again
      // so we need to cache it in case of errors, so that we can still get the value
      if (credential.email) {
        await AsyncStorage.setItem("appleOAuthEmail", credential.email);
      }

      // We only get the full name on the first login, past that, we never receive it again
      // so we need to cache it in case of errors, so that we can still get the value
      if (credential.fullName) {
        await AsyncStorage.setItem(
          "appleOAuthFullName",
          JSON.stringify(credential.fullName),
        );
      }
    } catch (e: any) {
      // handle that the user canceled the sign-in flow
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
