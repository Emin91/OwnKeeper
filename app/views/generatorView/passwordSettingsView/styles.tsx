import { StyleSheet } from 'react-native';
import { colors } from '../../../assets/constants/colors';

export const getStyle = () => {
    const styles = StyleSheet.create({
        container: {
            flex: 0.7,
            paddingHorizontal: 12,
        },
        titleWrapper: {
            height: 72,
            marginTop: 2,
            width: '100%',
            borderRadius: 6,
            alignItems: 'center',
            justifyContent: 'center',
            backgroundColor: colors.blueWood,
        },
        copyButton: {
            right: 12,
            zIndex: 100, 
            position: 'absolute', 
        },
        title: {
            fontSize: 20,
            color: colors.white,
            fontFamily: 'BalooTwoRegular',
        },
        input: {
            width: '100%', 
            height: '100%',
            textAlign: 'center',
        },
        boxLabel: {
            fontSize: 12,
            color: colors.white,
            fontFamily: 'CirceRoundedRegular',
        },
        itemWrapper: {
            height: 46,
            marginTop: 2,
            width: '100%',
            borderRadius: 6,
            alignItems: 'center',
            backgroundColor: colors.blueWood,
        },
        itemRow: {
            flexDirection: 'row',
            justifyContent: 'center', 
        }
    });
    return styles;
};
