import { RootState } from '../store';

export const selectBiometricType = (state: RootState) => {
    return state.RUserInfo.isBiometric;
};