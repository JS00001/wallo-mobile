import Svg, { Path } from "react-native-svg";

import { IconProps } from "@/assets/icons";

export default function HomeDuotone({
  size = 24,
  color = "#000000",
  ...props
}: IconProps) {
  return (
    <Svg width={size} height={size} viewBox="0 0 24 24" fill="none" {...props}>
      <Path
        opacity={0.5}
        d="M13.106 22h-2.212c-3.447 0-5.17 0-6.345-1.012-1.175-1.012-1.419-2.705-1.906-6.093l-.279-1.937c-.38-2.637-.57-3.956-.029-5.083.541-1.127 1.691-1.813 3.992-3.183l1.385-.825C9.8 2.622 10.846 2 12 2c1.154 0 2.199.622 4.288 1.867l1.385.825c2.3 1.37 3.451 2.056 3.992 3.183.541 1.127.35 2.446-.03 5.083l-.278 1.937c-.487 3.388-.731 5.081-1.906 6.093C18.276 22 16.553 22 13.106 22z"
        fill={color}
      />
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M12 18.75a.75.75 0 01-.75-.75v-3a.75.75 0 111.5 0v3a.75.75 0 01-.75.75z"
        fill={color}
      />
    </Svg>
  );
}