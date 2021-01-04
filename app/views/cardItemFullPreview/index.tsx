import React, { FC, useContext, useMemo } from 'react';
import { View } from 'react-native';
import { NavigationHeader } from '../../components/navigationHeader';
import { IStackNavigation } from '../../entities';
import { LocalizationContext } from '../../modules/language';
import { CardItemBox } from './cardItemBox';
import { getStyle } from './styles';

interface Props {
		navigation: IStackNavigation;
		route: any;
};

export const CardItemFullPreview: FC<Props> = ({ navigation, route }) => {
	const { title } = route.params || { title: '' }
	const styles = useMemo(() => getStyle(), []);
	const { t }: any = useContext(LocalizationContext);
	
	return (
		<View style={styles.container}>
			<NavigationHeader
				t={t}
				isOptionMenu
				title={title}
				routeName={'CardView'}
				navigation={navigation} />
			<CardItemBox inputValue={'Emin Zeynalov'} label={t('cardholderName')} />
			<CardItemBox inputValue={'1234567898765432'} label={t('cardNumber')} isHidden />
			<CardItemBox inputValue={'1254'} label={t('cardPin')} isHidden />
			<CardItemBox inputValue={'385'} label={t('cardCvv')} isHidden />
			<CardItemBox inputValue={'12/22'} label={t('cardExpiration')} />
			<CardItemBox inputValue={'My work card'} label={t('cardNote')} />
		</View>
	);
};