# Bottom Sheets

Bottom sheets slide up from the bottom of the screen to reveal more content. They are all stored in this
directory and are opened from places all over the app.

## Creating a new bottom sheet

To begin, create a new file or folder in this directory. The file should be named in `PascalCase` and should
end in `.tsx`. If you are creating a folder, the folder should be named in `PascalCase` and should contain an
`index.tsx` file.

The file should export a single function that returns a JSX element named as `<Name>Sheet`.

There should be two components in each 'bottom sheet file'. These being `Content` and `<Name>Sheet`.

The `Content` component should be wrapped by either a `BottomSheetScrollView (/src/ui/BottomSheet/Containers/BottomSheetScrollView)` or a
`BottomSheetView (/src/ui/BottomSheet/Containers/BottomSheetView)` component.

The `<Name>Sheet` component should
be just a `BottomSheet` component that passes the `Content` component as a child. Below is an example to copy or paste

```tsx
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
```
