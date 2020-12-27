export interface cartI {
    productList: Array<Object>;
};

export const initState = {
    productList: [],
};

export const cart = (state: cartI = initState, action: { type: string, payload: any }) => {
    const { type, payload } = action;
    switch (type) {
        case 'SET_PRODUCT_LIST':
            return { ...state, productList: [...payload] };
        default:
            return state;
    };
};