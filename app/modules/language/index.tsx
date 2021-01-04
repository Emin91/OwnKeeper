import React, { FC, useState, useMemo } from 'react';
import i18n from './services';

export const LocalizationContext: any = React.createContext({});

export const LocalizationContextProvider: FC<any> = (porps: any) => {
    const [locale, setLocale] = useState(i18n.locale);
    const localizationContext = useMemo(() => ({
        t: (scope: any, options: any) => i18n.t(scope, { locale, ...options }),
        locale,
        setLocale,
    }),
        [locale]
    );

    return (
        <LocalizationContext.Provider value={localizationContext}>
            {porps.children}
        </LocalizationContext.Provider>
    );
}