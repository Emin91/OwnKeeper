import React, { FC, useContext, useMemo, useState} from 'react';
import { View, Text, Pressable } from 'react-native';
import { LocalizationContext } from '../../modules/language';
import { LogoIcon } from '../../assets/svg/logo';
import { getStyle } from './styles';
import { keyPad } from './keyPad';
import { colors } from '../../assets/constants/colors';
import { CirlceIcon } from '../../assets/svg/cirleIcon';
import * as Animatable from 'react-native-animatable';

const ROW_COUNT = 4;
const COLUMNS_COUNT = keyPad.length / ROW_COUNT;

export const PinCodeView: FC = () => {
    const styles = useMemo(() => getStyle(), []);
    const { lang }: any = useContext(LocalizationContext); 
    const [pinCodeValue, setPinCodeValue] = useState('');
    const [pin, setPin] = useState(Array(4).fill(pinCodeValue));

    const checkPinCode = useMemo(() => {
        let dotsColor;
        if(Number(pin.join('')) == 1212) {
            console.log('Pass is correct')
            dotsColor = colors.green;
        } else if(pin.join('').length == 4) {
            dotsColor = colors.tallPoppy;
            setTimeout(() => {
                setPin(Array(4).fill(''));
            }, 700);
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

    const onButtonsPress = (value: string) => {
        switch(value) {
            case 'FINGER':
                console.log('Finger scanner');
                break;
            case 'CLEARE':
                onPressClear();
                break;
            default: 
                onPressNumbers(value);  
                break;  
        };
    };

    return (
        <View style={styles.container}>
            <Animatable.View animation={'flipInX'} iterationCount={1} direction="alternate" duration={1500} style={styles.logoWrapper}>
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
                            <View key={index} style={styles.symbolsRow}>
                                {keyPad.slice(startIndex, startIndex + COLUMNS_COUNT).map(({ value, component = value }) => {
                                    return (
                                        <Pressable 
                                            disabled={pin.join('').length >= 4 && value != 'CLEARE' && value != 'FINGER' ? true : false}
                                            key={value}
                                            onPress={() => onButtonsPress(value)}
                                            style={({pressed}) => [styles.symbolView, {opacity: pressed ? 0.5 : 1, backgroundColor: pressed ? colors.bluewood : colors.clay}]}>
                                                <Text style={[styles.btnText, {marginRight: value == 'CLEARE' ? 10 : 0}]}>{component}</Text>
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