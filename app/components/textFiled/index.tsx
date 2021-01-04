import React, { FC, useMemo } from 'react';
import { View, TextInput } from 'react-native';
import { colors } from '../../assets/constants/colors';
import { RequiredStarIcon } from '../../assets/svg/requiredStarIcon';
import { getStyle } from './styles';

interface Props {
    placeholder: string;
    lines?: number;
    isRequired?: boolean;
    isMultiline?: boolean;
    isBigNote?: boolean;
    onChange?: Function;
};

export const TextField: FC<Props> = ({ placeholder, lines = 1, isRequired = false, isMultiline = false, isBigNote = false, onChange = Function }) => {
    const styles = useMemo(() => getStyle(isBigNote), [isBigNote]);

    return (
        <View style={styles.container}>
            <View style={styles.inputWrapper}>
                <TextInput 
                    maxLength={50}
                    autoCorrect={false} 
                    blurOnSubmit={false}
                    style={styles.input} 
                    numberOfLines={lines}  
                    multiline={isMultiline}
                    placeholder={placeholder} 
                    onChangeText={(e) => onChange(e)}
                    placeholderTextColor={colors.silver} />
                <View style={styles.requiredWrapper}>
                    {isRequired ? <RequiredStarIcon /> : null}
                </View>
            </View>
        </View>
    )
};