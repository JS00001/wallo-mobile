import {
  TextInput as RNTextInput,
  TextInputProps as RNTextInputProps,
  View,
} from "react-native";
import classNames from "classnames";

import Text from "@/ui/Text";

interface Props extends RNTextInputProps {
  error?: string;
}

export default function TextInput({ error, className, ...props }: Props) {
  const inputClasses = classNames(
    "rounded-xl h-16 px-6 items-center border-2",
    "text-lg font-sans leading-tight font-medium text-gray-800",
    "placeholder:text-gray-400",
    "focus:border-indigo-600",
    error ? "border-red-500" : "border-gray-300",
    className,
  );

  return (
    <View className="gap-1">
      <RNTextInput className={inputClasses} {...props} />

      {error && (
        <Text size="sm" className="text-red-500">
          {error}
        </Text>
      )}
    </View>
  );
}
