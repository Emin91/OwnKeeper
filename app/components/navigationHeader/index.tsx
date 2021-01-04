import React, { FC, useMemo } from 'react';
import { Pressable, View, Text } from 'react-native';
import { BackIcon } from '../../assets/svg/backIcon';
import { getStyle } from './styles';

interface Props {
    navigation: any;
    routeName: string;
    title: string;
    trim?: number;
    buttonName?: React.ReactChild;
    onClick?: () => void;
};

export const NavigationHeader: FC<Props> = ({ navigation, routeName = '', title = '', trim, buttonName = null, onClick = () => {} }) => {
    const styles = useMemo(() => getStyle(), []);

    return (
        <View style={styles.container}>
             <Pressable hitSlop={20} onPress={() => navigation.navigate(routeName)} style={({ pressed }) => [styles.backIcon, {opacity: pressed ? 0.3 : 1}]}>
                <BackIcon />
            </Pressable>
            <Text numberOfLines={1} style={styles.title}>{trim || trim !== 0 ? title.slice(0, trim) : title}</Text>
            <Pressable onPress={onClick} style={({ pressed }) => [styles.additionalIcon, {opacity: pressed ? 0.3 : 1}]}>
                {buttonName}
            </Pressable>
        </View>
    )
};