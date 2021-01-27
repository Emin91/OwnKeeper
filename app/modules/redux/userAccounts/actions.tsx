export const setUserAccount = (payload: Object) => {
    return { type: 'SET_USER_ACCOUNT', payload };
};

export const updateUserAccount = (payload: Object) => {
    return { type: 'UPDATE_USER_ACCOUNT', payload };
};

export const deleteUserAccount = (payload: number) => {
    return { type: 'DELETE_USER_ACCOUNT', payload };
};