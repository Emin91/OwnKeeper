import { StyleSheet } from 'react-native';
import { colors } from '../../assets/constants/colors';

export const getStyle = () => {
    const styles = StyleSheet.create({
        container: {
            flex: 1,
            backgroundColor: colors.clay,
        },
        logoWrapper: {
            flex: 0.2,
            paddingTop: 20,
            alignItems: 'center',
            justifyContent: 'center',
        },
        pinTypes: {
            flex: 0.8,
        },
        fingerIconWrapper: {
            flex: 1,
            alignItems: 'center',
            justifyContent: 'center',
        },
        switchWrapper: {
            flex: 1,
            alignItems: 'center',
        },
        switchBtn: {
            marginTop: 40,
            paddingVertical: 10,
            alignItems: 'center',
            paddingHorizontal: 20,
            justifyContent: 'center',
        },
        switchText: {
            fontSize: 16,
            color: colors.pictionBlue, 
            textDecorationLine: 'underline',
        },
    });
    return styles;
};
