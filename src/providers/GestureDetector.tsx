/*
 * Created on Mon Aug 26 2024
 *
 * This software is the proprietary property of CampusRush.
 * All rights reserved. Unauthorized copying, modification, or distribution
 * of this software, in whole or in part, is strictly prohibited.
 * For licensing information contact CampusRush.
 *
 * Copyright (c) 2024 CampusRush
 * Do not distribute
 */

import {
  Gesture,
  GestureDetector,
  GestureTouchEvent,
} from "react-native-gesture-handler";
import { View } from "react-native";
import { PropsWithChildren } from "react";

import { SystemRole } from "@/@types";
import useAuthStore from "@/store/auth";
import useBottomSheetStore from "@/store/bottom-sheets";

export default function GestureDetectorProvider({
  children,
}: PropsWithChildren) {
  const { user } = useAuthStore();
  const bottomSheetStore = useBottomSheetStore();

  /**
   * When pressing the screen with three fingers at once, open
   * the network logger 'dev tools' bottom sheet
   */
  const onTripleFingerTap = (event: GestureTouchEvent) => {
    if (event.numberOfTouches === 3) {
      if (__DEV__ || user?.systemRole === SystemRole.Admin) {
        bottomSheetStore.open("NETWORK_LOGGER");
      }
    }
  };

  const threeFingerGesture = Gesture.Tap()
    .numberOfTaps(1)
    .maxDistance(20)
    .onTouchesDown(onTripleFingerTap)
    .runOnJS(true);

  return (
    <GestureDetector gesture={threeFingerGesture}>
      <View style={{ flex: 1 }}>{children}</View>
    </GestureDetector>
  );
}
