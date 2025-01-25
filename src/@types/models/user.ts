export enum SystemRole {
  Admin = 'admin',
  User = 'user',
}

export enum Reward {
  Daily = 'Daily',
  OneLesson = 'OneLesson',
  ThreeLessons = 'ThreeLessons',
}

export interface IUser {
  /** SYSTEM DATA */
  /** The id of the user */
  _id: string;
  /** The first name of the user's user */
  firstName: string;
  /** The last name of the user's user */
  lastName: string;
  /** The email of the user's user */
  email: string;
  /** The system role of the user */
  systemRole: SystemRole;
  /** The client version that the user is currently on */
  clientVersion: string;
  /** Whether the user has been onboarded or not */
  onboarded: boolean;
  /** Notifications information for the user */
  notifications: {
    /** Whether the user has enabled push notifications or not */
    enabled: boolean;
  };

  /** GAME DATA */
  /** The length of the user's streak */
  streak: number;
  /** The week's data for streaks */
  weekData: [boolean, boolean, boolean, boolean, boolean, boolean, boolean];
  /** How much virtual currency the user has */
  virtualCurrency: number;
  /** How many lives the user has */
  lives: number;
  /** Whether they claimed the daily reward */
  claimedDailyRewards: Reward[];
  /** The number of lessons that a user has completed for the day */
  dailyLessonCount: number;

  /** METADATA */
  /** The date that the user last completed a streak */
  lastStreakAt: Date;
  /** The date the user got their lives refilled at */
  lastLivesAt: Date;
  /** The date the user was last online (Last time they hit the API) */
  lastOnlineAt: Date;
  /** The date the user was created */
  createdAt: Date;
  /** The date the user was last updated */
  updatedAt: Date;
}
