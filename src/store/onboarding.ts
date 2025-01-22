import { produce } from 'immer';
import { create } from 'zustand';

export enum OnboardingScreen {
  PreferredCourses,
  Age,
  TermsOfService,
}

interface IOnboardingState {
  screen: OnboardingScreen;
  age: number | null;
  preferredCourses: string[];
}

interface IOnboardingStore extends IOnboardingState {
  nextScreen: () => void;
  setAge: (age: number) => void;
  toggleCourse: (course: string) => void;
}

const useOnboardingStore = create<IOnboardingStore>()((set) => {
  const initialState: IOnboardingState = {
    screen: OnboardingScreen.PreferredCourses,
    age: null,
    preferredCourses: [],
  };

  const nextScreen = () => {
    set((state) =>
      produce(state, (draft) => {
        draft.screen = state.screen + 1;
      }),
    );
  };

  const setAge = (age: number) => {
    set((state) =>
      produce(state, (draft) => {
        draft.age = age;
      }),
    );
  };

  const toggleCourse = (course: string) => {
    set((state) =>
      produce(state, (draft) => {
        const index = draft.preferredCourses.indexOf(course);

        if (index !== -1) {
          draft.preferredCourses.splice(index, 1);
        } else {
          draft.preferredCourses.push(course);
        }
      }),
    );
  };

  return {
    ...initialState,
    nextScreen,
    setAge,
    toggleCourse,
  };
});

export default useOnboardingStore;
