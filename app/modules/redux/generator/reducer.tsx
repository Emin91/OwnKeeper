export interface generatorI {
    generatedPassword: String;
};

export const initState = {
    generatedPassword: '',
};

export const RGenerator = (state: generatorI = initState, action: { type: string, payload: any }) => {
    const { type, payload } = action;
    switch (type) {
        case 'SET_GENERATED_PASSWORD':
            return { generatedPassword: payload };
        default:
            return state;
    };
};