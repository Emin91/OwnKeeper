import { StyleSheet } from 'react-native';
import { colors } from '../../assets/constants/colors';

export const getStyle = () => {
    const styles = StyleSheet.create({
        container: {
            flex: 1,
            backgroundColor: colors.clay,
        },
        scrollWrapper: {
            flex: 1,
            marginBottom: 5,
        },
    });
    return styles;
};
