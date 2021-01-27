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
				lang={lang}
				isOptionMenu
				title={title}
				routeName={'CardView'}
				navigation={navigation} 
				editRouteName={'AddAndEditCardView'} />
			<DataItemBox lang={lang} inputValue={'Emin Zeynalov'} label={lang('cardholderName')} />
			<DataItemBox lang={lang} inputValue={'1234567898765432'} label={lang('cardNumber')} isHidden />
			<DataItemBox lang={lang} inputValue={'1254'} label={lang('cardPin')} isHidden />
			<DataItemBox lang={lang} inputValue={'385'} label={lang('cardCvv')} isHidden />
			<DataItemBox lang={lang} inputValue={'12/22'} label={lang('cardExpiration')} />
			<DataItemBox lang={lang} inputValue={'My work card'} label={lang('cardNote')} />
		</View>
	);
};