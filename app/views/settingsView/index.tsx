import React, { FC, useContext, useMemo, useState } from 'react';
import { View, Text, Pressable } from 'react-native';
import { MainHeader } from '../../components/mainHeader';
import { LocalizationContext } from '../../modules/language';
import { getStyle } from './styles';

export const SettingsView: FC = () => {
    const styles = useMemo(() => getStyle(), []);
    const { lang }: any = useContext(LocalizationContext);

    return (
        <View style={styles.container}>
            <MainHeader />
            <View style={{ flex: 1 }}>
                <Text>Settings view</Text>
            </View>
        </View>
    )
};