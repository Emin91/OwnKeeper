import React, { FC, useMemo } from 'react';
import { FlatList, View } from 'react-native';
import { cardItemsData } from '../../../__mocks__/cardItemsData';
import { PlusIcon } from '../../assets/svg/plusIcon';
import { MainHeader } from '../../components/mainHeader';
import { IStackNavigation } from '../../entities';
import { CardItem } from './cardItem';
import { NotCard } from './notCard';
import { getStyle } from './styles';

interface Props {
    navigation: IStackNavigation; 
};

export const CardView: FC<Props> = ({ navigation }) => {
    const styles = useMemo(() => getStyle(), []);

    return (
        <View style={styles.container}>
            <MainHeader buttonName={<PlusIcon />} onClick={() => navigation?.navigate('AddAndEditCardView')}/>
            {/* { cardItemsData 
                ? <FlatList 
                    style={{flex: 1, marginBottom: 5}} 
                    data={cardItemsData} 
                    renderItem={({item: {title, date, iconName}, index}) => 
                        <CardItem key={`${index}_${title}`} {...{ title, date, iconName, navigation }} /> } />
                : <NotCard />} */}
        </View>
    )
};