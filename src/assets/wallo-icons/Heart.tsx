import Svg, { Path } from "react-native-svg";

import { IconProps } from "@/assets/icons";

export default function Heart({
  size = 24,
  color = "#EF4444",
  ...props
}: IconProps) {
  return (
    <Svg width={size} height={size} viewBox="0 0 24 24" fill="none" {...props}>
      <Path
        d="M2 9.26c0 3.748 4.02 7.711 6.962 10.11C10.294 20.458 10.96 21 12 21c1.04 0 1.706-.543 3.038-1.63C17.981 16.972 22 13.009 22 9.26 22 3.35 16.5.663 12 5.5 7.5.663 2 3.349 2 9.26z"
        fill={color}
      />
      <Path
        d="M4.77 8.27c.296-1.286.781-2.052 1.698-2.612.484-.296.6-1.004.149-1.35a.584.584 0 00-.586-.092c-.451.193-1.31.681-2.09 1.807-.855 1.235-.762 2.126-.67 2.48.03.113.106.205.2.277.475.366 1.166.075 1.3-.51z"
        fill="#fff"
        fillOpacity={0.25}
      />
    </Svg>
  );
}
