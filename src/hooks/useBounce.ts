import {
  useAnimatedStyle,
  useSharedValue,
  withRepeat,
  withTiming,
} from 'react-native-reanimated';
import { useEffect } from 'react';

interface Props {
  height?: number;
  duration?: number;
}

const useBounce = (props?: Props) => {
  const height = props?.height || 12;
  const duration = props?.duration || 1500;

  const offset = useSharedValue(height);

  useEffect(() => {
    offset.value = withRepeat(
      withTiming(-offset.value, { duration }),
      -1,
      true,
    );
  }, []);

  const animatedStyle = useAnimatedStyle(() => ({
    transform: [{ translateY: offset.value }],
  }));

  return { style: animatedStyle };
};

export default useBounce;
