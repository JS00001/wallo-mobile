import classNames from "classnames";

import Icon from "@/ui/Icon";
import Text from "@/ui/Text";
import Pressable from "@/ui/Pressable";
import useAuthStore from "@/store/auth";
import useBottomSheetStore from "@/store/bottom-sheets";

export default function StreakCount() {
  const bottomSheet = useBottomSheetStore();
  const count = useAuthStore((s) => s.user!.streak);

  const containerClasses = classNames(
    "flex-row items-center gap-1",
    "px-3 py-2",
  );

  const onPress = () => {
    bottomSheet.open("STREAK");
  };

  return (
    <Pressable size="sm" className={containerClasses} onPress={onPress}>
      <Icon icon="Wallo.Flame" size={20} />
      <Text size="sm" className="font-medium text-orange-500">
        {count}
      </Text>
    </Pressable>
  );
}
