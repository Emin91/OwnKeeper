import React, { FC, useMemo } from 'react';
import { Pressable, View, Text, Alert } from 'react-native';
import { BackIcon } from '../../assets/svg/backIcon';
import { DotsIcon } from '../../assets/svg/dotsIcon';
import { SaveIcon } from '../../assets/svg/saveIcon';
import OptionsMenu from 'react-native-option-menu';
import { getStyle } from './styles';

interface Props {
    t?: any;
    title: string;
    trim?: number;
    navigation: any;
    routeName: string;
    onClick?: () => void;
    isOptionMenu?: boolean;
};

export const NavigationHeader: FC<Props> = ({ navigation, routeName = '', title = '', trim, onClick = () => {}, isOptionMenu, t }) => {
    const styles = useMemo(() => getStyle(), []);

    const onEditPress = () => {
        console.log('edit');
        navigation.navigate('AddAndEditCardView', { isEdit: true, title });
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
             <Pressable hitSlop={20} onPress={() => navigation.navigate(routeName)} style={({ pressed }) => [styles.backIcon, {opacity: pressed ? 0.3 : 1}]}>
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