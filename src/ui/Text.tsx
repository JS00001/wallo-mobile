import classNames from "classnames";
import { Text as RNText, TextProps as RNTextProps } from "react-native";

interface TextProps extends RNTextProps {}

const Text: React.FC<TextProps> = ({ className, ...props }) => {
  const textClasses = classNames("font-sans", className);

  return <RNText className={textClasses} {...props} />;
};

export default Text;
