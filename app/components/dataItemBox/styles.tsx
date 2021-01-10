import { StyleSheet } from 'react-native';
import { colors } from '../../assets/constants/colors';

export const getStyle = (isShow: boolean, isHidden: boolean) => {
    const styles = StyleSheet.create({
        container: {
            flex: 1,
            backgroundColor: colors.clay,
        },
        itemContainerWrapper: {
            height: 56,
            marginTop: 6,
            width: '100%',
            paddingHorizontal: 12,
        },
        itemWrapper: {
            width: '100%',
            height: '100%',
            paddingLeft: 12,
            borderRadius: 6,
            justifyContent: 'center',
            backgroundColor: colors.bluewood,
        },
        label: {
            fontSize: 14,
            color: colors.silver,
            fontFamily: 'BalooTwoRegular',
        },
        inputWrapper: {
            height: 25,
            width: '80%',
            color: 'white',
            lineHeight: 18,
            paddingLeft: 0,
            paddingVertical: 0,
            fontSize: !isShow || !isHidden ? 16 : 25,
            paddingBottom: !isShow || !isHidden ? 6 : 0,
        },
        iconWrapper: {
            right: 12,
            zIndex: 100,
            height: '100%',
            position: 'absolute',
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'center',
        },
    });
    return styles;
};
