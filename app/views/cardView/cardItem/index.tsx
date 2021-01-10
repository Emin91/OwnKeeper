import React, { FC, useContext, useMemo } from 'react';
import { View, Pressable, Text } from 'react-native';
import { LocalizationContext } from '../../../modules/language';
import { IStackNavigation } from '../../../entities';
import { getStyle } from './styles';

interface Props {
    title: string;
    date: string;
    iconName: React.ReactChild;
    navigation: IStackNavigation;
};

export const CardItem: FC<Props> = ({ title, date, iconName, navigation }) => {
    const styles = useMemo(() => getStyle(), []);
    const { lang }: any = useContext(LocalizationContext);
    
    return (
        <Pressable onPress={() => navigation.navigate('CardItemFullPreview', {title})} style={({ pressed }) => [styles.container, { opacity: pressed ? 0.5 : 1}]}>
            <View style={styles.itemWrapper}>
                <View style={styles.iconWrapper}>
                    {iconName}
                </View>
                <View style={styles.descriptionWrapper}>
                    <Text style={styles.title}>{title}</Text>
                    {date ? <Text style={styles.date}>{lang('validUntil')} {date}</Text> : null}
                </View>
            </View>
        </Pressable>
    )
};