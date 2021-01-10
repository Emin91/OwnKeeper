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
	const { lang }: any = useContext(LocalizationContext);
	
	return (
		<View style={styles.container}>
			<NavigationHeader
				t={lang}
				isOptionMenu
				title={serviceName}
				routeName={'DataView'}
				navigation={navigation} 
				editRouteName={'AddAndEditAccountView'} />
			<DataItemBox t={lang} inputValue={serviceName} label={lang('siteName')} />
			<DataItemBox t={lang} inputValue={login} label={lang('userLogin')} />
			<DataItemBox t={lang} inputValue={'E44sd83dfBukjvBy5vi%^V7Fv'} label={lang('userPassword')} isHidden />
			<DataItemBox t={lang} inputValue={'This is my data'} label={lang('cardNote')} />
		</View>
	);
};