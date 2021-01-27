import { RootState } from '../store';

export const selectGeneratedPassword = (state: RootState) => {
    return state.RGenerator.generatedPassword;
};
