import { IconProps, Solar, Wallo, type IconType } from "@/assets/icons";
import { View } from "react-native";

interface Props extends IconProps {
  icon: IconType;
}

export default function Icon({ icon, className, ...props }: Props) {
  const [iconCollection, iconName] = icon.split(".");

  const Collection = { Solar, Wallo }[iconCollection]!;

  const IconComponent = Collection[
    iconName as keyof typeof Collection
  ] as React.FC<IconProps>;

  return (
    <View className={className}>
      <IconComponent {...props} />
    </View>
  );
}
