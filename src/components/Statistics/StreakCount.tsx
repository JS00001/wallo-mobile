import classNames from "classnames";
import { TouchableOpacity } from "react-native";

import Icon from "@/ui/Icon";
import Text from "@/ui/Text";
import useAuthStore from "@/store/auth";

export default function StreakCount() {
  const count = useAuthStore((s) => s.user!.streak);

  const containerClasses = classNames(
    "flex-row gap-1 items-center",
    "bg-white/30 px-3 py-1.5 rounded-full",
  );

  const onPress = () => {};

  return (
    <TouchableOpacity className={containerClasses} onPress={onPress}>
      <Icon icon="Wallo.Flame" size={20} />
      <Text size="sm" className="text-white">
        {count}
      </Text>
    </TouchableOpacity>
  );
}
