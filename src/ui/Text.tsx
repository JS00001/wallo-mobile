import classNames from "classnames";
import { Text as RNText, TextProps as RNTextProps } from "react-native";

interface TextProps extends RNTextProps {
  size?: keyof typeof SizeClasses;
}

const SizeClasses = {
  xs: "text-xs leading-[16px]",
  sm: "text-sm leading-[20px]",
  base: "text-base leading-[24px]",
  lg: "text-lg leading-[28px]",
  xl: "text-xl leading-[32px]",
  "2xl": "text-2xl leading-[36px]",
  "3xl": "text-3xl leading-[40px]",
  "4xl": "text-4xl leading-[44px]",
  "5xl": "text-5xl leading-[48px]",
  "6xl": "text-6xl leading-[52px]",
  "7xl": "text-7xl leading-[56px]",
};

const Text: React.FC<TextProps> = ({ className, size = "base", ...props }) => {
  const textClasses = classNames(SizeClasses[size], className);

  return <RNText className={textClasses} {...props} />;
};

export default Text;
