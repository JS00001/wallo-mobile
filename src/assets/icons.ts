export type IconProps = {
  size?: number;
  color?: string;
  className?: string;
};

// Allow for 'Wallo.CheckmarkFilled' or 'Solar.Sun', or any of the
// other icons to be used as a type, based on their collection
export type IconType =
  | `Wallo.${keyof typeof Wallo}`
  | `Solar.${keyof typeof Solar}`;

export const Wallo = {
  Book: require('./wallo-icons/Book').default,
  Checkmark: require('./wallo-icons/Checkmark').default,
  CheckmarkFilled: require('./wallo-icons/CheckmarkFilled').default,
  Flame: require('./wallo-icons/Flame').default,
  Gem: require('./wallo-icons/Gem').default,
  Heart: require('./wallo-icons/Heart').default,
  Home: require('./wallo-icons/Home').default,
  Lock: require('./wallo-icons/Lock').default,
  MoneyBag: require('./wallo-icons/MoneyBag').default,
  Shop: require('./wallo-icons/Shop').default,
  Trophy: require('./wallo-icons/Trophy').default,
  User: require('./wallo-icons/User').default,
  Warning: require('./wallo-icons/Warning').default,
};

export const Solar = {
  BookDuotone: require('./solar-icons/BookDuotone').default,
  Close: require('./solar-icons/Close').default,
  HomeDuotone: require('./solar-icons/HomeDuotone').default,
  ShopDuotone: require('./solar-icons/ShopDuotone').default,
  UserDuotone: require('./solar-icons/UserDuotone').default,
};
