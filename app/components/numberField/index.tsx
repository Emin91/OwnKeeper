import React, { FC, useMemo } from 'react';
import { View } from 'react-native';
import { RequiredStarIcon } from '../../assets/svg/requiredStarIcon';
import { colors } from '../../assets/constants/colors';
import { getStyle } from './styles';
import TextInputMask from 'react-native-text-input-mask';

interface Props {
    placeholder: string;
    lines?: number;
    isRequired: boolean;
    isMultiline?: boolean;
    isBigNote?: boolean;
    secureText?: boolean;
    mask: string;
    onChange?: Function;
};

export const NumberField: FC<Props> = ({ placeholder, lines = 1, isRequired = true, isMultiline = false, isBigNote = false, secureText = false, mask = '[0000]', onChange = Function}) => {
    const styles = useMemo(() => getStyle(isBigNote), [isBigNote]);

    return (
        <View style={styles.container}>
            <View style={styles.inputWrapper}>
                <TextInputMask 
                    mask={mask}
                    autoCorrect={false} 
                    style={styles.input} 
                    numberOfLines={lines}  
                    multiline={isMultiline}
                    keyboardType={'numeric'}
                    placeholder={placeholder}
                    secureTextEntry={secureText}
                    onChangeText={(e)=>onChange(e)}
                    placeholderTextColor={colors.silver} />
                <View style={styles.requiredWrapper}>
                    {isRequired ? <RequiredStarIcon /> : null}
                </View>
            </View>
        </View>
    )
};