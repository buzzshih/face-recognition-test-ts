import { create } from "zustand";
import { getCurrentConfig } from "../utils/config";


// 環境變數的type
type currntConfigType = {
  REACT_APP_ENV: string;
};





type appStateType = {
  isLoading: boolean;
  isError: boolean;
  errorMsg: string | null;
  errorCode: number | null;
};

type appType = {
  currentConfig: currntConfigType;
  appState: appStateType;
  setAppState: (newAppState: Partial<appStateType>) => void;
};

export type useAppStateStoreType = {
  APP: appType;
};

export const useAppStateStore = create<useAppStateStoreType>()((set, getState) => ({
  APP: {
    currentConfig: getCurrentConfig(),
    appState: {
      isLoading: false,
      isError: false,
      errorMsg: null,
      errorCode: null,
    },
    setAppState: (newAppState) =>
      set((state) => ({
        ...state,
        APP: {
          ...state.APP,
          appState: {
            ...state.APP.appState,
            ...newAppState,
          },
        },
      })),
  },
}));
