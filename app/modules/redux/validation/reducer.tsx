export interface borderColorI {
    borderColor: String;
};

export const initState = {
    borderColor: '#909098',
};

export const RValidation = (state: borderColorI = initState, action: { type: string, payload: any }) => {
    const { type, payload } = action;
    switch (type) {
        case 'SET_BORDER_COLOR':
            return { borderColor: payload };
        default:
            return state;
    };
};