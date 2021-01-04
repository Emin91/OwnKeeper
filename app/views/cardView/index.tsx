import React, { FC, useContext, useMemo } from 'react';
import { View } from 'react-native';
import { CreditCardIcon } from '../../assets/svg/creditCardIcon';
import { PlusIcon } from '../../assets/svg/plusIcon';
import { MainHeader } from '../../components/mainHeader';
import { IStackNavigation } from '../../entities';
import { LocalizationContext } from '../../modules/language';
import { getStyle } from './styles';

interface Props {
    navigation?: IStackNavigation; 
};

export const CardView: FC<Props> = ({ navigation }) => {
    const styles = useMemo(() => getStyle(), []);
    const { t }: any = useContext(LocalizationContext);

    return (
        <View style={styles.container}>
            <MainHeader buttonName={<PlusIcon />} onClick={() => navigation?.navigate('AddAndEditCardView')}/>
            <View style={{flex: 1, opacity: 0.3, justifyContent: 'center', alignItems: 'center'}}>
                <CreditCardIcon />
            </View>
        </View>
    )
};