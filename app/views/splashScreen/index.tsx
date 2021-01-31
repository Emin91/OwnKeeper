import React, { FC, useMemo} from 'react';
import { View } from 'react-native';
import { LogoIcon } from '../../assets/svg/logo';
import { getStyle } from './styles';

export const SplashScreen: FC = () => {
    const styles = useMemo(() => getStyle(), []);

    return (
        <View style={styles.container}>
            <LogoIcon width={127} height={58}/>
        </View>
    )
};