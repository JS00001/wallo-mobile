import Svg, { Path } from "react-native-svg";

import { IconProps } from "@/assets/icons";

export default function Checkmark({
  size = 24,
  color = "#1D4ED8",
  ...props
}: IconProps) {
  return (
    <Svg width={size} height={size} viewBox="0 0 24 24" fill="none" {...props}>
      <Path
        d="M22 12c0 5.523-4.477 10-10 10S2 17.523 2 12 6.477 2 12 2s10 4.477 10 10z"
        fill={color}
      />
      <Path
        d="M16.03 8.97a.75.75 0 010 1.06l-5 5a.75.75 0 01-1.06 0l-2-2a.75.75 0 111.06-1.06l1.47 1.47 2.235-2.235L14.97 8.97a.75.75 0 011.06 0z"
        fill="#fff"
      />
      <Path
        d="M11.235 3.838c-.049-.468-.468-.812-.93-.718a8.942 8.942 0 00-3.414 1.485c-.379.27-.417.805-.116 1.159.305.359.84.395 1.23.13a7.263 7.263 0 012.48-1.075c.457-.103.798-.515.75-.981z"
        fill="#fff"
        fillOpacity={0.25}
      />
    </Svg>
  );
}
