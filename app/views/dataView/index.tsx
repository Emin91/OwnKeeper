import React, { FC, useContext, useMemo, useState } from 'react';
import { View, Text, Pressable } from 'react-native';
import { MainHeader } from '../../components/mainHeader';
import { LocalizationContext } from '../../modules/language';
import { getStyle } from './styles';

export const DataView: FC = () => {
    const styles = useMemo(() => getStyle(), []);
    const { t }: any = useContext(LocalizationContext);

    return (
        <View style={styles.container}>
            <MainHeader />
            <View style={{ flex: 1 }}>
                <Text>Data view</Text>
            </View>
        </View>
    )
};