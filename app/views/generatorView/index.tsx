import React, { FC, useContext, useMemo, useState } from 'react';
import { View, Text, Pressable } from 'react-native';
import { NavigationHeader } from '../../components/navigationHeader';
import { GeneratePasswordSettings } from './passwordSettingsView';
import { LocalizationContext } from '../../modules/language';   
import { RefreshIcon } from '../../assets/svg/refreshIcon';
import { MainHeader } from '../../components/mainHeader';
import { IStackNavigation } from '../../entities';
import { getStyle } from './styles';
import { useDispatch } from 'react-redux';
import { setGeneratedPassword } from '../../modules/redux/generator/actions';

interface Props {
    route: any;
    navigation: IStackNavigation;
};

export const GeneratorView: FC<Props> = ({ navigation, route }) => {
    const styles = useMemo(() => getStyle(), []);
    const { lang }: any = useContext(LocalizationContext);
    const { isNoPassword } = route.params || { isNoPassword: true };
    const [passValue, setPassValue] = useState(lang('clickToGenerate'));
    const [isUppercase, setUpperCase] = useState<any>(true);
    const [isLowercase, setLowerCase] = useState<any>(true);
    const [isNumber, setNumber] = useState<any>(false);
    const [isSymbol, setSymbol] = useState<any>(false);
    const [passLength, setPassLength] = useState(12);
    const dispatch = useDispatch();
    
    const generateRandomPassword = () => {
        let generatedPassword = '';
        const typesCount = isUppercase + isLowercase + isNumber + isSymbol;
        const typesArray = [{isUppercase}, {isLowercase}, {isNumber}, {isSymbol}].filter(item => Object.values(item)[0]);
        
        if(typesCount === 0) {
            return '';
        };

        for (let i = 0; i < passLength; i += typesCount) {
            typesArray.map((key) => {
                const funcName = Object.keys(key)[0];
                generatedPassword += randomFunc[funcName]();
            });
        };       
 
        const slicedPassword = generatedPassword.slice(0, passLength);
        setPassValue(slicedPassword);
    };

    const getRandomUppercase = () => {
        return String.fromCharCode(Math.floor(Math.random() * 26) + 65);
    };

    const getRandomLowercase = () => {
        return String.fromCharCode(Math.floor(Math.random() * 26) + 97);
    };

    const getRandomNumber = () => {
        return String.fromCharCode(Math.floor(Math.random() * 10) + 48);
    };

    const getRandomSymbol= () => {
        const symbols = '!@#$%^&(){}[]=<>/,';
        return symbols[Math.floor(Math.random() * symbols.length)];
    };

    const randomFunc = {
        isUppercase: getRandomUppercase,
        isLowercase: getRandomLowercase,
        isNumber: getRandomNumber,
        isSymbol: getRandomSymbol,
    };

    const onSavePassword = () => {
        dispatch(setGeneratedPassword(passValue));
        navigation.setParams({isNoPassword: true});
        navigation.navigate('AddAndEditAccountView');
    };
    
    const onBackPress = () => {
        navigation.setParams({isNoPassword: true});
        !isNoPassword && navigation.navigate('AddAndEditAccountView');
    };

    return (
        <View style={styles.container}>
            {isNoPassword
                ? <MainHeader />
                : <NavigationHeader title={lang('passwordCreator')} onBackPress={onBackPress} onSavePress={onSavePassword} />}
            <View style={{ flex: 1 }}>
                <View style={styles.titleWrapper}>
                    <Text numberOfLines={1} style={styles.title}>{lang('generatePassword')}</Text>
                </View>
                <GeneratePasswordSettings {...{ passValue, isUppercase, setUpperCase, isLowercase, setLowerCase, passLength, setPassLength, isNumber, setNumber, isSymbol, setSymbol }}/>
                <View style={[styles.buttonContainer, { opacity: isUppercase || isLowercase || isNumber || isSymbol ? 1 : 0.2}]}>
                    <Pressable 
                        onPress={generateRandomPassword} 
                        disabled={isUppercase || isLowercase || isNumber || isSymbol ? false : true} 
                        style={({ pressed }) => [styles.buttonWrapper, {opacity: pressed ? 0.5 : 1}]}>
                            <View style={styles.refreshIcon}>
                                <RefreshIcon />
                            </View>
                            <Text style={styles.buttonText}>{lang('btnRefresh')}</Text>
                    </Pressable>
                </View>
            </View>
        </View>
    )
};