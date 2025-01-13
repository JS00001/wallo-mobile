const packageFile = require('./package.json');

const IS_DEV = process.env.APP_VARIANT === 'development';

export default {
  expo: {
    name: IS_DEV ? 'Wallo (DEV)' : 'Wallo',
    slug: 'wallo',
    version: packageFile.version,
    orientation: 'portrait',
    icon: './assets/images/icon.png',
    scheme: 'myapp',
    userInterfaceStyle: 'light',
    newArchEnabled: true,
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
    web: {
      bundler: 'metro',
      output: 'static',
      favicon: './assets/images/favicon.png',
    },
    plugins: [
      'expo-apple-authentication',
      'expo-router',
      [
        'expo-splash-screen',
        {
          image: './assets/images/splash-icon.png',
          imageWidth: 200,
          resizeMode: 'contain',
          backgroundColor: '#4F46E5',
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
};
