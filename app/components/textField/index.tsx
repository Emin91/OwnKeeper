import React, { FC, useMemo } from 'react';
import { View } from 'react-native';
import { RequiredStarIcon } from '../../assets/svg/requiredStarIcon';
import { colors } from '../../assets/constants/colors';
import { getStyle } from './styles';
import TextInputMask from 'react-native-text-input-mask';

interface Props {
    mask?: string;
    lines?: number;
    inputValue: string;
    onChange?: Function;
    isBigNote?: boolean;
    placeholder: string;
    isRequired?: boolean;
    secureText?: boolean;
    isMultiline?: boolean;
};

export const TextField: FC<Props> = ({ placeholder, lines = 1, inputValue, isRequired = false, isMultiline = false, isBigNote = false, secureText = false, mask = undefined, onChange = () => {}}) => {
    const styles = useMemo(() => getStyle(isBigNote), [isBigNote]);

    return (
        <View style={styles.container}>
            <View style={styles.inputWrapper}>
                <TextInputMask 
                    mask={mask}
                    maxLength={50}
                    autoCorrect={false} 
                    blurOnSubmit={false}
                    style={styles.input} 
                    numberOfLines={lines}  
                    multiline={isMultiline}
                    placeholder={placeholder}
                    defaultValue={inputValue}
                    secureTextEntry={secureText}
                    onChangeText={(e) => onChange(e)}
                    placeholderTextColor={colors.lightGray} 
                    keyboardType={mask ? 'numeric' : 'default'} />
                <View style={styles.requiredWrapper}>
                    {isRequired ? <RequiredStarIcon /> : null}
                </View>
            </View>
        </View>
    )
};