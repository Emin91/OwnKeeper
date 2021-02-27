import React, { FC, useContext, useMemo, useState } from 'react';
import { View, Text, Pressable } from 'react-native';
import { useDispatch } from 'react-redux';
import { MainHeader } from '../../components/mainHeader';
import { LocalizationContext } from '../../modules/language';
import { setAuthenticationState } from '../../modules/redux/validation/actions';
import { getStyle } from './styles';

export const SettingsView: FC = () => {
    const styles = useMemo(() => getStyle(), []);
    const { lang }: any = useContext(LocalizationContext);
    const dispatch = useDispatch();

    return (
        <View style={styles.container}>
            <MainHeader />
            <View style={{ flex: 1, justifyContent: 'center',alignItems: 'center',}}>
                <Pressable onPress={() => dispatch(setAuthenticationState(false))} style={({pressed}) => [{opacity: pressed ? 0.5 : 1}]}>
                    <Text style={{color: 'white', fontSize: 25}}>Exit</Text>
                </Pressable>
            </View>
        </View>
    )
};