import Svg, { Path } from "react-native-svg";

import { IconProps } from "@/assets/icons";

export default function UserDuotone({
  size = 24,
  color = "#000000",
  ...props
}: IconProps) {
  return (
    <Svg width={size} height={size} viewBox="0 0 24 24" fill="none" {...props}>
      <Path d="M12 10a4 4 0 100-8 4 4 0 000 8z" fill={color} />
      <Path
        opacity={0.5}
        d="M12 21c3.866 0 7-1.79 7-4s-3.134-4-7-4-7 1.79-7 4 3.134 4 7 4z"
        fill={color}
      />
    </Svg>
  );
}
