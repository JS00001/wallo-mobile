import classNames from "classnames";
import { TouchableOpacity } from "react-native";

import Icon from "@/ui/Icon";
import Text from "@/ui/Text";

export default function LiveCount() {
  const count = 32;

  const containerClasses = classNames(
    "flex-row gap-1 items-center",
    "bg-white/30 px-3 py-1.5 rounded-full",
  );

  const onPress = () => {};

  return (
    <TouchableOpacity className={containerClasses} onPress={onPress}>
      <Icon icon="Wallo.Heart" size={20} />
      <Text size="sm" className="text-white">
        {count}
      </Text>
    </TouchableOpacity>
  );
}
