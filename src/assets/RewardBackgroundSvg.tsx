import { View, ViewProps } from "react-native";
import Svg, { Path, Defs, LinearGradient, Stop } from "react-native-svg";

export default function RewardBackgroundSvg(props: ViewProps) {
  return (
    <View {...props}>
      <Svg width={393} height={852} viewBox="0 0 393 852" fill="none">
        <Path
          d="M212.5 851.5H181L114 0H279.5L212.5 851.5Z"
          fill="url(#paint0_linear_1894_2708)"
        />
        <Path
          d="M259.793 854.103L242.27 849.518L420.552 16L512.614 40.0897L259.793 854.103Z"
          fill="url(#paint1_linear_1894_2708)"
        />
        <Path
          d="M133.812 854.103L151.335 849.518L-26.9464 16L-119.009 40.0897L133.812 854.103Z"
          fill="url(#paint2_linear_1894_2708)"
        />
        <Defs>
          <LinearGradient
            id="paint0_linear_1894_2708"
            x1={196.75}
            y1={0}
            x2={196.75}
            y2={851.5}
            gradientUnits="userSpaceOnUse"
          >
            <Stop stopColor="#1E3A8A" />
            <Stop offset={1} stopColor="#17275C" />
          </LinearGradient>
          <LinearGradient
            id="paint1_linear_1894_2708"
            x1={466.583}
            y1={28.0449}
            x2={251.032}
            y2={851.811}
            gradientUnits="userSpaceOnUse"
          >
            <Stop stopColor="#1E3A8A" />
            <Stop offset={1} stopColor="#17275C" />
          </LinearGradient>
          <LinearGradient
            id="paint2_linear_1894_2708"
            x1={-72.9779}
            y1={28.0449}
            x2={142.573}
            y2={851.811}
            gradientUnits="userSpaceOnUse"
          >
            <Stop stopColor="#1E3A8A" />
            <Stop offset={1} stopColor="#17275C" />
          </LinearGradient>
        </Defs>
      </Svg>
    </View>
  );
}
