/*
 * Created on Fri Mar 15 2024
 *
 * This software is the proprietary property of CampusRush.
 * All rights reserved. Unauthorized copying, modification, or distribution
 * of this software, in whole or in part, is strictly prohibited.
 * For licensing information contact CampusRush.
 *
 * Copyright (c) 2024 CampusRush
 * Do not distribute
 */

import { BottomSheetBackdrop as RNBottomSheetBackdrop } from "@gorhom/bottom-sheet";
import { BottomSheetDefaultBackdropProps } from "@gorhom/bottom-sheet/lib/typescript/components/bottomSheetBackdrop/types";

export default function BottomSheetBackdrop(
  props: BottomSheetDefaultBackdropProps,
) {
  return (
    <RNBottomSheetBackdrop
      opacity={0.5}
      appearsOnIndex={0}
      disappearsOnIndex={-1}
      enableTouchThrough={true}
      {...props}
    />
  );
}
