import Animated, {
  useAnimatedStyle,
  useSharedValue,
  withSpring,
} from "react-native-reanimated";
import {
  ActivityIndicator,
  Pressable,
  TouchableOpacityProps,
  View,
} from "react-native";
import classNames from "classnames";

import Text from "@/ui/Text";

interface Props extends TouchableOpacityProps {
  loading?: boolean;
  size?: keyof typeof SizeClasses;
  color?: keyof typeof ColorClasses;
}

const BUTTON_ANIMATION_OFFSET = 5;

const SizeClasses = {
  sm: {
    container: "min-w-20 h-12 px-4",
    text: "sm" as const,
  },
  lg: {
    container: "min-w-32 h-14 px-6",
    text: "base" as const,
  },
};

const ColorClasses = {
  primary: {
    container: "bg-indigo-600",
    shadow: "bg-indigo-900",
    text: "text-white",
  },
  secondary: {
    container: "bg-gray-100",
    shadow: "bg-gray-300",
    text: "text-gray-500",
  },
  danger: {
    container: "bg-red-600",
    shadow: "bg-red-900",
    text: "text-white",
  },
};

export default function Button({
  children,
  loading = false,
  disabled = false,
  size = "lg",
  color = "primary",
  ...props
}: Props) {
  disabled = disabled || loading;

  const offset = useSharedValue(BUTTON_ANIMATION_OFFSET);
  const animatedStyles = useAnimatedStyle(() => ({
    borderRadius: 12,
    paddingBottom: offset.value,
    marginTop: BUTTON_ANIMATION_OFFSET - offset.value,
  }));

  const shadowClasses = classNames(
    disabled && "opacity-65",
    ColorClasses[color].shadow,
  );

  const containerClasses = classNames(
    "items-center justify-center rounded-xl",
    SizeClasses[size].container,
    ColorClasses[color].container,
  );

  const textClasses = classNames(
    "font-medium",
    ColorClasses[color].text,
    loading && "opacity-0",
  );

  /**
   * When the button is pressed in and out, animate the button to make it look
   * like it's being pressed "in" and "out".
   */
  const onPressIn = () => {
    offset.value = withSpring(0, { duration: 300 });
  };

  const onPressOut = () => {
    offset.value = withSpring(BUTTON_ANIMATION_OFFSET, { duration: 300 });
  };

  return (
    <Pressable
      disabled={disabled}
      onPressIn={onPressIn}
      onPressOut={onPressOut}
      {...props}
    >
      <Animated.View style={[animatedStyles]} className={shadowClasses}>
        <View className={containerClasses}>
          <Text size={SizeClasses[size].text} className={textClasses}>
            {children}
          </Text>

          {loading && (
            <ActivityIndicator size="small" className="absolute inset-0" />
          )}
        </View>
      </Animated.View>
    </Pressable>
  );
}
