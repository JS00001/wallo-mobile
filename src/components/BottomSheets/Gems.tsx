import { forwardRef } from "react";
import { BottomSheetModal } from "@gorhom/bottom-sheet";

import { BottomSheetProps } from "./@types";

import Text from "@/ui/Text";
import BottomSheet from "@/ui/BottomSheet";
import BottomSheetView from "@/ui/BottomSheet/Containers/View";

type Props = BottomSheetProps;

function Content({}: Props) {
  return (
    <BottomSheetView>
      <Text>Hello World</Text>
    </BottomSheetView>
  );
}

const GemsSheet = forwardRef<BottomSheetModal, BottomSheetProps>(
  function GemsSheet(props, ref) {
    return <BottomSheet ref={ref} children={<Content {...props} />} />;
  },
);

export default GemsSheet;
