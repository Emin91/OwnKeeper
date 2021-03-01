import React, { FC, useContext, useEffect, useMemo, useState } from 'react';
import { View, Text, Pressable } from 'react-native';
import { setAuthenticationState } from '../../modules/redux/validation/actions';
import { selectBiometricType } from '../../modules/redux/userInfo/selectors';
import { shallowEqual, useDispatch, useSelector } from 'react-redux';
import FingerprintScanner from 'react-native-fingerprint-scanner';
import { LocalizationContext } from '../../modules/language';
import { CircleIcon } from '../../assets/svg/circleIcon';
import { colors } from '../../assets/constants/colors';
import * as Animatable from 'react-native-animatable';
import { IStackNavigation } from '../../entities';
import { LogoIcon } from '../../assets/svg/logo';
import { getStyle } from './styles';
import { keyPad } from './keyPad';

interface Props {
    navigation: IStackNavigation;
};

const ROW_COUNT = 4;
const COLUMNS_COUNT = keyPad.length / ROW_COUNT;

export const PinCodeView: FC<Props> = () => {
    const dispatch = useDispatch();
    const styles = useMemo(() => getStyle(), []);
    const [pinCodeValue, setPinCodeValue] = useState('');
    const { lang }: any = useContext(LocalizationContext);
    const [pin, setPin] = useState(Array(4).fill(pinCodeValue));
    const isBiometric: boolean = useSelector(selectBiometricType, shallowEqual);

    const checkPinCode = useMemo(() => {
        let dotsColor;
        if (Number(pin.join('')) == 1212) {
            setTimeout(() => {dispatch(setAuthenticationState(true))}, 250);
            dotsColor = colors.green;
        } else if (pin.join('').length == 4) {
            dotsColor = colors.tallPoppy;
            setTimeout(() => {setPin(Array(4).fill(''))}, 500);
        };
        return dotsColor;
    }, [pin]);

    const onPressNumbers = (btn: string) => {
        let pinCode = [...pin];
        for (var i = 0; i < pinCode.length; i++) {
            if (pinCode[i] == '') {
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
        for (var i = pinCode.length - 1; i >= 0; i--) {
            if (pinCode[i] != '') {
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
            .authenticate({
                title: 'Авторизация',
                subTitle: 'Воспользуйтесь одним два из способов для авторизации',
                onAttempt: () => alert('Try again')
            })
            .then(() => {dispatch(setAuthenticationState(true))})
            .catch((error) => {console.log(error)});
    };

    const onButtonsPress = (value: string) => {
        switch (value) {
            case 'FINGER':
                onFingerScannerPress();
                break;
            case 'CLEAR':
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
                <View style={{ flexDirection: 'row', justifyContent: 'center' }}>
                    {pin.map((item, index) => {
                        let color = item != '' ? colors.pictionBlue : colors.blueWood;
                        return <View key={index} style={{ paddingHorizontal: 5 }}><CircleIcon color={checkPinCode || color} /></View>
                    })}
                </View>
            </View>
            <View style={styles.buttonsWrapper}>
                {Array(ROW_COUNT).fill(null).map((_, index) => {
                        const startIndex = index * COLUMNS_COUNT;
                        return (
                            <View key={index} style={[styles.symbolsRow,]}>
                                {keyPad.slice(startIndex, startIndex + COLUMNS_COUNT).map(({ value, component = value }) => {
                                    return (
                                        <Pressable
                                            key={value}
                                            disabled={pin.join('').length >= 4 && value != 'CLEAR' && value != 'FINGER' ? true : false}
                                            onPress={() => onButtonsPress(value)}
                                            style={({ pressed }) => [styles.symbolView, { opacity: pressed ? 0.5 : 1, backgroundColor: pressed ? colors.blueWood : colors.clay }]}>
                                            <Text style={[styles.btnText, { marginRight: value == 'CLEAR' ? 10 : 0, opacity: checkPinCode === colors.green ? 0.3 : 1 }]}>
                                                {isBiometric || value != 'FINGER' ? component : null}
                                            </Text>
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