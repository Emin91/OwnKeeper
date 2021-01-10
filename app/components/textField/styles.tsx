import { StyleSheet } from 'react-native';
import { colors } from '../../assets/constants/colors';

export const getStyle = (isBigNote: boolean) => {
    const styles = StyleSheet.create({
        container: {
            width: '100%',
            marginTop: 10,
            paddingHorizontal: 10,
            justifyContent: 'center',
            height: !isBigNote ? 56 : 250,
        },
        inputWrapper: {
            flex: 1,
            paddingTop: 6,
            paddingLeft: 9,
            borderRadius: 4,
            paddingRight: 20,
            borderBottomWidth: 2,
            justifyContent: 'center',
            backgroundColor: colors.gray,
            borderBottomColor: colors.manatee,
        },
        input: {
            fontSize: 16,
            color: 'white',
            textAlign: 'left',
            textAlignVertical: 'top',
            fontFamily: 'RobotoRegular',
        },
        requiredWrapper: {
            right: 9,
            zIndex: 100,
            position: 'absolute',
        },
    });
    return styles;
};
