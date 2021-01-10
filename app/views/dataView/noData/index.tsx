import React, { FC, useMemo } from 'react';
import { View } from 'react-native';
import { getStyle } from './styles';
import LottieView from 'lottie-react-native';

interface Props {
};

export const NoData: FC<Props> = ({  }) => {
    const styles = useMemo(() => getStyle(), []);
 
    return (
        <View style={styles.container}>
            <LottieView source={require('../../../assets/lotties/userData.json')} style={styles.lottie} autoPlay loop />
        </View>
    )
};