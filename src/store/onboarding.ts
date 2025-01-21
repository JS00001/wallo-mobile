import { create } from 'zustand';
import { persist } from 'zustand/middleware';

import PersistedAsyncStorage from '@/lib/async-store';

interface IOnboardingState {
  step: number;
  age: number | null;
  preferredCourses: string[];
}

interface IOnboardingStore extends IOnboardingState {
  nextStep: () => void;
  setAge: (age: number) => void;
  addPreferredCourse: (course: string) => void;
}

const useOnboardingStore = create<IOnboardingStore>()(
  persist(
    (set) => {
      const initialState: IOnboardingState = {
        step: 1,
        age: null,
        preferredCourses: [],
      };

      const nextStep = () => {
        set((prev) => ({
          ...prev,
          step: prev.step + 1,
        }));
      };

      const setAge = (age: number) => {
        set((prev) => ({
          ...prev,
          age,
        }));
      };

      const addPreferredCourse = (course: string) => {
        set((prev) => ({
          ...prev,
          preferredCourses: [...prev.preferredCourses, course],
        }));
      };

      return {
        ...initialState,
        nextStep,
        setAge,
        addPreferredCourse,
      };
    },
    {
      name: 'onboarding-storage',
      storage: PersistedAsyncStorage,
    },
  ),
);

export default useOnboardingStore;
