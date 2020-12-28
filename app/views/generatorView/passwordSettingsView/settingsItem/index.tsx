import React, { FC, useMemo } from 'react';
import { Text, Pressable } from 'react-native';
import { colors } from '../../../../assets/constants/colors';
import { Switch } from 'react-native-switch';
import { getStyle } from './styles';

interface Props {
    label: string;
    switchValue: boolean;
    setSwitchValue: Function;
};

export const SettingsItem: FC<Props> = ({ label = '', switchValue = false, setSwitchValue = () => {} }) => {
    const styles = useMemo(() => getStyle(), []);

    return ( 
        <Pressable style={[styles.itemWrapper, styles.rowWrapper]}>
            <Text style={styles.boxLabel}>{label}</Text>
            <Switch
                barHeight={25}
                circleSize={23}
                disabled={false}
                switchLeftPx={2}
                switchRightPx={2}
                value={switchValue}
                circleBorderWidth={0}
                switchBorderRadius={30}
                renderActiveText={false}
                switchWidthMultiplier={2}
                renderInActiveText={false}
                backgroundActive={colors.apple}
                backgroundInactive={colors.clay}
                circleActiveColor={colors.white}
                innerCircleStyle={styles.switchWrapper}
                onValueChange={(val) => setSwitchValue(val)}
            />
        </Pressable>
    )
};