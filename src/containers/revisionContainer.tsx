import { useTypedSelector } from '../formSlice';
import { useEffect, useState } from 'react';
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

  useEffect(() => {
    if(!isLoaded) getShelters();
  }, [shelters]);

  return (
    <Revision>
      <Revision.Wrapper>
        <Revision.Title>Skontrolujte si zadan?? ??daje</Revision.Title>
        
        <Revision.Label>Akou formou chcem pom??c??</Revision.Label>
        <Revision.Text>{formContributionChoice ? "Chcem finan??ne prispie?? celej nad??cii" : "Chcem finan??ne prispie?? konkr??tnemu ??tulku"}</Revision.Text>
        
        <Revision.Label>Najviac mi z??le???? na ??tulku</Revision.Label>
        <Revision.Text>{formContributionShelter===0 ? "" : shelters[formContributionShelter-1].name}</Revision.Text>
        
        <Revision.Label>Suma, ktorou chcem pom??c??</Revision.Label>
        <Revision.Text>{formContributionValue}</Revision.Text>
        
        <Revision.Label>Meno a priezvisko</Revision.Label>
        <Revision.Text>{formContactFirstName + " " + formContactLastName}</Revision.Text>
        
        <Revision.Label>E-mailov?? adresa</Revision.Label>
        <Revision.Text>{formContactEmail}</Revision.Text>
        
        <Revision.Label>Telef??nne ????slo</Revision.Label>
        <Revision.Text>{formContactPhone}</Revision.Text>
        
        <div style={{ display: 'flex', marginTop: 46, marginBottom: 51, alignItems: 'center' }}>
          <ConsentButton isSelected={consentCheck} setConsent={setConsentCheck}>
            {consentCheck ? <ConsentButton.Check src={Check} /> : <></> }
          </ConsentButton>
          <p style={consentTextStyles()}>S??hlas??m so spracovan??m mojich osobn??ch ??dajov</p>
        </div>

        <div style={{display: 'flex', justifyContent: 'space-between'}}>
          <PreviousButton><PreviousButton.Text>Sp????</PreviousButton.Text></PreviousButton>
          <SubmitButton formData={formData} consent={consentCheck}><SubmitButton.Text>Odosla?? formul??r</SubmitButton.Text></SubmitButton>
        </div>

      </Revision.Wrapper>
    </Revision>
  )
}

export default RevisionContainer;