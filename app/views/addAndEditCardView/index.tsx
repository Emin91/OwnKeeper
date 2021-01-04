import React, { FC, useContext, useMemo, useState } from 'react';
import { KeyboardAvoidingView, LogBox, ScrollView } from 'react-native';
import { NavigationHeader } from '../../components/navigationHeader';
import { LocalizationContext } from '../../modules/language';
import { NumberField } from '../../components/numberField';
import { TextField } from '../../components/textFiled';
import { SaveIcon } from '../../assets/svg/saveIcon';
import { IStackNavigation } from '../../entities';
import { getStyle } from './styles';

interface Props {
    navigation?: IStackNavigation; 
};

LogBox.ignoreAllLogs();

export const AddAndEditCardView: FC<Props> = ({ navigation }) => {
    const styles = useMemo(() => getStyle(), []);
    const { t }: any = useContext(LocalizationContext);
    const [cardName, setCardName] = useState<string>('');
    const [cardHolderName, setCardHolderName] = useState<string>('');
    const [cardNumber, setCardNumber] = useState<number>(0);
    const [cardPin, setCardPin] = useState<number>(0);
    const [cardCvv, setCardCvv] = useState<number>(0);
    const [cardDate, setCardDate] = useState<string>('');
    const [cardNote, setCardNote] = useState<string>('');

    
    const onSaveCard = () => {
        if((cardName.trim() && cardHolderName.trim() && cardDate.trim()).length <= 0 || cardNumber <= 0 || cardPin <= 0 || cardCvv <= 0) {
            console.log('Not filled')
        } else {
            console.log('Full filed');
        };
    };

    return (
        <KeyboardAvoidingView style={styles.container} behavior={'padding'}>
            <NavigationHeader navigation={navigation} routeName={'CardView'} title={t('addNewCard')} buttonName={<SaveIcon />} onClick={onSaveCard}/>
            <ScrollView style={styles.scrollWrapper}>
                <TextField placeholder={t('cardName')} onChange={setCardName} isRequired />
                <TextField placeholder={t('cardholderName')} onChange={setCardHolderName} isRequired />
                <NumberField placeholder={t('cardNumber')} onChange={setCardNumber} isRequired mask={'[0000] [0000] [0000] [0000]'} />
                <NumberField placeholder={t('cardPin')} onChange={setCardPin} isRequired mask={'[0000]'} />
                <NumberField placeholder={t('cardCvv')} onChange={setCardCvv} isRequired mask={'[000]'} />
                <NumberField placeholder={t('cardExpiration')} onChange={setCardDate} isRequired mask={'[00]/[00]'} />
                <TextField placeholder={t('cardNote')} onChange={setCardNote} />
            </ScrollView>
        </KeyboardAvoidingView>
    )
};