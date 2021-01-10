import { StyleSheet } from 'react-native';

export const getStyle = () => {
    const styles = StyleSheet.create({
        container: {
            flex: 1, 
            alignItems: 'center',
            justifyContent: 'center', 
        },
        lottie: {
            height: 250,
            width: '100%',
        },
    });
    return styles;
};
