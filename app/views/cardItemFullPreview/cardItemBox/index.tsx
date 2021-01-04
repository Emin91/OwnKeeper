import React, { FC, useContext, useMemo, useState } from 'react';
import { View, Text, Pressable, TextInput, ToastAndroid } from 'react-native';
import { LocalizationContext } from '../../../modules/language';
import { colors } from '../../../assets/constants/colors';
import Clipboard from '@react-native-community/clipboard';
import { CopyIcon } from '../../../assets/svg/copyIcon';
import { HideIcon } from '../../../assets/svg/hideIcon';
import { ShowIcon } from '../../../assets/svg/showIcon';
import { getStyle } from './styles';

interface Props {
    label: string;
    isHidden?: boolean;
    inputValue: string;
};

export const CardItemBox: FC<Props> = ({ isHidden = false, label = '', inputValue = '' }) => {
    const [isShow, setIsShow] = useState(true);
    const styles = useMemo(() => getStyle(isShow, isHidden), [isShow, isHidden]);
    const { t }: any = useContext(LocalizationContext);
    const formatedNumber = inputValue.replace(/\B(?=(\d{4})+(?!\d))/g, " ");

    const copyToClipboard = () => {
        ToastAndroid.show(
            label !== t('cardNumber') ? `${t('copied')} ${inputValue}` : `${t('copied')} ${formatedNumber}`, 
            ToastAndroid.SHORT
        );
        Clipboard.setString(inputValue);
    };

    return (
        <View style={styles.itemContainerWrapper}>
            <View style={styles.itemWrapper}>
                <Text style={styles.label}>{label}</Text>
                <TextInput
                    value={label !== t('cardNumber') ? inputValue : formatedNumber}
                    editable={false}
                    secureTextEntry={isHidden ? isShow : false}
                    style={styles.inputWrapper}
                    placeholderTextColor={colors.white} />
                <View style={styles.iconWrapper}>
                    <Pressable onPress={() => setIsShow(!isShow)} style={({ pressed }) => [{ opacity: pressed ? 0.5 : 1, paddingRight: 10 }]}>
                        {isHidden ? isShow || !isHidden ? <ShowIcon /> : <HideIcon /> : null}
                    </Pressable>
                    <Pressable onPress={copyToClipboard} style={({ pressed }) => [{ opacity: pressed ? 0.5 : 1 }]}>
                        <CopyIcon />
                    </Pressable>
                </View>
            </View>
        </View>
    );
};