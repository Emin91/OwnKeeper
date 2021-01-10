import { StyleSheet } from 'react-native';
import { colors } from '../../../assets/constants/colors';

export const getStyle = () => {
    const styles = StyleSheet.create({
        container: {
            height: 56,
            marginTop: 6,
            width: '100%',
            paddingHorizontal: 10,
        },
        rows: {
            flex: 1,
            borderRadius: 6,
            flexDirection: 'row',
            backgroundColor: colors.bluewood,
        },
        iconWrapper: {
            flex: 0.15,
            alignItems: 'center',
            justifyContent: 'center',
        },
        circle: {
            width: 45, 
            height: 45, 
            alignItems: 'center',
            borderRadius: 45 / 2, 
            justifyContent: 'center', 
            backgroundColor: colors.pictionBlue, 
        },
        initials: {
            fontSize: 20,
            color: colors.white,
            fontFamily: 'BalooTwoRegular',
        },
        description: {
            flex: 0.85, 
            justifyContent: 'center',
        },
        title: {
            fontSize: 20,
            marginLeft: 6,
            lineHeight: 22,
            color: colors.white,
            fontFamily: 'Calibri',
        },
        mail: {
            fontSize: 14,
            marginLeft: 6,
            fontFamily: 'Calibri',
            color: colors.lightGray,
        },
    });
    return styles;
};
