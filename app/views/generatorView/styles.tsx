import { StyleSheet } from 'react-native';
import { colors } from '../../assets/constants/colors';

export const getStyle = () => {
    const styles = StyleSheet.create({
        container: {
            flex: 1,
            backgroundColor: colors.clay,
        },
        titleWrapper: {
            flex: 0.1,
            paddingLeft: 12,
        },
        title: {
            fontSize: 36,
            color: colors.white,
            fontFamily: 'DINProMedium',
        },
        buttonContainer: {
            flex: 0.2,
            alignItems: 'center',
            justifyContent: 'flex-end',
        },
        buttonWrapper: {
            width: 198,
            height: 46,
            borderRadius: 6,
            marginBottom: 10,
            alignItems: 'center',
            justifyContent: 'center',
            backgroundColor: colors.surfie,
        },
        refreshIcon: {
            left: 10,
            zIndex: 100,
            position: 'absolute',
        },
        buttonText: {
            fontSize: 24,
            color: colors.white,
            fontFamily: 'BalooTwoRegular',
        },
    });
    return styles;
};
