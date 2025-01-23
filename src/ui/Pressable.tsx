import Animated, {
  useAnimatedStyle,
  useSharedValue,
  withSpring,
} from "react-native-reanimated";
import classNames from "classnames";
import { PressableProps, Pressable as RNPressable, View } from "react-native";

interface Props extends Omit<PressableProps, "children"> {
  children: React.ReactNode;
  size?: keyof typeof PressableSizeOffsets;
}

const PressableSizeOffsets = {
  sm: 2,
  md: 3,
  lg: 4,
};

export default function Pressable({
  className,
  children,
  size = "md",
  ...props
}: Props) {
  const BUTTON_ANIMATION_OFFSET = PressableSizeOffsets[size];

  const offset = useSharedValue(BUTTON_ANIMATION_OFFSET);
  const animatedStyles = useAnimatedStyle(() => ({
    borderRadius: 12,
    paddingBottom: offset.value,
    marginTop: BUTTON_ANIMATION_OFFSET - offset.value,
  }));

  const shadowClasses = classNames("border-2 border-gray-300", "bg-gray-300");

  const containerClasses = classNames("bg-white rounded-xl", className);

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
    <RNPressable onPressIn={onPressIn} onPressOut={onPressOut} {...props}>
      <Animated.View style={[animatedStyles]} className={shadowClasses}>
        <View className={containerClasses}>{children}</View>
      </Animated.View>
    </RNPressable>
  );
}
