import { StyleSheet } from 'react-native';
import { colors } from '../../assets/constants/colors';

export const getStyle = () => {
    const styles = StyleSheet.create({
        container: {
            flex: 1,
            backgroundColor: colors.clay,
        },
        passwordButtons: {
            width: '100%',
            marginTop: 14,
            alignItems: 'center',
            flexDirection: 'row',
            justifyContent: 'center',
        },
        noPassword: {
            fontSize: 14,
            color: colors.white,
            fontFamily: 'RobotoRegular',
        },
        generatePassword: {
            fontSize: 14,
            color: colors.pictionBlue,
            fontFamily: 'RobotoRegular',
            textDecorationStyle: 'solid',
            textDecorationLine: 'underline',
        },
        requiredWrapper: {
            bottom: 0,
            zIndex: 100, 
            marginLeft: 10,
            marginBottom: 10,
            position: 'absolute', 
        },
        required: {
            fontSize: 12,
            color: colors.boulder,
            fontFamily: 'RobotoBold',
        },
    });
    return styles;
};
