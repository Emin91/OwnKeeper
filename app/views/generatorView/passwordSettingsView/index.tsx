import React, { FC, useContext, useMemo } from 'react';
import { View, Text, Pressable, TextInput, ToastAndroid } from 'react-native';
import { colors } from '../../../assets/constants/colors';
import { CopyIcon } from '../../../assets/svg/copyIcon';
import { LocalizationContext } from '../../../modules/language';
import { SettingsItem } from './settingsItem';
import { getStyle } from './styles';
import Clipboard from '@react-native-community/clipboard';
import Slider from '@react-native-community/slider';

interface Props {
    passValue: string;
    isSymbol: boolean;
    isNumber: boolean;
    passLength: number;
    isUppercase: boolean;
    isLowercase: boolean;
    setNumber: Function;
    setSymbol: Function;
    setUpperCase: Function;
    setLowerCase: Function;
    setPassLength: Function;
};

export const GeneratePasswordSettings: FC<Props> = ({
    passValue,
    isSymbol,
    isNumber,
    passLength,
    isUppercase,
    isLowercase,
    setNumber,
    setSymbol,
    setUpperCase,
    setLowerCase,
    setPassLength }) => {
    const styles = useMemo(() => getStyle(), []);
    const { t }: any = useContext(LocalizationContext);
    
    const copyToClipboard = () => {
        ToastAndroid.show(
            `${t('copied')} ${passValue}`, ToastAndroid.SHORT
        );
        Clipboard.setString(passValue);
    };

    return (
        <View style={styles.container}>
            <Text style={styles.boxLabel}>{t('yourPassword')}</Text>
            <View style={styles.titleWrapper}>
                <Pressable onPress={copyToClipboard} style={({ pressed }) => [styles.copyButton, {opacity: pressed ? 0.5 : 1}]}>
                    {passValue !== t('clickToGenerate') ? <CopyIcon /> : null}
                </Pressable>
                <TextInput editable={false} numberOfLines={1} style={[styles.title, styles.input, {fontSize: passLength >= 25 && passValue !== t('clickToGenerate') ? 18 : 20}]} value={passValue}/>
            </View>
            <Text style={[styles.boxLabel, { marginTop: 10 }]}>{t('passLength')} <Text style={{color: passLength ? '#31c458' : colors.white}}>{passLength}</Text></Text>
            <View style={[styles.itemWrapper, styles.itemRow]}>
                <Text style={styles.title}>4</Text>
                <Slider
                    step={1}
                    value={passLength}
                    minimumValue={4}
                    maximumValue={32}
                    style={{width: '85%'}}
                    thumbTintColor={colors.white}
                    minimumTrackTintColor={colors.surfie}
                    maximumTrackTintColor={colors.darlClay}
                    onValueChange={(value) => setPassLength(value)} />
                <Text style={styles.title}>32</Text>
            </View>
            <Text style={[styles.boxLabel, { marginTop: 10 }]}>{t('settings')}</Text>
            <SettingsItem label={t('incUppercase')} switchValue={isUppercase} setSwitchValue={setUpperCase}/>
            <SettingsItem label={t('incLowercase')} switchValue={isLowercase} setSwitchValue={setLowerCase}/>
            <SettingsItem label={t('incNumbers')} switchValue={isNumber} setSwitchValue={setNumber}/>
            <SettingsItem label={t('incSymbols')} switchValue={isSymbol} setSwitchValue={setSymbol}/>
        </View>
    )
};