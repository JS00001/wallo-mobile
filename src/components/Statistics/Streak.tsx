import classNames from "classnames";
import { TouchableOpacity } from "react-native";

import Icon from "@/ui/Icon";
import Text from "@/ui/Text";

interface Props {
  count: number;
}

export default function Streak({ count }: Props) {
  const containerClasses = classNames(
    "flex-row gap-1 items-center",
    "bg-white/30 px-3 py-1.5 rounded-full",
  );

  const onPress = () => {};

  return (
    <TouchableOpacity className={containerClasses} onPress={onPress}>
      <Icon icon="Wallo.Flame" size={20} />
      <Text className="text-white">{count}</Text>
    </TouchableOpacity>
  );
}
