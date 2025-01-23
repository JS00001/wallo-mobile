import classNames from "classnames";
import colors from "tailwindcss/colors";
import { TouchableOpacity, TouchableOpacityProps, View } from "react-native";

import Icon from "@/ui/Icon";
import Text from "@/ui/Text";
import { IconType } from "@/assets/icons";

interface Props extends TouchableOpacityProps {
  title: string;
  description: string;
  icon?: IconType;
  selected?: boolean;
}

export default function SelectionCard({
  title,
  description,
  icon,
  selected,
  ...props
}: Props) {
  const shadowClasses = classNames(
    "rounded-xl pb-1",
    selected ? "bg-indigo-600" : "bg-gray-300",
  );

  const containerClasses = classNames(
    "flex-row items-center gap-6",
    "rounded-xl border-2 px-6 py-5",
    selected ? "border-indigo-600" : "border-gray-300",
    selected ? "bg-indigo-100" : "bg-white",
  );

  const titleClasses = selected ? "text-indigo-600" : "text-gray-800";
  const descriptionClasses = selected ? "text-indigo-500" : "text-gray-500";

  const iconColor = selected ? colors.indigo[600] : colors.gray[400];

  return (
    <View className={shadowClasses}>
      <TouchableOpacity
        className={containerClasses}
        activeOpacity={0.85}
        {...props}
      >
        {icon && <Icon icon={icon} size={26} color={iconColor} />}

        <View className="shrink">
          <Text className={titleClasses}>{title}</Text>
          <Text size="sm" className={descriptionClasses} lines={2}>
            {description}
          </Text>
        </View>
      </TouchableOpacity>
    </View>
  );
}
