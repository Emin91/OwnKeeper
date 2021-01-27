import React, { FC, useMemo } from 'react';
import { View, Text, Pressable } from 'react-native';
import { colors } from '../../../assets/constants/colors';
import { IStackNavigation } from '../../../entities';
import { getStyle } from './styles';

interface Props {
    state: any;
    descriptors: any;
    navigation: IStackNavigation;
};

export const CustomTabBar: FC<Props> = ({ state, descriptors, navigation }) => {
    const styles = useMemo(() => getStyle(), []);

    return (
        <View accessibilityRole="button" style={styles.container}>
            {state.routes.map((route: { key: string, name: string }, index: number) => {
                const { options } = descriptors[route.key]
                const isFocused = state.index === index;

                const onPress = () => {
                    const event = navigation.emit({ type: 'tabPress', target: route.key });
                    (!isFocused && !event.defaultPrevented) ?  navigation.navigate(route.name) : null;
                };

                const bgColor = () => {
                    switch(index) {
                        case 0: return colors.bluewood;
                        case 1: return colors.green;
                        case 2: return colors.mariner;
                        case 3: return colors.cerise;
                        case 4: return colors.violet;
                        default: return colors.white; 
                    };
                };                

                return (
                    <Pressable key={index} onPress={onPress} style={[styles.tabBarButton, { paddingLeft: index == 0 ? 10 : 0, paddingRight: index == 4 ? 10 : 0 }]}>
                        <View style={[styles.buttonWrapper, {backgroundColor: isFocused ? bgColor() : colors.white}]}>
                            <Text style={[styles.label, { color: isFocused ? colors.white : colors.boulder, fontSize: isFocused ? 14 : 12 }]}>{options.tabBarLabel}</Text>
                        </View>
                    </Pressable>
                )
            })}
        </View>
    )
};

{/* {options.tabBarIcon({color: isFocused ? '#3192EC' : ''})} This is icon */}
// {options.tabBarIcon({autoPlay: state.index === index ? true : false})}