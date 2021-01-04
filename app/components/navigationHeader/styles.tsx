import { StyleSheet } from 'react-native';
import { colors } from '../../assets/constants/colors';

export const getStyle = () => {
    const styles = StyleSheet.create({
        container: {
            height: 50,
            width: '100%', 
            flexDirection: 'row', 
            alignItems: 'center',
            paddingHorizontal: 10,
            justifyContent: 'center', 
            backgroundColor: colors.darlClay,
        },
        backIcon: {
            left: 10,
            zIndex: 100,
            position: 'absolute',
        },
        additionalIcon: {
            right: 10,
            zIndex: 100,
            position: 'absolute',
        },
        title: {
            fontSize: 24,
            color: colors.white,
            fontFamily: 'CirceRoundedBold',
        },
    });
    return styles;
};
