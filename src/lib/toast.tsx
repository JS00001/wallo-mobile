import classNames from "classnames";
import { TouchableOpacity, View } from "react-native";
import type { BaseToastProps } from "react-native-toast-message";

import Text from "@/ui/Text";

const toastContainerClasses = classNames(
  "w-11/12 flex-row gap-4 p-4 rounded-lg",
  "bg-gray-800 shadow-md",
);

const toastText1Classes = classNames("text-white font-medium");
const toastText2Classes = classNames("text-gray-200");

const toastConfig = {
  /**
   * The successs modal, shows a green checkmark with the content
   */
  success: (props: BaseToastProps) => (
    <TouchableOpacity
      className={toastContainerClasses}
      disabled={isNoop(props.onPress)}
      onPress={props.onPress}
    >
      <View className="flex-1">
        <Text className={toastText1Classes} lines={1}>
          {props.text1}
        </Text>
        <Text className={toastText2Classes} lines={2}>
          {props.text2}
        </Text>
      </View>
    </TouchableOpacity>
  ),
  /**
   * The error modal, shows a red warning icon with the content
   */
  error: (props: BaseToastProps) => (
    <TouchableOpacity
      className={toastContainerClasses}
      disabled={isNoop(props.onPress)}
      onPress={props.onPress}
    >
      <View className="flex-1">
        <Text className={toastText1Classes} lines={1}>
          {props.text1}
        </Text>
        <Text className={toastText2Classes} lines={2}>
          {props.text2}
        </Text>
      </View>
    </TouchableOpacity>
  ),
  /**
   * The warning modal, shows a yellow-500 warning icon with the content
   */
  warning: (props: BaseToastProps) => (
    <TouchableOpacity
      className={toastContainerClasses}
      disabled={isNoop(props.onPress)}
      onPress={props.onPress}
    >
      <View className="flex-1">
        <Text className={toastText1Classes} lines={1}>
          {props.text1}
        </Text>
        <Text className={toastText2Classes} lines={2}>
          {props.text2}
        </Text>
      </View>
    </TouchableOpacity>
  ),
  /**
   * The info modal, shows a blue info icon with the content
   */
  info: (props: BaseToastProps) => {
    return (
      <TouchableOpacity
        className={toastContainerClasses}
        disabled={isNoop(props.onPress)}
        onPress={props.onPress}
      >
        <View className="flex-1">
          <Text className={toastText1Classes} lines={1}>
            {props.text1}
          </Text>
          <Text className={toastText2Classes} lines={2}>
            {props.text2}
          </Text>
        </View>
      </TouchableOpacity>
    );
  },
};

const isNoop = (func: any) => {
  const isFunction = typeof func === "function";
  const isNoop = func
    .toString()
    .replace(/\s/g, "")
    .startsWith("functionnoop()");

  return !isFunction || isNoop;
};

export default toastConfig;
