import Svg, { Path, Rect } from "react-native-svg";

import { IconProps } from "@/assets/icons";

export default function User({
  size = 24,
  color = "#1D4ED8",
  ...props
}: IconProps) {
  return (
    <Svg width={size} height={size} viewBox="0 0 24 24" fill="none" {...props}>
      <Path
        d="M12.5 10.4167C14.8012 10.4167 16.6667 8.5512 16.6667 6.25001C16.6667 3.94882 14.8012 2.08334 12.5 2.08334C10.1988 2.08334 8.33333 3.94882 8.33333 6.25001C8.33333 8.5512 10.1988 10.4167 12.5 10.4167Z"
        fill={color}
      />
      <Path
        d="M12.5 21.875C16.5271 21.875 19.7917 20.0095 19.7917 17.7083C19.7917 15.4071 16.5271 13.5417 12.5 13.5417C8.47292 13.5417 5.20833 15.4071 5.20833 17.7083C5.20833 20.0095 8.47292 21.875 12.5 21.875Z"
        fill={color}
      />
      <Rect
        x={15.1613}
        y={5.33069}
        width={1.77419}
        height={1.77419}
        rx={0.887097}
        transform="rotate(-179.737 15.1613 5.33069)"
        fill="white"
        fillOpacity={0.25}
      />
    </Svg>
  );
}
