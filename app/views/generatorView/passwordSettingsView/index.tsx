import React, { FC, useMemo } from 'react';
import { View, Text, Pressable, TextInput } from 'react-native';
import { colors } from '../../../assets/constants/colors';
import { CopyIcon } from '../../../assets/svg/copyIcon';
import { language } from '../../../modules/language';
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
    const { yourPassword, length, settings, incUppercase, incLowercase, incNumbers, incSymbols, clickToGenerate } = language;
    const styles = useMemo(() => getStyle(), []);
    
    const copyToClipboard = () => {
        Clipboard.setString(passValue);
    };

    return (
        <View style={styles.container}>
            <Text style={styles.boxLabel}>{yourPassword}</Text>
            <View style={styles.titleWrapper}>
                <Pressable onPress={copyToClipboard} style={({ pressed }) => [styles.copyButton, {opacity: pressed ? 0.5 : 1}]}>
                    {passValue !== clickToGenerate ? <CopyIcon /> : null}
                </Pressable>
                <TextInput editable={false} numberOfLines={1} style={[styles.title, styles.input, {fontSize: passLength >= 25 ? 18 : 20}]} value={passValue}/>
            </View>
            <Text style={[styles.boxLabel, { marginTop: 10 }]}>{length} <Text style={{color: passLength ? '#31c458' : colors.white}}>{passLength}</Text></Text>
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
            <Text style={[styles.boxLabel, { marginTop: 10 }]}>{settings}</Text>
            <SettingsItem label={incUppercase} switchValue={isUppercase} setSwitchValue={setUpperCase}/>
            <SettingsItem label={incLowercase} switchValue={isLowercase} setSwitchValue={setLowerCase}/>
            <SettingsItem label={incNumbers} switchValue={isNumber} setSwitchValue={setNumber}/>
            <SettingsItem label={incSymbols} switchValue={isSymbol} setSwitchValue={setSymbol}/>
        </View>
    )
};