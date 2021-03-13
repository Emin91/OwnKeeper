export const setBiometricType = (payload: boolean) => {
    return { type: 'SET_BIOMETRIC_TYPE', payload };
};

export const setSplashLoaded = (payload: boolean) => {
    return { type: 'SET_SPLASH_LOADED', payload };
};