import classNames from "classnames";
import { TouchableOpacity } from "react-native";

import Icon from "@/ui/Icon";
import Text from "@/ui/Text";

interface Props {
  count: number;
}

export default function Gems({ count }: Props) {
  const containerClasses = classNames(
    "flex-row gap-1 items-center",
    "bg-white/30 px-3 py-1.5 rounded-full",
  );

  // Format the count if greater than 999 to 3 digits then the K or M, etc. Anything
  // higher is not feasible
  // IE. 123, 1.23K, 12.3K, 123K, 1.23M
  const formattedCount = (() => {
    if (count < 1_000) return count;
    if (count < 1_000_000) return (count / 1_000).toFixed(2) + "K";
    if (count < 1_000_000_000) return (count / 1_000_000).toFixed(2) + "M";
    return (count / 1_000_000_000).toFixed(2) + "B";
  })();

  const onPress = () => {};

  return (
    <TouchableOpacity className={containerClasses} onPress={onPress}>
      <Icon icon="Wallo.Gem" size={20} />
      <Text size="sm" className="text-white">
        {formattedCount}
      </Text>
    </TouchableOpacity>
  );
}
