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
    const { t }: any = useContext(LocalizationContext);
    const { isEdit, title } = route.params || { isEdit: false, title: '' };
    const [siteName, setSiteName] = useState<string>('');

    return (
        <View style={styles.container}>
            <NavigationHeader 
                navigation={navigation} 
                title={!isEdit ? t('addAccount') : `${t('edit')} ${title}`} 
                onClick={() => navigation.navigate('DataView')} 
                routeName={!isEdit ? 'DataView' : 'DataItemFullPreview'} />
            <View style={{ flex: 1 }}>
                <TextField isRequired placeholder={t('siteName')} onChange={setSiteName} />
                <TextField isRequired placeholder={t('userLogin')} onChange={setSiteName} />
                <TextField isRequired placeholder={t('userPassword')} onChange={setSiteName} />
                <TextField placeholder={t('cardNote')} onChange={setSiteName} />
                <View style={styles.passwordButtons}>
                    <Text numberOfLines={1} style={styles.noPassword}>{t('noPassword')}</Text>
                    <Pressable onPress={() => navigation.navigate('GeneratorView', { isNoPassword: true })} hitSlop={20} style={({ pressed }) => [{opacity: pressed ? 0.5 : 1, marginLeft: 5}]}>
                        <Text numberOfLines={1} style={styles.generatePassword}>{t('generatePassword')}</Text>
                    </Pressable>
                </View>
            </View>
            <View style={styles.requiredWrapper}>
                <Text style={styles.required}>{t('required')}</Text>
            </View>
        </View>
    )
};