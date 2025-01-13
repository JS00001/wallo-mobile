import AsyncStorage from '@react-native-async-storage/async-storage';

const MemoryStorage = (tokenName: string) => {
  let token: string | null = null;

  return {
    setToken: (newToken: string | null) => {
      token = newToken;
      AsyncStorage.setItem(tokenName, newToken || '');
    },
    getToken: async () => {
      if (token) {
        return token;
      }

      return (await AsyncStorage.getItem(tokenName)) || null;
    },
  };
};

const refreshTokenStorage = MemoryStorage('refreshToken');
const accessTokenStorage = MemoryStorage('accessToken');

export const getRefreshToken = refreshTokenStorage.getToken;
export const setRefreshToken = refreshTokenStorage.setToken;

export const getAccessToken = accessTokenStorage.getToken;
export const setAccessToken = accessTokenStorage.setToken;

export const isLoggedIn = async () => {
  const accessToken = await getAccessToken();
  return !!accessToken;
};
