import Svg, { Path } from "react-native-svg";

import { IconProps } from "@/assets/icons";

export default function Flame({
  size = 24,
  color = "#F97316",
  ...props
}: IconProps) {
  return (
    <Svg width={size} height={size} viewBox="0 0 24 24" fill="none" {...props}>
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M20 13.111c0 5.815-4.042 8.064-7.168 8.69V21.8c-.956.192-1.063.183-1.169.175-.05-.004-.101-.008-.246.01-.168.01-.33.015-.484.015C8.289 22 3 20.221 3 13.11c0-2.78 1.461-4.65 2.86-5.715.778-.594 1.77-.003 1.87.971l.086.838c.104 1.02 1.034 1.857 1.894 1.298C11.394 9.407 12 6.775 12 5.333V3.505c0-.715.723-1.188 1.342-.828C16.127 4.296 20 7.82 20 13.111z"
        fill={color}
      />
      <Path
        d="M18.746 14.614c-.481 3.688-3.035 5.103-4.913 5.664-.524.157-1.037-.223-1.102-.766-.062-.515.308-.975.807-1.12 2.207-.644 3.175-2.434 3.513-3.892.108-.467.538-.817 1.013-.749.424.06.737.438.682.863z"
        fill="#fff"
        fillOpacity={0.25}
      />
    </Svg>
  );
}
