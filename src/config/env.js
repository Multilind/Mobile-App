import Constants from 'expo-constants';

const releaseChannel =
    Constants.expoConfig?.releaseChannel || Constants.manifest2?.extra?.releaseChannel || 'default';

const ENV = {
  dev: {
    development: true,
    contentServer: `http://192.168.15.63:8000`,
    imagesServer: `http://192.168.0.88:5000`,
  },
  staging: {
    staging: true,
    contentServer: 'https://multilind-content-stagging.herokuapp.com/',
    imagesServer: 'https://multlind-files-prod.herokuapp.com/',
  },
  prod: {
    production: true,
    contentServer: 'https://multilind-content-prod.herokuapp.com/',
    imagesServer: 'https://multlind-files-prod.herokuapp.com/',
  },
};

function getEnvVars(env = '') {
  if (env === null || env === undefined || env === '') {
    return ENV.dev;
  }
  if (env.indexOf('dev') !== -1) {
    return ENV.dev;
  }
  if (env.indexOf('prod') !== -1) {
    return ENV.prod;
  }
  if (env.indexOf('staging') !== -1) {
    return ENV.staging;
  }
  return ENV.dev;
}

export default getEnvVars(releaseChannel);
