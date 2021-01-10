import React, { FC, useMemo } from 'react';
import { Pressable, Text, View } from 'react-native';
import { IStackNavigation } from '../../../entities';
import { getStyle } from './styles';

interface Props {
    login: string;
    serviceName: string;
    navigation: IStackNavigation;
};

export const DataItem: FC<Props> = ({ navigation, serviceName = '', login = '' }) => {
    const styles = useMemo(() => getStyle(), []);
    const initials = serviceName.charAt(0).toUpperCase() + serviceName.charAt(1);
    
    return (
        <View style={styles.container}>
            <Pressable onPress={() => navigation.navigate('DataItemFullPreview', {serviceName, login})} style={({ pressed }) => [styles.rows, { opacity: pressed ? 0.5 : 1 }]}>
                <View style={styles.iconWrapper}>
                    <View style={styles.circle}>
                        <Text style={styles.initials}>{initials}</Text>
                    </View>
                </View>
                <View style={styles.description}>
                    <Text style={styles.title}>{serviceName}</Text>
                    <Text style={styles.mail}>{login}</Text>
                </View>
            </Pressable>
        </View>
    )
};