import classNames from "classnames";

import Icon from "@/ui/Icon";
import Text from "@/ui/Text";
import Pressable from "@/ui/Pressable";
import useAuthStore from "@/store/auth";

export default function GemCount() {
  const count = useAuthStore((s) => s.user!.virtualCurrency);

  const containerClasses = classNames(
    "flex-row items-center gap-1",
    "px-3 py-2",
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
    <Pressable size="sm" className={containerClasses} onPress={onPress}>
      <Icon icon="Wallo.Gem" size={20} />
      <Text size="sm" className="font-medium text-blue-500">
        {formattedCount}
      </Text>
    </Pressable>
  );
}
