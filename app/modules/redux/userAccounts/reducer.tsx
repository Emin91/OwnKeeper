export interface userAccountsI {
    userAccounts: Array<{localId: number, localLogin: string, localNote: string, localPassword: string, localSiteName: string}>;
};

export const initState = {
    userAccounts: [],
};

export const RUserAccounts = (state: userAccountsI = initState, action: { type: string, payload: any }) => {
    const { type, payload } = action;
    switch (type) {
        case 'SET_USER_ACCOUNT':
            return {
                ...state,
                userAccounts: [ ...state.userAccounts, payload]
            };
        case 'UPDATE_USER_ACCOUNT':
            return {
                ...state,
                userAccounts: [ ...state.userAccounts.map((p) => {
                    if(p.localId === payload.localId) {
                        return {
                            ...payload,
                        }
                    }
                    return p
                })]
            };
        case 'DELETE_USER_ACCOUNT':
            return {
                ...state,
                userAccounts: [ ...state.userAccounts.filter(p => p.localId !== payload)]
            };
        default:
            return state;
    };
};