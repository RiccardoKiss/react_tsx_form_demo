import { formContactData, formStep, useTypedSelector } from '../formSlice';
import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import Revision from '../components/revision';
import SubmitButton from '../components/submitButton';
import PreviousButton from '../components/previousButton';
import ConsentButton from '../components/consentButton';
import Check from './assets/check.svg';

type SubmitFields = {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  value: number;
  shelterID: number;
}

type Shelter = {
  id: number;
  name: string;
}

const consentTextStyles = () => {
  return{
    fontFamily: 'Public Sans',
    fontStyle: 'normal',
    fontWeight: 400,
    fontSize: 16,
    color: '#2F2F2F',
    opacity: '0.8',
    margin: 0
  }
}

const RevisionContainer = () => {
  
  const formContributionChoice = useTypedSelector(state => state.FormContributionData.allShelters);
  const formContributionShelter = useTypedSelector(state => state.FormContributionData.shelterID);
  const formContributionValue = useTypedSelector(state => state.FormContributionData.value);

  const formContactFirstName = useTypedSelector(state => state.FormContactData.firstName);
  const formContactLastName = useTypedSelector(state => state.FormContactData.lastName);
  const formContactEmail = useTypedSelector(state => state.FormContactData.email);
  const formContactPhone = useTypedSelector(state => state.FormContactData.phone);

  const [formData, setFormData] = useState<SubmitFields>({
    firstName: formContactFirstName,
    lastName: formContactLastName,
    email: formContactEmail,
    phone: formContactPhone,
    value: formContributionValue,
    shelterID: formContributionShelter
  })

  const [isLoaded, setIsLoaded] = useState(false);
  const [shelters, setShelters] = useState<Shelter[]>([]);
  const [consentCheck, setConsentCheck] = useState(false);

  const getShelters = async () => {
    await fetch("https://frontend-assignment-api.goodrequest.dev/api/v1/shelters")
    .then(response => response.json())
    .then(data => {
      console.log(data);
      setShelters(data.shelters);
      setIsLoaded(true);
    })
    .catch(error => {console.log(error)})
  }
  /*useEffect(() => {
    dispatch(
      formContactData({
        firstName: formData.firstName,
        lastName: formData.lastName,
        email: formData.email,
        phone: formData.phone
      })
    );
  }, [formData, dispatch])*/
  useEffect(() => {
    if(!isLoaded) getShelters();
  }, [shelters]);

  return (
    <Revision>
      <Revision.Wrapper>
        <Revision.Title>Skontrolujte si zadané údaje</Revision.Title>
        
        <Revision.Label>Akou formou chcem pomôcť</Revision.Label>
        <Revision.Text>{formContributionChoice ? "Chcem finančne prispieť celej nadácii" : "Chcem finančne prispieť konkrétnemu útulku"}</Revision.Text>
        
        <Revision.Label>Najviac mi záleží na útulku</Revision.Label>
        <Revision.Text>{formContributionShelter===0 ? "" : shelters[formContributionShelter-1].name}</Revision.Text>
        
        <Revision.Label>Suma, ktorou chcem pomôcť</Revision.Label>
        <Revision.Text>{formContributionValue}</Revision.Text>
        
        <Revision.Label>Meno a priezvisko</Revision.Label>
        <Revision.Text>{formContactFirstName + " " + formContactLastName}</Revision.Text>
        
        <Revision.Label>E-mailová adresa</Revision.Label>
        <Revision.Text>{formContactEmail}</Revision.Text>
        
        <Revision.Label>Telefónne číslo</Revision.Label>
        <Revision.Text>{formContactPhone}</Revision.Text>
        
        <div style={{ display: 'flex', marginTop: 46, marginBottom: 51, alignItems: 'center' }}>
          <ConsentButton isSelected={consentCheck} setConsent={setConsentCheck}>
            {consentCheck ? <ConsentButton.Check src={Check} /> : <></> }
          </ConsentButton>
          <p style={consentTextStyles()}>Súhlasím so spracovaním mojich osobných údajov</p>
        </div>

        <div style={{display: 'flex', justifyContent: 'space-between'}}>
          <PreviousButton><PreviousButton.Text>Späť</PreviousButton.Text></PreviousButton>
          <SubmitButton formData={formData} consent={consentCheck}><SubmitButton.Text>Odoslať formulár</SubmitButton.Text></SubmitButton>
        </div>

      </Revision.Wrapper>
    </Revision>
  )
}

export default RevisionContainer;