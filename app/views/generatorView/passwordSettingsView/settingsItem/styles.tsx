import { StyleSheet } from 'react-native';
import { colors } from '../../../../assets/constants/colors';

export const getStyle = () => {
    const styles = StyleSheet.create({
        itemWrapper: {
            height: 46,
            marginTop: 2,
            width: '100%',
            borderRadius: 6,
            alignItems: 'center',
            backgroundColor: colors.blueWood,
        },
        rowWrapper: {
            marginBottom: 2,
            flexDirection: 'row',
            paddingHorizontal: 12,
            justifyContent: 'space-between',
        },
        boxLabel: {
            fontSize: 12,
            color: colors.white,
            fontFamily: 'CirceRoundedRegular',
        },
        switchWrapper: { 
            alignItems: 'center',
            justifyContent: 'center',
        }
    });
    return styles;
};
