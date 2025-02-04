import type { BottomSheetModal } from '@gorhom/bottom-sheet';

export interface BottomSheetProps {
  close: () => void;
  snapToIndex: (index: number) => void;
  snapToPosition: (position: string) => void;
}

export type IndividualSheetName = keyof IndividualSheetProps;

export type IndividualSheetData<T extends IndividualSheetName> = {
  data: IndividualSheetProps[T];
};

export interface IndividualSheetProps {
  GEMS: undefined;
  LIVES: undefined;
  NETWORK_LOGGER: undefined;
  STREAK: undefined;
}
