import { useTypedSelector } from '../formSlice';
import { useState } from 'react';
import TextInput from '../components/textInput';
import ContactForm from '../components/contactForm';
import ContinueButton2 from '../components/continueButton2';
import PreviousButton from '../components/previousButton';

type ContactFields = {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
}

const ContributionFormContainer = () => {
  
  const formContactFirstName = useTypedSelector(state => state.FormContactData.firstName);
  const formContactLastName = useTypedSelector(state => state.FormContactData.lastName);
  const formContactEmail = useTypedSelector(state => state.FormContactData.email);
  const formContactPhone = useTypedSelector(state => state.FormContactData.phone);

  const [formData, setFormData] = useState<ContactFields>({
    firstName: formContactFirstName || "",
    lastName: formContactLastName || "",
    email: formContactEmail || "",
    phone: formContactPhone || ""
  })

  return (
    <ContactForm>
      <ContactForm.Wrapper>
        <ContactForm.Title>Potrebujeme od Vás zopár informácií</ContactForm.Title>

        <div style={{display: 'flex', marginBottom: '0.954vh'}}>
          <ContactForm.Label>O vás</ContactForm.Label>
        </div>

        <div style={{ marginBottom: '3.668vh'}}>
          <TextInput formData={formData} setFormData={setFormData} type={"firstName"} />
          <TextInput formData={formData} setFormData={setFormData} type={"lastName"} />
          <TextInput formData={formData} setFormData={setFormData} type={"email"} />
          <TextInput formData={formData} setFormData={setFormData} type={"phone"} />
        </div>
        
        <div style={{display: 'flex', justifyContent: 'space-between'}}>
          <PreviousButton><PreviousButton.Text>Späť</PreviousButton.Text></PreviousButton>
          <ContinueButton2 formData={formData}><ContinueButton2.Text>Pokračovať</ContinueButton2.Text></ContinueButton2>
        </div>

      </ContactForm.Wrapper>
    </ContactForm>
  )
}

export default ContributionFormContainer;