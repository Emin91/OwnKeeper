import { StyleSheet } from 'react-native';
import { colors } from '../../assets/constants/colors';

export const getStyle = () => {
    const styles = StyleSheet.create({
        container: {
            flex: 1,
            alignItems: 'center',
            justifyContent: 'center',
            backgroundColor: colors.clay,
        },
        logoWrapper: {
            flex: 0.2, 
            paddingTop: 20, 
            alignItems: 'center',
            justifyContent: 'center', 
        },
    });
    return styles;
};
