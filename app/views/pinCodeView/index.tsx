import React, { FC, useContext, useEffect, useMemo, useState} from 'react';
import { View, Text, Pressable, Alert } from 'react-native';
import { LocalizationContext } from '../../modules/language';
import { LogoIcon } from '../../assets/svg/logo';
import { getStyle } from './styles';
import { keyPad } from './keyPad';
import { colors } from '../../assets/constants/colors';
import { CirlceIcon } from '../../assets/svg/cirleIcon';
import * as Animatable from 'react-native-animatable';
import FingerprintScanner from 'react-native-fingerprint-scanner';
import { IStackNavigation } from '../../entities';
import { useNavigation } from '@react-navigation/native';
import { setAuthenticationState } from '../../modules/redux/validation/actions';
import { useDispatch } from 'react-redux';


interface Props {
    navigation: IStackNavigation;
};

const ROW_COUNT = 4;
const COLUMNS_COUNT = keyPad.length / ROW_COUNT;

export const PinCodeView: FC<Props> = ({navigation}) => {
    const styles = useMemo(() => getStyle(), []);
    const { lang }: any = useContext(LocalizationContext); 
    const [pinCodeValue, setPinCodeValue] = useState('');
    const [isAuthentication, setIsAuthentication] = useState(false);
    const [pin, setPin] = useState(Array(4).fill(pinCodeValue));
    const dispatch = useDispatch();
    
    const checkPinCode = useMemo(() => {
        let dotsColor;
        if(Number(pin.join('')) == 1212) {
            console.log('Pass is correct')
            setTimeout(() => {
                dispatch(setAuthenticationState(true))
            }, 250);
            dotsColor = colors.green;
        } else if(pin.join('').length == 4) {
            dotsColor = colors.tallPoppy;
            setTimeout(() => {
                setPin(Array(4).fill(''));
            }, 500);
            console.log('Pass is not correct')
        }
        return dotsColor;
    }, [pin]);
    
    const onPressNumbers = (btn: string) => {
        let pinCode = [...pin];
        for(var i = 0; i < pinCode.length; i++) {
            if(pinCode[i] == '') {
                pinCode[i] = btn;
                break;
            } else {
                continue;
            };
        };
        setPinCodeValue(pinCode.join(''));
        setPin(pinCode);
        pinCode.join('').length == 4 && checkPinCode;
    };

    const onPressClear = () => {
        let pinCode = [...pin];
        for(var i = pinCode.length - 1; i >= 0; i--) {
            if(pinCode[i] != '') {
                pinCode[i] = '';
                break;
            } else {
                continue;
            };
        };
        setPin(pinCode);
    };

    const onFingerScannerPress = async () => {
        FingerprintScanner
            .authenticate({ title: 'Авторизация', subTitle: 'Воспользуйтесь одним из способов для авторизации', description: '', cancelButton: 'Cancel', onAttempt: () => alert('Try again') })
            .then((data) => {
                dispatch(setAuthenticationState(true));
            })
            .catch((error) => {
                console.log(error)
        });
    }
    const onButtonsPress = (value: string) => {
        switch(value) {
            case 'FINGER':
                onFingerScannerPress();
                break;
            case 'CLEARE':
                onPressClear();
                break;
            default: 
                onPressNumbers(value);  
                break;  
        };
    };

    useEffect(() => {
        return FingerprintScanner.release();
    }, []);

    return (
        <View style={styles.container}>
            <Animatable.View animation={'flipInX'} iterationCount={1} direction="alternate" duration={1200} style={styles.logoWrapper}>
                <LogoIcon width={127} height={58} />
            </Animatable.View>
            <View style={styles.pinWrapper}>
                <Text style={styles.pinText}>{lang('enterPinCode')}</Text>
                <View style={{flexDirection: 'row', justifyContent: 'center'}}>
                    {pin.map((item, index) => {
                        let color = item != '' ? colors.pictionBlue : colors.bluewood
                        return <View key={index} style={{paddingHorizontal: 5}}><CirlceIcon color={checkPinCode || color}/></View>
                    })}
                </View>
            </View>
            <View style={styles.buttonsWrapper}>
                {
                    Array(ROW_COUNT).fill(null).map((_, index) => {
                        const startIndex = index * COLUMNS_COUNT;
                        return (
                            <View key={index} style={[styles.symbolsRow, ]}>
                                {keyPad.slice(startIndex, startIndex + COLUMNS_COUNT).map(({ value, component = value }) => {
                                    return (
                                        <Pressable 
                                            disabled={pin.join('').length >= 4 && value != 'CLEARE' && value != 'FINGER' ? true : false}
                                            key={value}
                                            onPress={() => onButtonsPress(value)}
                                            style={({pressed}) => [styles.symbolView, {opacity: pressed ? 0.5 : 1, backgroundColor: pressed ? colors.bluewood : colors.clay}]}>
                                                <Text style={[styles.btnText, {marginRight: value == 'CLEARE' ? 10 : 0, opacity: checkPinCode === colors.green ? 0.3 : 1}]}>{component}</Text>
                                        </Pressable>
                                    )}
                                )}
                            </View>
                        )}
                    )}
            </View>
        </View>
    )
};