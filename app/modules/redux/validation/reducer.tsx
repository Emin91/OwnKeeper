export interface authI {
    isAuthorization: boolean;
};

export const initState = {
    isAuthorization: false,
};

export const RValidation = (state: authI = initState, action: { type: string, payload: any }) => {
    const { type, payload } = action;
    switch (type) {
        case 'SET_AUTHENTICATION_STATE':
            return { isAuthorization: payload };
        default:
            return state;
    };
};