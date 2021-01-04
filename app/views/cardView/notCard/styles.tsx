import { StyleSheet } from 'react-native';

export const getStyle = () => {
    const styles = StyleSheet.create({
        container: {
            flex: 1, 
            opacity: 0.3, 
            alignItems: 'center',
            justifyContent: 'center', 
        },
    });
    return styles;
};
