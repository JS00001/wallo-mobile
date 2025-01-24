import classNames from "classnames";
import { PressableProps, View } from "react-native";

import Icon from "@/ui/Icon";
import Pressable from "@/ui/Pressable";
import { IconType } from "@/assets/icons";

interface Props extends PressableProps {
  icon: IconType;
}

export default function IconButton({ className, ...props }: Props) {
  const containerClasses = classNames(
    "h-full items-center justify-center",
    className,
  );

  return (
    <View className="h-11 w-11">
      <Pressable size="sm" className={containerClasses} {...props}>
        <Icon icon={props.icon} />
      </Pressable>
    </View>
  );
}
