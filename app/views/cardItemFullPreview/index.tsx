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
	const { t }: any = useContext(LocalizationContext);
	
	return (
		<View style={styles.container}>
			<NavigationHeader
				t={t}
				isOptionMenu
				title={title}
				routeName={'CardView'}
				navigation={navigation} 
				editRouteName={'AddAndEditCardView'} />
			<DataItemBox t={t} inputValue={'Emin Zeynalov'} label={t('cardholderName')} />
			<DataItemBox t={t} inputValue={'1234567898765432'} label={t('cardNumber')} isHidden />
			<DataItemBox t={t} inputValue={'1254'} label={t('cardPin')} isHidden />
			<DataItemBox t={t} inputValue={'385'} label={t('cardCvv')} isHidden />
			<DataItemBox t={t} inputValue={'12/22'} label={t('cardExpiration')} />
			<DataItemBox t={t} inputValue={'My work card'} label={t('cardNote')} />
		</View>
	);
};