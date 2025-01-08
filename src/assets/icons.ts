export type IconProps = {
  size?: number;
  color?: string;
  className?: string;
};

// Allow for 'Wallo.Checkmark' or 'Solar.Sun', or any of the
// other icons to be used as a type, based on their collection
export type IconType =
  | `Wallo.${keyof typeof Wallo}`
  | `Solar.${keyof typeof Solar}`;

export const Wallo = {
  Book: require('./wallo-icons/Book').default,
  Checkmark: require('./wallo-icons/Checkmark').default,
  Flame: require('./wallo-icons/Flame').default,
  Gem: require('./wallo-icons/Gem').default,
  Heart: require('./wallo-icons/Heart').default,
  MoneyBag: require('./wallo-icons/MoneyBag').default,
  Trophy: require('./wallo-icons/Trophy').default,
};

export const Solar = {
  BookDuotone: require('./solar-icons/BookDuotone').default,
  HomeDuotone: require('./solar-icons/HomeDuotone').default,
  ShopDuotone: require('./solar-icons/ShopDuotone').default,
  UserDuotone: require('./solar-icons/UserDuotone').default,
};
