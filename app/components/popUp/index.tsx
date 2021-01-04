import React, { FC, useMemo } from 'react';
import { Text, View } from 'react-native';
import { getStyle } from './styles';

interface Props {
};

export const InfoPopUp: FC<Props> = () => {
    const styles = useMemo(() => getStyle(), []);

    return (
        <View style={{width: '100%', height: 50, position: 'absolute',zIndex: 100, top: 10, paddingHorizontal: 10,}}>
            <View style={{width: '100%', height: '100%', backgroundColor: 'white',borderRadius: 5}}>
                <View style={{width: 5, height: '100%', backgroundColor: '#2ce632',position: 'absolute',zIndex: 100,borderTopLeftRadius: 5, borderBottomLeftRadius: 5}}/>
                <View style={{flex: 1, paddingLeft: 10, justifyContent: 'center',}}>
                    <Text style={{fontSize: 12, color: 'black', fontFamily: 'RobotoRegular'}}>Copied</Text>
                    <Text style={{fontSize: 10, color: '#c7c7c7', fontFamily: 'RobotoRegular'}}>RqTgXfGkBdSw</Text>
                </View>
            </View>
        </View>
    )
};