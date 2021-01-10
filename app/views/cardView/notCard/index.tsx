import React, { FC, useContext, useMemo } from 'react';
import { View } from 'react-native';
import { CreditCardIcon } from '../../../assets/svg/creditCardIcon';
import { LocalizationContext } from '../../../modules/language';
import { getStyle } from './styles';

interface Props {};

export const NotCard: FC<Props> = () => {
    const styles = useMemo(() => getStyle(), []);
    const { lang }: any = useContext(LocalizationContext);

    return (
        <View style={styles.container}>
            <CreditCardIcon />
        </View>
    )
};