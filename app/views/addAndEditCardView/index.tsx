import React, { FC, useContext, useMemo, useState } from 'react';
import { KeyboardAvoidingView, LogBox, ScrollView, Text, View } from 'react-native';
import { NavigationHeader } from '../../components/navigationHeader';
import { LocalizationContext } from '../../modules/language';
import { TextField } from '../../components/textField';
import { IStackNavigation } from '../../entities';
import { getStyle } from './styles';

interface Props {
    navigation: IStackNavigation; 
    route: any;
};

LogBox.ignoreAllLogs();

export const AddAndEditCardView: FC<Props> = ({ navigation, route }) => {
    const { isEdit, title } = route.params || { isEdit: false, title: '' };
    const styles = useMemo(() => getStyle(), []);
    const { lang }: any = useContext(LocalizationContext);
    const [cardName, setCardName] = useState<string>('');
    const [cardHolderName, setCardHolderName] = useState<string>('');
    const [cardNumber, setCardNumber] = useState<number>(0);
    const [cardPin, setCardPin] = useState<number>(0);
    const [cardCvv, setCardCvv] = useState<number>(0);
    const [cardDate, setCardDate] = useState<string>('');
    const [cardNote, setCardNote] = useState<string>('');

    const onSaveCard = () => {
        if((cardName.trim() && cardHolderName.trim() && cardDate.trim()).length <= 0 || cardNumber <= 0 || cardPin <= 0 || cardCvv <= 0) {
            console.log('Not filled'); 
        } else {
            if(cardNumber.toString().length < 19) {
                console.log('not full filed');
            } else {
                console.log('yes');
            }
        };
    };

    return (
        <KeyboardAvoidingView style={styles.container} behavior={'padding'}>
            <NavigationHeader navigation={navigation} routeName={!isEdit ? 'CardView' : 'CardItemFullPreview'} title={!isEdit ? lang('addNewCard') : `${lang('edit')} ${title}`} onClick={onSaveCard} editRouteName={''}/>
            <ScrollView style={styles.scrollWrapper}>
                <TextField isRequired placeholder={lang('cardName')} onChange={setCardName} />
                <TextField isRequired placeholder={lang('cardholderName')} onChange={setCardHolderName} />
                <TextField isRequired placeholder={lang('cardNumber')} onChange={setCardNumber} mask={'[0000] [0000] [0000] [0000]'} />
                <TextField isRequired placeholder={lang('cardPin')} onChange={setCardPin} mask={'[0000]'} />
                <TextField isRequired placeholder={lang('cardCvv')} onChange={setCardCvv} mask={'[000]'} />
                <TextField isRequired placeholder={lang('cardExpiration')} onChange={setCardDate} mask={'[00]/[00]'} />
                <TextField placeholder={lang('cardNote')} onChange={setCardNote} />
            </ScrollView>
            <View style={styles.requiredWrapper}>
                <Text style={styles.required}>{lang('required')}</Text>
            </View>
        </KeyboardAvoidingView>
    )
};