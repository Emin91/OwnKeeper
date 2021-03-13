export interface appStateI {
    isBiometric: boolean;
    isSplashLoaded: boolean;
};

export const initState = {
    isBiometric: false,
    isSplashLoaded: false,
};

export const RAppState = (state: appStateI = initState, action: { type: string, payload: any }) => {
    const { type, payload } = action;

    switch (type) {
        case 'SET_BIOMETRIC_TYPE':
            return { ...state, isBiometric: payload };
        case 'SET_SPLASH_LOADED':
            return { ...state, isSplashLoaded: payload };
        default:
            return state;
    };
};