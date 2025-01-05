import Svg, { Path } from "react-native-svg";

import { IconProps } from "@/assets/icons";

export default function Gem({
  size = 24,
  color = "#60A5FA",
  ...props
}: IconProps) {
  return (
    <Svg width={size} height={size} viewBox="0 0 24 24" fill="none" {...props}>
      <Path
        d="M10.985 2.961a1.858 1.858 0 012.185 0l7.24 5.26c.651.474.924 1.313.675 2.078l-2.766 8.512a1.858 1.858 0 01-1.767 1.284h-8.95a1.858 1.858 0 01-1.766-1.284L3.07 10.299a1.858 1.858 0 01.675-2.077l7.24-5.26z"
        fill={color}
      />
      <Path
        d="M11.254 4.014a.31.31 0 01.49.252v1.969a.31.31 0 01-.125.248L6.933 9.975a.31.31 0 01-.264.052l-2.18-.574a.31.31 0 01-.1-.552l6.865-4.887z"
        fill="#fff"
        fillOpacity={0.25}
      />
    </Svg>
  );
}
