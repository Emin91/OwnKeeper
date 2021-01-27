import React, { FC, useContext, useMemo } from 'react';
import { Pressable, Text, View, Animated, Alert } from 'react-native';
import { deleteUserAccount } from '../../../modules/redux/userAccounts/actions';
import { LocalizationContext } from '../../../modules/language';
import Swipeable from 'react-native-gesture-handler/Swipeable';
import { DeleteIcon } from '../../../assets/svg/deleteIcon';
import { IStackNavigation } from '../../../entities';
import { useDispatch } from 'react-redux';
import { getStyle } from './styles';

interface Props {
    localId: number;
    localLogin: string;
    localSiteName: string;
    navigation: IStackNavigation;
};

export const DataItem: FC<Props> = ({ localLogin = '', localSiteName = '', navigation, localId }) => {
    const initials = localSiteName.charAt(0).toUpperCase() + localSiteName.charAt(1);
    const { lang }: any = useContext(LocalizationContext);
    const styles = useMemo(() => getStyle(), []);
    const dispatch = useDispatch();

    const onEditPress = () => {
        // console.log('_id', localId)
        // navigation.navigate('AddAndEditAccountView', {isEdit: true, localId});
    };

    const onDeletePress = () => {
        Alert.alert(
            lang('deleteCard'),
            `${lang('deleteCardText')} ${localSiteName} card?`,
            [
                { text: "Cancel", onPress: () => console.log("Cancel Pressed") },
                { text: "Delete", onPress: () => dispatch(deleteUserAccount(localId))},
            ],
            { cancelable: true }
          );
    };

    const leftSwipeActions = (dragX: any) => {
        const scale = dragX.interpolate({
            inputRange: [0, 1],
            outputRange: [0, 1],
            extrapolate: 'clamp',
        });
        return (
            <Animated.View style={[styles.swipeLeftContainer, [{opacity: scale, backgroundColor: 'green'}]]}>
                <Animated.View style={[styles.swipeButtonWrapper, {transform: [{scale}]}]}>
                    <Pressable hitSlop={20} onPress={onEditPress} style={({ pressed }) => [{ opacity: pressed ? 0.5 : 1}]}>
                        <DeleteIcon />
                    </Pressable>
                </Animated.View>
            </Animated.View>
        )
    };

    const rightSwipeActions = (dragX: any) => {
        const scale = dragX.interpolate({
            inputRange: [0, 1],
            outputRange: [0, 1],
            extrapolate: 'clamp',
        });
        return (
            <Animated.View style={[styles.swipeRightContainer, [{opacity: scale, backgroundColor: 'red'}]]}>
                <Animated.View style={[styles.swipeButtonWrapper, {transform: [{scale}]}]}>
                    <Pressable hitSlop={20} onPress={onDeletePress} style={({ pressed }) => [{ opacity: pressed ? 0.5 : 1}]}>
                        <DeleteIcon />
                    </Pressable>
                </Animated.View>
            </Animated.View>
        )
    };

    return (
        <Swipeable renderLeftActions={leftSwipeActions} renderRightActions={rightSwipeActions} friction={2} overshootLeft={false} overshootRight={false} containerStyle={{overflow: 'hidden'}}>
            <View style={styles.container}>
                <Pressable onPress={() => navigation.navigate('DataItemFullPreview', {localId})} style={({ pressed }) => [styles.rows, { opacity: pressed ? 0.5 : 1, }]}>
                    <View style={styles.iconWrapper}>
                        <View style={styles.circle}>
                            <Text style={styles.initials}>{initials}</Text>
                        </View>
                    </View>
                    <View style={styles.description}>
                        <Text style={styles.title} numberOfLines={1}>{localSiteName}</Text>
                        <Text style={styles.mail} numberOfLines={1}>{localLogin}</Text>
                    </View>
                </Pressable>
            </View>
        </Swipeable>
    )
};