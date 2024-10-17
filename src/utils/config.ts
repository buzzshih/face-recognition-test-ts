import { config } from '../config';

export const getCurrentConfig = () => {
  const environment = process.env.REACT_APP_ENV || 'dev';
  const currentConfig = config[environment];

  console.log(`Current Environment is ${currentConfig}`)

  if (!currentConfig) {
    console.error(`Config for environment ${environment} not found.`);
  }

  return currentConfig;
};
