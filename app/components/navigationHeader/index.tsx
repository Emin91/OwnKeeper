import React, { FC, useMemo } from 'react';
import { Pressable, View, Text, Alert } from 'react-native';
import { BackIcon } from '../../assets/svg/backIcon';
import { DotsIcon } from '../../assets/svg/dotsIcon';
import { SaveIcon } from '../../assets/svg/saveIcon';
import OptionsMenu from 'react-native-option-menu';
import { IStackNavigation } from '../../entities';
import { getStyle } from './styles';

interface Props {
    t?: any;
    title: string;
    trim?: number;
    routeName: string;
    onClick?: () => void;
    editRouteName?: string;
    isOptionMenu?: boolean;
    onBackPress?: () => void;
    navigation: IStackNavigation;
};

export const NavigationHeader: FC<Props> = ({ navigation, routeName = '', title = '', trim, onClick = () => {}, isOptionMenu, t, editRouteName = 'DataView', onBackPress = () => {}, }) => {
    const styles = useMemo(() => getStyle(), []);
    
    const onEditPress = () => {
        navigation.navigate(editRouteName, { isEdit: true, title });
    };

    const onBackPressFunc = () => {
        onBackPress();
        navigation.navigate(routeName);
    };

    const onDeletePress = () => {
        Alert.alert(
            t('deleteCard'),
            `${t('deleteCardText')} ${title} card?`,
            [
              {
                text: "Cancel",
                onPress: () => console.log("Cancel Pressed"),
              },
              { text: "Delete", onPress: () => console.log("Item deleted") }
            ],
            { cancelable: true }
          );
    };

    return (
        <View style={styles.container}>
             <Pressable hitSlop={20} onPress={onBackPressFunc} style={({ pressed }) => [styles.backIcon, {opacity: pressed ? 0.3 : 1}]}>
                <BackIcon />
            </Pressable>
            <Text numberOfLines={1} style={styles.title}>{trim || trim !== 0 ? title.slice(0, trim) : title}</Text>
            <Pressable onPress={onClick} style={({ pressed }) => [styles.additionalIcon, {opacity: pressed ? 0.3 : 1}]}>
            { isOptionMenu
                ?  <OptionsMenu
                        customButton={<DotsIcon />}
                        options={[t('edit'), t('delete'), t('cancel')]}
                        actions={[onEditPress, onDeletePress]} />
                : <SaveIcon />}
            </Pressable>
        </View>
    )
};