export interface userInfoI {
    isBiometric: boolean;
};

export const initState = {
    isBiometric: false,
};

export const RUserInfo = (state: userInfoI = initState, action: { type: string, payload: any }) => {
    const { type, payload } = action;
    switch (type) {
        case 'SET_BIOMETRIC_TYPE':
            return { isBiometric: payload };
        default:
            return state;
    };
};