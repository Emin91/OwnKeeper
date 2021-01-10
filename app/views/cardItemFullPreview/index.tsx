import React, { FC, useContext, useMemo } from 'react';
import { View } from 'react-native';
import { NavigationHeader } from '../../components/navigationHeader';
import { LocalizationContext } from '../../modules/language';
import { DataItemBox } from '../../components/dataItemBox';
import { IStackNavigation } from '../../entities';
import { getStyle } from './styles';

interface Props {
		navigation: IStackNavigation;
		route: any;
};

export const CardItemFullPreview: FC<Props> = ({ navigation, route }) => {
	const styles = useMemo(() => getStyle(), []);
	const { title } = route.params || { title: '' };
	const { lang }: any = useContext(LocalizationContext);
	
	return (
		<View style={styles.container}>
			<NavigationHeader
				t={lang}
				isOptionMenu
				title={title}
				routeName={'CardView'}
				navigation={navigation} 
				editRouteName={'AddAndEditCardView'} />
			<DataItemBox t={lang} inputValue={'Emin Zeynalov'} label={lang('cardholderName')} />
			<DataItemBox t={lang} inputValue={'1234567898765432'} label={lang('cardNumber')} isHidden />
			<DataItemBox t={lang} inputValue={'1254'} label={lang('cardPin')} isHidden />
			<DataItemBox t={lang} inputValue={'385'} label={lang('cardCvv')} isHidden />
			<DataItemBox t={lang} inputValue={'12/22'} label={lang('cardExpiration')} />
			<DataItemBox t={lang} inputValue={'My work card'} label={lang('cardNote')} />
		</View>
	);
};