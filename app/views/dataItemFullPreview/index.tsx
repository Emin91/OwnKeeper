import React, { FC, useContext, useMemo } from 'react';
import { Alert, View } from 'react-native';
import { selectUserAccountByID } from '../../modules/redux/userAccounts/selectors';
import { deleteUserAccount } from '../../modules/redux/userAccounts/actions';
import { NavigationHeader } from '../../components/navigationHeader';
import { shallowEqual, useDispatch, useSelector } from 'react-redux';
import { LocalizationContext } from '../../modules/language';
import { DataItemBox } from '../../components/dataItemBox';
import * as Animatable from 'react-native-animatable';
import { RootState } from '../../modules/redux/store';
import { IStackNavigation } from '../../entities';
import { getStyle } from './styles';

interface Props {
	route: any;
	navigation: IStackNavigation;
};

export const DataItemFullPreview: FC<Props> = ({ route, navigation }) => {
	const styles = useMemo(() => getStyle(), []);
	const userAccount = useSelector((state: RootState) => selectUserAccountByID(state, route.params.localId), shallowEqual);
	const { localLogin, localNote, localPassword, localSiteName, localId: _id } = userAccount || {localLogin: '', localNote: '', localPassword: '', localSiteName: ''};
	const { lang }: any = useContext(LocalizationContext);
	const dispatch = useDispatch();

	console.log('userAccount', userAccount)
	const onBackPress = () => {
		navigation.navigate('DataView');
    };

    const onEditPress = () => {
		console.log('_id', _id)
        navigation.navigate('AddAndEditAccountView', {isEdit: true, _id});
	};
	
	const onDeletePress = () => {
        Alert.alert(
            lang('deleteCard'),
            `${lang('deleteCardText')} ${localSiteName} card?`,
            [
              { text: "Cancel", onPress: () => console.log("Cancel Pressed") },
              { text: "Delete", onPress: () => {dispatch(deleteUserAccount(_id)), navigation.navigate('DataView')} },
            ],
            { cancelable: true }
          );
    };

	
	return (
		<View style={styles.container}>
			<NavigationHeader
				lang={lang}
				isOptionMenu
				title={localSiteName}
				onBackPress={onBackPress}
				onEditPress={onEditPress}
				onDeletePress={onDeletePress} />
			<Animatable.View animation={'flipInX'} iterationCount={1} direction="alternate" duration={800}>
				<DataItemBox lang={lang} inputValue={localSiteName || ''} label={lang('siteName')} />
			</Animatable.View>
			<Animatable.View animation={'flipInX'} iterationCount={1} direction="alternate" duration={1000}>
				<DataItemBox lang={lang} inputValue={localLogin || ''} label={lang('userLogin')} />
			</Animatable.View>
			<Animatable.View animation={'flipInX'} iterationCount={1} direction="alternate" duration={1200}>
				<DataItemBox lang={lang} inputValue={localPassword || ''} label={lang('userPassword')} isHidden />
			</Animatable.View>
			<Animatable.View animation={'flipInX'} iterationCount={1} direction="alternate" duration={1400}>
				{localNote ? <DataItemBox lang={lang} inputValue={localNote || ''} label={lang('cardNote')} /> : null}
			</Animatable.View>
		</View>
	);
};