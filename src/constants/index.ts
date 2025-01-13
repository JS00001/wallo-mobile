import ExpoConstants from 'expo-constants';

import PackageJson from '../../package.json';

type Environment = 'development' | 'production';

// Get the current environment of the app
const environment = (() => {
  if (__DEV__) {
    return 'development';
  } else {
    return 'production';
  }
})() as Environment;

// All urls for all environments
export const Urls = {
  development: {
    WebUrl: 'https://localhost:3000',
    ApiUrl: 'https://local-dev.wallofinance.com',
  },
  production: {
    WebUrl: 'https://wallofinance.com',
    ApiUrl: 'https://api.wallofinance.com',
  },
}[environment];

const Constants = {
  /**
   * The current environment of the app
   */
  environment,
  /**
   * The version of the app
   */
  version: `${ExpoConstants.expoConfig?.version}-${PackageJson.updateVersion}`,
};

export default Constants;
