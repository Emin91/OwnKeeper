import { StyleSheet } from 'react-native';
import { colors } from '../../../assets/constants/colors';

export const getStyle = () => {
    const styles = StyleSheet.create({
        container: {
            height: 50,
            alignItems: 'center',
            flexDirection: 'row',
            backgroundColor: colors.clay,
            justifyContent: 'space-between',
        },
        tabBarButton: {
            flex: 1,
            height: '100%',
            alignItems: 'center',
            justifyContent: 'center',
            backgroundColor: colors.white,
        },
        buttonWrapper: {
            width: '100%',
            borderRadius: 5,
            paddingVertical: 5, 
            alignItems: 'center',
            paddingHorizontal: 3, 
            justifyContent: 'center',
        },
        label: {
            fontSize: 12,
            lineHeight: 18,
            fontFamily: 'Calibri',
        },
    });
    return styles;
};
