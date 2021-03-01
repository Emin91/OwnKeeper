import { StyleSheet } from 'react-native';
import { colors } from '../../../assets/constants/colors';

export const getStyle = () => {
    const styles = StyleSheet.create({
        container: {
            height: 56,
            marginTop: 5,
            width: '100%',
            paddingHorizontal: 12,
        },
        itemWrapper: {
            width: '100%',
            height: '100%',
            borderRadius: 6,
            flexDirection: 'row',
            backgroundColor: colors.blueWood,
        },
        iconWrapper: {
            flex: 0.2,
            alignItems: 'center',
            justifyContent: 'center',
        },
        descriptionWrapper: {
            flex: 0.8,
            justifyContent: 'center',
        },
        title: {
            fontSize: 20,
            color: colors.white,
            fontFamily: 'BalooTwoRegular',
        },
        date: {
            fontSize: 14,
            lineHeight: 16,
            color: colors.lightGray,
            fontFamily: 'BalooTwoRegular',
        },
    });
    return styles;
};
