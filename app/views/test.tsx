import React, { FC } from 'react';
import { Text, View } from 'react-native';

interface Props {
};

export const MainView: FC<Props> = () => {
    return (
        <View style={{flex: 1, backgroundColor: '#212336',}}>
            <Text style={{fontFamily: 'DINProMedium'}}>Main View</Text>
        </View>
    )
};