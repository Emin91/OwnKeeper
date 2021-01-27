import React, { FC, useMemo } from 'react';
import { View, Text, Pressable, TextInput, ToastAndroid } from 'react-native';
import Clipboard from '@react-native-community/clipboard';
import { colors } from '../../assets/constants/colors';
import * as Animatable from 'react-native-animatable';
import { CopyIcon } from '../../assets/svg/copyIcon';
import { HideIcon } from '../../assets/svg/hideIcon';
import { ShowIcon } from '../../assets/svg/showIcon';
import { getStyle } from './styles';

interface Props {
    lang: any;
    label: string;
    isShow: boolean;
    isHidden?: boolean;
    inputValue: string;
    setIsShow: Function;
};

export const DataItemBox: FC<Props> = ({ isHidden = false, label = '', inputValue = '', lang, isShow, setIsShow }) => {
    const styles = useMemo(() => getStyle(isShow, isHidden), [isShow, isHidden]);
    const formatedNumber = inputValue.replace(/\B(?=(\d{4})+(?!\d))/g, " ");

    const copyToClipboard = () => {
        ToastAndroid.show(
            label !== lang('cardNumber') ? `${lang('copied')} ${inputValue}` : `${lang('copied')} ${formatedNumber}`, 
            ToastAndroid.SHORT
        );
        Clipboard.setString(inputValue);
    };

    return (
        <View style={styles.itemContainerWrapper}>
            <View style={styles.itemWrapper}>
                <Text style={styles.label}>{label}</Text>
                <TextInput
                    value={label !== lang('cardNumber') ? inputValue : formatedNumber}
                    editable={false}
                    secureTextEntry={isHidden ? isShow : false}
                    style={styles.inputWrapper}
                    placeholderTextColor={colors.white} />
                <View style={styles.iconWrapper}>
                    <Pressable onPress={() => setIsShow(!isShow)} style={({ pressed }) => [{ opacity: pressed ? 0.5 : 1, paddingRight: 10 }]}>
                        {isHidden ? isShow || !isHidden ? <ShowIcon /> : <HideIcon /> : null}
                    </Pressable>
                    <Animatable.View animation={'fadeIn'} iterationCount={1} direction="alternate" duration={1500}>
                        <Pressable onPress={copyToClipboard} style={({ pressed }) => [{ opacity: pressed ? 0.5 : 1 }]}>
                            <CopyIcon />
                        </Pressable>
                    </Animatable.View>
                </View>
            </View>
        </View>
    );
};