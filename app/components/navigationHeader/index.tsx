import React, { FC, useMemo } from 'react';
import { Pressable, View, Text, Alert } from 'react-native';
import { BackIcon } from '../../assets/svg/backIcon';
import { DotsIcon } from '../../assets/svg/dotsIcon';
import { SaveIcon } from '../../assets/svg/saveIcon';
import OptionsMenu from 'react-native-option-menu';
import { getStyle } from './styles';

interface Props {
    lang?: any;
    title: string;
    isDisabled?: boolean;
    isOptionMenu?: boolean;
    onBackPress: () => void;
    onSavePress?: () => void;
    onEditPress?: () => void;
    onDeletePress?: () => void;
};

export const NavigationHeader: FC<Props> = ({ lang, title = '', isDisabled, isOptionMenu, onBackPress = () => {}, onSavePress = () => {}, onEditPress = () => {}, onDeletePress = () => {}, }) => {
    const styles = useMemo(() => getStyle(), []);

    return (
        <View style={styles.container}>
             <Pressable hitSlop={20} onPress={onBackPress} style={({ pressed }) => [styles.backIcon, {opacity: pressed ? 0.3 : 1}]}>
                <BackIcon />
            </Pressable>
            <Text numberOfLines={1} style={styles.title}>{title}</Text>
            <Pressable onPress={onSavePress} style={({ pressed }) => [styles.additionalIcon, {opacity: pressed ? 0.3 : 1}]}>
                { isOptionMenu
                    ?   <OptionsMenu
                            customButton={<DotsIcon />}
                            options={[lang('edit'), lang('delete'), lang('cancel')]}
                            actions={[onEditPress, onDeletePress]} />
                    :   <View style={{opacity: isDisabled ? 0 : 1}}>
                            <SaveIcon />
                        </View>}
            </Pressable>
        </View>
    )
};