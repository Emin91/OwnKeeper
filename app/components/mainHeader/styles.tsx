import { StyleSheet } from 'react-native';
import { colors } from '../../assets/constants/colors';

export const getStyle = () => {
    const styles = StyleSheet.create({
        container: {
            height: 50,
            width: '100%', 
            flexDirection: 'row', 
            alignItems: 'center',
            paddingHorizontal: 10,
            justifyContent: 'space-between', 
            backgroundColor: colors.darlClay,
        },
    });
    return styles;
};