import { ILesson } from './lesson';

export interface ICourse {
  /** The id of the course */
  _id: string;
  /** The name of the course */
  name: string;
  /** The description of the course */
  description: string;
}

export interface IPopulatedCourse extends ICourse {
  /** The lessons in the course */
  lessons: ILesson[];
  /** The number of total lessons in the course */
  totalLessons: number;
  /** The number of completed lessons in the course */
  completedLessons: number;
}
