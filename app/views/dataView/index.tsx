import React, { FC, useContext, useMemo } from 'react';
import { View, FlatList } from 'react-native';
import { LocalizationContext } from '../../modules/language';
import { MainHeader } from '../../components/mainHeader';
import { DataItems } from '../../../__mocks__/dataItems';
import { PlusIcon } from '../../assets/svg/plusIcon';
import { IStackNavigation } from '../../entities';
import { DataItem } from './dataItem';
import { getStyle } from './styles';
import { NoData } from './noData';

interface Props {
    navigation: IStackNavigation;
};

export const DataView: FC<Props> = ({ navigation }) => {
    const styles = useMemo(() => getStyle(), []);
    const { lang }: any = useContext(LocalizationContext);
 
    return (
        <View style={styles.container}>
            <MainHeader buttonName={<PlusIcon />} onClick={() => navigation.navigate('AddAndEditAccountView')} />
            {DataItems 
                ? <FlatList 
                    data={DataItems} 
                    style={styles.items}
                    renderItem={({item: {serviceName, login}}) => <DataItem {...{navigation, serviceName, login}} />} />
                : <NoData />}
        </View>
    )
};