import React, { FC, useContext, useMemo, useState } from 'react';
import { View, Text, Pressable } from 'react-native';
import { NavigationHeader } from '../../components/navigationHeader';
import { LocalizationContext } from '../../modules/language';
import { TextField } from '../../components/textField';
import { IStackNavigation } from '../../entities';
import { getStyle } from './styles';

interface Props {
    route: any;
    navigation: IStackNavigation;
};

export const AddAndEditAccountView: FC<Props> = ({ route, navigation }) => {
    const styles = useMemo(() => getStyle(), []);
    const { lang }: any = useContext(LocalizationContext);
    const { isEdit, title } = route.params || { isEdit: false, title: '' };
    const [siteName, setSiteName] = useState<string>('');

    return (
        <View style={styles.container}>
            <NavigationHeader 
                navigation={navigation} 
                title={!isEdit ? lang('addAccount') : `${lang('edit')} ${title}`} 
                onClick={() => navigation.navigate('DataView')} 
                routeName={!isEdit ? 'DataView' : 'DataItemFullPreview'} />
            <View style={{ flex: 1 }}>
                <TextField isRequired placeholder={lang('siteName')} onChange={setSiteName} />
                <TextField isRequired placeholder={lang('userLogin')} onChange={setSiteName} />
                <TextField isRequired placeholder={lang('userPassword')} onChange={setSiteName} />
                <TextField placeholder={lang('cardNote')} onChange={setSiteName} />
                <View style={styles.passwordButtons}>
                    <Text numberOfLines={1} style={styles.noPassword}>{lang('noPassword')}</Text>
                    <Pressable onPress={() => navigation.navigate('GeneratorView', { isNoPassword: true })} hitSlop={20} style={({ pressed }) => [{opacity: pressed ? 0.5 : 1, marginLeft: 5}]}>
                        <Text numberOfLines={1} style={styles.generatePassword}>{lang('generatePassword')}</Text>
                    </Pressable>
                </View>
            </View>
            <View style={styles.requiredWrapper}>
                <Text style={styles.required}>{lang('required')}</Text>
            </View>
        </View>
    )
};