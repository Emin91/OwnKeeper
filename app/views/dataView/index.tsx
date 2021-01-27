import React, { FC, useEffect, useMemo } from 'react';
import { View, FlatList, Keyboard } from 'react-native';
import { selectUserAccount } from '../../modules/redux/userAccounts/selectors';
import { shallowEqual, useSelector } from 'react-redux';
import { MainHeader } from '../../components/mainHeader';
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
    const userAccount: Array<{localSiteName: string, localLogin: string, localPassword: string, localNote?: string, localId: number}>  = useSelector(selectUserAccount, shallowEqual)

    useEffect(() => {
        Keyboard.dismiss();
    }, []);
 
    return (
        <View style={styles.container}>
            <MainHeader buttonName={<PlusIcon />} onClick={() => navigation.navigate('AddAndEditAccountView')} />
            {userAccount.length > 0
                ? <FlatList 
                    data={userAccount} 
                    style={styles.items}
                    keyExtractor={item => `${item.localSiteName} + ${Math.random()*Date.now()}`}
                    renderItem={({item: {localId, localLogin, localSiteName}}) => 
                        <DataItem {...{localId, localLogin, localSiteName, navigation}} />} />
                : <NoData />}
        </View>
    )
};