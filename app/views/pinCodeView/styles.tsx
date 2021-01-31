import { StyleSheet } from 'react-native';
import { colors } from '../../assets/constants/colors';

export const getStyle = () => {
    const styles = StyleSheet.create({
        container: {
            flex: 1,
            backgroundColor: colors.clay,
        },
        logoWrapper: {
            flex: 0.2, 
            paddingTop: 20, 
            alignItems: 'center',
            justifyContent: 'center', 
        },
        pinWrapper: {
            flex: 0.2, 
            alignItems: 'center',
            justifyContent: 'center', 
        },
        pinText: {
            fontSize: 20,
            marginBottom: 10,
            color: colors.white,
            fontFamily: 'CirceRoundedAltBold',
        },
        buttonsWrapper: {
            flex: 0.6,
        },
        symbolsRow: {
            flex: 1,
            flexDirection: 'row',
        },
        symbolView: {
            flex: 1,
            flexGrow: 1,
            alignItems: 'center',
            justifyContent: 'center',
        },
        btnText: {
            fontSize: 40,
            color: colors.white,
            fontFamily: 'DosisRegular',
        }
    });
    return styles;
};
