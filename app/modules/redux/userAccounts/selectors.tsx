import { RootState } from '../store';

export const selectUserAccount = (state: RootState) => {
    return state.RUserAccounts.userAccounts;
};

export const selectUserAccountByID = (state: RootState, id: number) => {
    return state.RUserAccounts.userAccounts.find((item: any) => item.localId === id);
};