import React, { FC, useContext, useEffect, useMemo, useState } from 'react';
import { View, Text, Pressable, Keyboard } from 'react-native';
import { selectUserAccountByID } from '../../modules/redux/userAccounts/selectors';
import { selectGeneratedPassword } from '../../modules/redux/generator/selectors';
import { setGeneratedPassword } from '../../modules/redux/generator/actions';
import { setUserAccountSaga } from '../../modules/saga/userAccount/actions';
import { shallowEqual, useDispatch, useSelector } from 'react-redux';
import { NavigationHeader } from '../../components/navigationHeader';
import { LocalizationContext } from '../../modules/language';
import { TextField } from '../../components/textField';
import * as Animatable from 'react-native-animatable';
import { RootState } from '../../modules/redux/store';
import { IStackNavigation } from '../../entities';
import { getStyle } from './styles';

interface Props {
    route: any;
    navigation: IStackNavigation;
};

export const AddAndEditAccountView: FC<Props> = ({ route, navigation }) => {
    const { lang }: any = useContext(LocalizationContext);
    const { isEdit, _id, isDataView } = route.params || { isEdit: false, isDataView: false };
    const generatedPassword: string = useSelector(selectGeneratedPassword, shallowEqual);
    const userAccount = useSelector((state: RootState) => selectUserAccountByID(state, _id), shallowEqual);
    const { localLogin, localNote, localPassword, localSiteName } = userAccount || {localLogin: '', localNote: '', localPassword: '', localSiteName: ''};
    const [fieldSiteName, setSiteName] = useState<string>('' || localSiteName);
    const [fieldPassword, setPassword] = useState<string>('' || localPassword);
    const [fieldLogin, setLogin] = useState<string>('' || localLogin);
    const [fieldNote, setNote] = useState<string>('' || localNote);
    const styles = useMemo(() => getStyle(), []);
    const dispatch = useDispatch();

    const onBackPress = () => {
        dispatch(setGeneratedPassword(''));
        navigation.navigate(isEdit && !isDataView ? 'DataItemFullPreview' : 'DataView', {localId: _id});
        Keyboard.dismiss();
    };

    const onSavePress = () => {
        dispatch(setUserAccountSaga({
            isEdit, 
            localId: _id,
            localNote: fieldNote.trim(), 
            localLogin: fieldLogin.trim(), 
            localSiteName: fieldSiteName.trim(), 
            localPassword: (generatedPassword || fieldPassword).trim(), 
        }));
        dispatch(setGeneratedPassword(''));
        navigation.navigate(isEdit ? 'DataItemFullPreview' : 'DataView', {localId: _id});
        Keyboard.dismiss();
    };

    const onPressPassGenerate = ( ) => {
        navigation.navigate('GeneratorView', { isNoPassword: false });
        Keyboard.dismiss();
    };

    return (
        <View style={styles.container}>
            <NavigationHeader 
                isDisabled={(fieldSiteName.trim().length && fieldLogin.trim().length && (generatedPassword || fieldPassword).trim().length) ? false : true}
                onBackPress={onBackPress}
                onSavePress={onSavePress}
                title={!isEdit ? lang('addAccount') : `${lang('edit')} ${localSiteName}`} />
            <View style={{ flex: 1 }}>
                <Animatable.View animation={'slideInLeft'} iterationCount={1} direction="alternate" duration={600}>
                    <TextField inputValue={fieldSiteName} isRequired placeholder={lang('siteName')} onChange={setSiteName} />
                </Animatable.View>
                <Animatable.View animation={'slideInLeft'} iterationCount={1} direction="alternate" duration={800}>
                    <TextField inputValue={fieldLogin} isRequired placeholder={lang('userLogin')} onChange={setLogin} />
                </Animatable.View>
                <Animatable.View animation={'slideInLeft'} iterationCount={1} direction="alternate" duration={1000}>
                    <TextField inputValue={generatedPassword || fieldPassword} isRequired placeholder={lang('userPassword')} onChange={setPassword} />
                </Animatable.View>
                <Animatable.View animation={'slideInLeft'} iterationCount={1} direction="alternate" duration={1200}>
                    <TextField inputValue={fieldNote} placeholder={lang('cardNote')} onChange={setNote} />
                </Animatable.View>
                <View style={styles.passwordButtons}>
                    <Text numberOfLines={1} style={styles.noPassword}>{lang('noPassword')}</Text>
                    <Pressable onPress={onPressPassGenerate} hitSlop={15} style={({ pressed }) => [{opacity: pressed ? 0.5 : 1, marginLeft: 5}]}>
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