import classNames from "classnames";
import { Text as RNText, TextProps as RNTextProps } from "react-native";

interface TextProps extends Omit<RNTextProps, "numberOfLines"> {
  lines?: number;
  size?: keyof typeof SizeClasses;
}

const SizeClasses = {
  xs: "text-[12px] leading-[16px]",
  sm: "text-[14px] leading-[20px]",
  base: "text-[16px] leading-[24px]",
  lg: "text-[18px] leading-[28px]",
  xl: "text-[20px] leading-[28px]",
  "2xl": "text-[24px] leading-[32px]",
  "3xl": "text-[30px] leading-[36px]",
  "4xl": "text-[36px] leading-[40px]",
  "5xl": "text-[48px]",
  "6xl": "text-[64px]",
};

const Text: React.FC<TextProps> = ({
  lines,
  className,
  size = "base",
  ...props
}) => {
  const textClasses = classNames("font-sans", SizeClasses[size], className);

  return <RNText numberOfLines={lines} className={textClasses} {...props} />;
};

export default Text;
