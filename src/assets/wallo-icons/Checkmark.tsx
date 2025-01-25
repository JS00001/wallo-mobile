import Svg, { Path, Rect } from "react-native-svg";

import { IconProps } from "@/assets/icons";

export default function Checkmark({
  size = 24,
  color = "#22C55E",
  ...props
}: IconProps) {
  return (
    <Svg width={size} height={size} viewBox="0 0 24 24" fill="none" {...props}>
      <Path
        d="M4.88521 13.02L8.96521 17.1L19.1652 6.90002"
        stroke={color}
        strokeWidth={3.06}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Rect
        x={18.7335}
        y={6.12625}
        width={0.982721}
        height={3.7121}
        rx={0.49136}
        transform="rotate(45.0033 18.7335 6.12625)"
        fill="white"
        fillOpacity={0.25}
      />
    </Svg>
  );
}
