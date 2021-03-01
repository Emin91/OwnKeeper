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
            backgroundColor: colors.blueWood,
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
            paddingRight: 10,
            color: colors.white,
            fontFamily: 'Calibri',
        },
        mail: {
            fontSize: 14,
            lineHeight: 16,
            marginLeft: 6,
            paddingRight: 10,
            fontFamily: 'Calibri',
            color: colors.lightGray,
        },
        swipeLeftContainer: {
            marginTop: 6, 
            marginLeft: 10, 
            borderRadius: 6, 
            alignItems: 'center',
            flexDirection: 'row', 
            justifyContent: 'center',  
        },
        swipeRightContainer: {
            marginTop: 6, 
            marginRight: 10, 
            borderRadius: 6, 
            alignItems: 'center',
            flexDirection: 'row', 
            justifyContent: 'center', 
        },
        swipeButtonWrapper: {
            alignItems: 'center', 
            paddingHorizontal: 20,
            justifyContent: 'center',
        },
    });
    return styles;
};
