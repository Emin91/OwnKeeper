export interface IStackNavigation {
    addListener: (type: string, callback: Function) => Function;
    removeListener: (type: string, callback: Function) => void;
    canGoBack(): boolean;
    goBack(): void;
    dangerouslyGetParent(): any;
    isFocused(): boolean;
    reset(state: any): void;
    pop(): void;
    popToTop(): void;
    push(routeName: string, params: any): void;
    navigate(routeName: string, params?: any): void;
    dispatch(action: any): void;
    dangerouslyGetState(): any;
    setOptions(options: any): void;
    setParams(params: any): void;
    replace(routeName: string, params?: any): void;
    emit({}): any;
};
    
export interface IRoute {
    key: string;
    name: string;
    params?: any;
};

export interface ICard {
    cardName: string;
    cardholderName: string;
    cardNumber: number;
    cardPin: number;
    cardCvv: number;
    expirationDate: string;
    cardNote?: string;
}

export interface IGeneratedPassword {
    generatedPassword: string;
}