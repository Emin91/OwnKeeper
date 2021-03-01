import { RootState } from '../store';

export const selectAuthenticationState = (state: RootState) => {
    return state.RValidation.isAuthorization;
};
