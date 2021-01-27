import { RootState } from '../store';

export const selectBorderColor = (state: RootState) => {
    return state.RValidation.borderColor;
};
