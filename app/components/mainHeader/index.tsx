import React, { FC, useMemo } from 'react';
import { Pressable, View } from 'react-native';
import { LogoIcon } from '../../assets/svg/logo';
import { getStyle } from './styles';

interface Props {
    buttonName?: React.ReactChild;
    onClick?: () => void;
};

export const MainHeader: FC<Props> = ({ buttonName = null, onClick = () => {} }) => {
    const styles = useMemo(() => getStyle(), []);

    return (
        <View style={styles.container}>
            <LogoIcon />
            <Pressable onPress={onClick} style={({ pressed }) => [{opacity: pressed ? 0.3 : 1}]}>
                {buttonName}
            </Pressable>
        </View>
    )
};