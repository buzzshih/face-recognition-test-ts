export type configType = {
    [key: string]: {

      REACT_APP_ENV: string;

    };
  };

  export const config: configType = {
    dev: {
      REACT_APP_ENV: 'dev',
    },
    beta: {
      REACT_APP_ENV: 'beta',
    },
    prod: {
      REACT_APP_ENV: 'prod',
    },
  };