const packageFile = require('./package.json');

const IS_DEV = process.env.APP_VARIANT === 'development';

export default {
  expo: {
    name: IS_DEV ? 'Wallo (DEV)' : 'Wallo',
    slug: 'wallo-mobile',
    version: packageFile.version,
    orientation: 'portrait',
    icon: IS_DEV ? './assets/images/icon-dev.png' : './assets/images/icon.png',
    scheme: 'myapp',
    userInterfaceStyle: 'light',
    newArchEnabled: false,
    ios: {
      usesAppleSignIn: true,
      supportsTablet: false,
      bundleIdentifier: IS_DEV ? 'com.wallomobile.dev' : 'com.wallomobile',
    },
    android: {
      adaptiveIcon: {
        foregroundImage: './assets/images/adaptive-icon.png',
        backgroundColor: '#ffffff',
      },
    },
    plugins: [
      'expo-apple-authentication',
      'expo-router',
      [
        'expo-splash-screen',
        {
          imageWidth: 200,
          resizeMode: 'contain',
          backgroundColor: '#4F46E5',
          image: IS_DEV
            ? './assets/images/splash-icon-dev.png'
            : './assets/images/splash-icon.png',
        },
      ],
      'expo-font',
    ],
    experiments: {
      typedRoutes: true,
    },
    extra: {
      router: {
        origin: false,
      },
      eas: {
        projectId: '3612145c-a83c-446f-b867-033dfe61af69',
      },
    },
  },
  updates: {
    url: 'https://u.expo.dev/3612145c-a83c-446f-b867-033dfe61af69',
  },
  runtimeVersion: {
    policy: 'appVersion',
  },
};
