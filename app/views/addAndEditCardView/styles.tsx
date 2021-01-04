import { StyleSheet } from 'react-native';
import { colors } from '../../assets/constants/colors';

export const getStyle = () => {
    const styles = StyleSheet.create({
        container: {
            flex: 1,
            backgroundColor: colors.clay,
        },
        scrollWrapper: {
            flex: 1, 
            marginBottom: 30,
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
        }
    });
    return styles;
};
