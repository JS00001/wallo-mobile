import colors from "tailwindcss/colors";
import { View, Animated } from "react-native";
import React, { useRef, useEffect } from "react";
import Svg, { Circle, G } from "react-native-svg";

import Icon from "@/ui/Icon";
import { IconType } from "@/assets/icons";

interface Props {
  progress: number;
  total: number;
  color?: string;
  icon: IconType;
}

const CircularProgress: React.FC<Props> = ({
  total,
  icon,
  progress,
  color = colors.indigo[500],
}) => {
  const animatedValue = useRef(new Animated.Value(0)).current;

  const size = 100;
  const innerStrokeWidth = 3;
  const outerStrokeWidth = 12;
  const percentage = (progress / total) * 100;

  const innerRadius = (size - outerStrokeWidth + 2) / 2;
  const innerCircumference = innerRadius * 2 * Math.PI;

  const outerRadius = (size - outerStrokeWidth) / 2;
  const outerCircumference = outerRadius * 2 * Math.PI;

  const animateProgress = (toValue: number) => {
    Animated.spring(animatedValue, {
      toValue,
      damping: 20,
      mass: 1,
      stiffness: 100,
      useNativeDriver: true,
    }).start();
  };

  useEffect(() => {
    animateProgress(percentage);
  }, [percentage]);

  const AnimatedCircle = Animated.createAnimatedComponent(Circle);

  return (
    <View className="items-center justify-center">
      <Svg width={size} height={size}>
        <G rotation="-90" origin={`${size / 2}, ${size / 2}`}>
          {/* Background Circle */}
          <Circle
            cx={size / 2}
            cy={size / 2}
            r={outerRadius}
            strokeWidth={outerStrokeWidth}
            stroke={colors.gray[200]}
            fill="none"
          />

          {/* Progress Circle */}
          <AnimatedCircle
            cx={size / 2}
            cy={size / 2}
            r={outerRadius}
            strokeWidth={outerStrokeWidth}
            stroke={color}
            fill="none"
            strokeDasharray={outerCircumference}
            strokeDashoffset={animatedValue.interpolate({
              inputRange: [0, 100],
              outputRange: [outerCircumference, 0],
            })}
            strokeLinecap="round"
          />

          {/*Progress Shine */}
          <AnimatedCircle
            cx={size / 2}
            cy={size / 2}
            r={innerRadius}
            fill="none"
            strokeWidth={innerStrokeWidth}
            stroke="rgba(255,255,255,.25)"
            strokeLinecap="round"
            strokeDasharray={innerCircumference}
            strokeDashoffset={animatedValue.interpolate({
              inputRange: [0, 100],
              outputRange: [innerCircumference, 0],
            })}
          />
        </G>
      </Svg>

      <View className="absolute items-center justify-center">
        <Icon size={32} icon={icon} />
      </View>
    </View>
  );
};

export default CircularProgress;
