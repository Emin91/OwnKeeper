import React, { FC, useEffect, useMemo } from 'react';
import { View } from 'react-native';
import { setBiometricType, setSplashLoaded } from '../../modules/redux/appState/actions';
import FingerprintScanner from 'react-native-fingerprint-scanner';
import * as Animatable from 'react-native-animatable';
import { LogoIcon } from '../../assets/svg/logo';
import { useDispatch } from 'react-redux';
import { getStyle } from './styles';

export const SplashScreen: FC = () => {
    const styles = useMemo(() => getStyle(), []);
    const dispatch = useDispatch();

    useEffect(() => {
        FingerprintScanner
            .isSensorAvailable()
            .then((data) => data == 'Biometrics' ? dispatch(setBiometricType(true)) : dispatch(setBiometricType(false)))
            .finally(() => setTimeout(() => { dispatch(setSplashLoaded(true)) }, 2000));
    }, []);

    return (
        <View style={styles.container}>
            <Animatable.View animation={'slideInDown'} iterationCount={1} direction="alternate" duration={1200} style={styles.logoWrapper}>
                <Animatable.View animation={'fadeIn'} iterationCount={1} direction="alternate" duration={1800} style={styles.logoWrapper}>
                    <LogoIcon width={127} height={58} />
                </Animatable.View>
            </Animatable.View>
        </View>
    )
};