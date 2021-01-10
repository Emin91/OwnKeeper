import React, { FC, useContext, useMemo } from 'react';
import { View } from 'react-native';
import { NavigationHeader } from '../../components/navigationHeader';
import { LocalizationContext } from '../../modules/language';
import { DataItemBox } from '../../components/dataItemBox';
import { IStackNavigation } from '../../entities';
import { getStyle } from './styles';

interface Props {
	route: any;
	navigation: IStackNavigation;
};

export const DataItemFullPreview: FC<Props> = ({ route, navigation }) => {
	const styles = useMemo(() => getStyle(), []);
	const { serviceName, login } = route.params || { serviceName: '', login: '' };
	const { t }: any = useContext(LocalizationContext);
	
	return (
		<View style={styles.container}>
			<NavigationHeader
				t={t}
				isOptionMenu
				title={serviceName}
				routeName={'DataView'}
				navigation={navigation} 
				editRouteName={'AddAndEditAccountView'} />
			<DataItemBox t={t} inputValue={serviceName} label={t('siteName')} />
			<DataItemBox t={t} inputValue={login} label={t('userLogin')} />
			<DataItemBox t={t} inputValue={'E44sd83dfBukjvBy5vi%^V7Fv'} label={t('userPassword')} isHidden />
			<DataItemBox t={t} inputValue={'This is my data'} label={t('cardNote')} />
		</View>
	);
};