import { RootState } from '../store';

export const selectBiometricType = (state: RootState) => {
    return state.RAppState.isBiometric;
};

export const selectSplashLoaded = (state: RootState) => {
    return state.RAppState.isSplashLoaded;
};