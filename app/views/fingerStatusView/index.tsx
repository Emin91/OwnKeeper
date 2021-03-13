import React, { FC, useContext, useEffect, useMemo, useState } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { selectSplashLoaded, selectBiometricType } from '../../modules/redux/appState/selectors';
import { setAuthenticationState } from '../../modules/redux/validation/actions';
import { useDispatch, useSelector, shallowEqual } from 'react-redux';
import FingerprintScanner from 'react-native-fingerprint-scanner';
import { FingerCircleIcon } from '../../assets/svg/fingerCircle';
import { LocalizationContext } from '../../modules/language';
import { colors } from '../../assets/constants/colors';
import { IStackNavigation } from '../../entities';
import { LogoIcon } from '../../assets/svg/logo';
import { getStyle } from './styles';

export interface Props {
    fingerColor: string;
    navigation: IStackNavigation;
};

export const FingerStatusView: FC<Props> = ({navigation}) => {
    const dispatch = useDispatch();
    const styles = useMemo(() => getStyle(), []);
    const { lang }: any = useContext(LocalizationContext);
    const [color, setColor] = useState(colors.pictionBlue);
	const isBiometric: boolean = useSelector(selectBiometricType, shallowEqual);
	const isSplashLoaded: boolean = useSelector(selectSplashLoaded, shallowEqual);

	useEffect(() => {
		if(isSplashLoaded && isBiometric){ 
            FingerprintScanner
                .authenticate({ 
                    title: lang('authorization'), 
                    subTitle: lang('chooseAuthType')})
                .then(() => {
                    setColor(colors.apple)
                    setTimeout(() => {dispatch(setAuthenticationState(true))}, 500);
                })
                .catch((error) => {
                    console.warn('error', error)
                    setColor(colors.tallPoppy)
                })}
		return FingerprintScanner.release();
	}, []);
    
    return (
        <View style={styles.container}>
            <View style={styles.logoWrapper}>
                <LogoIcon width={127} height={58} />
            </View>
            <View style={styles.pinTypes}>
                <View style={styles.fingerIconWrapper}>
                    <FingerCircleIcon color={color}/>
                </View>
                <View style={styles.switchWrapper}>
                    <TouchableOpacity style={styles.switchBtn} onPress={()=> {navigation.navigate('PinCodeView')}}>
                        <Text style={styles.switchText}>{lang('switchToKeyboard')}</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    )
};