import { create } from 'zustand';
import { persist } from 'zustand/middleware';

import { IUser } from '@/@types';
import PersistedAsyncStorage from '@/lib/async-store';

/**
 * State that represents every detail of the user's auth state
 */
interface IAuthState {
  user: IUser | null;
  accessToken: string | null;
  refreshToken: string | null;
}

/**
 * Metadata about the auth state
 */
interface IAuthMetadata {
  hasHydrated: boolean;
}

type IAuthStoreState = IAuthState & IAuthMetadata;

interface IAuthStore extends IAuthStoreState {
  logout: () => void;
  login: (state: IAuthState) => void;
  setField: <K extends keyof IAuthStoreState>(
    field: K,
    value: IAuthStoreState[K],
  ) => void;
}

const useAuthStore = create<IAuthStore>()(
  persist(
    (set, get) => {
      const initialState: IAuthStoreState = {
        // State
        user: null,
        accessToken: null,
        refreshToken: null,
        // Metadata
        hasHydrated: false,
      };

      /**
       * Set the auth state to the provided state
       */
      const login = (state: IAuthState) => {
        set((prev) => ({
          ...prev,
          ...state,
        }));
      };

      /**
       * Clear the user's auth state
       */
      const logout = () => {
        set((prev) => ({
          ...prev,
          user: null,
          accessToken: null,
          refreshToken: null,
        }));
      };

      /**
       * Set a specific field in the auth state
       */
      const setField = <K extends keyof IAuthStoreState>(
        field: K,
        value: IAuthStoreState[K],
      ) => {
        set((state) => ({ ...state, [field]: value }));
      };

      return {
        ...initialState,
        login,
        logout,
        setField,
      };
    },
    {
      name: 'auth-storage',
      storage: PersistedAsyncStorage,
      // Only store the user, access token, and refresh token
      partialize: (state) => {
        return {
          user: state.user,
          accessToken: state.accessToken,
          refreshToken: state.refreshToken,
        };
      },
      // When the async storage is done fetching, update the hasHydrated field
      onRehydrateStorage: () => {
        return (state, error) => {
          if (error || !state) {
            return state;
          }

          return state.setField('hasHydrated', true);
        };
      },
    },
  ),
);

export default useAuthStore;
