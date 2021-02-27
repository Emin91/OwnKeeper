import { RootState } from '../store';

export const selectAuthtenticationState = (state: RootState) => {
    return state.RValidation.isAuthorization;
};
