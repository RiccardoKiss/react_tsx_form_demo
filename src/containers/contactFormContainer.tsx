import { formContactData, formStep, useTypedSelector } from '../formSlice';
import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
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
  const dispatch = useDispatch();
  
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

  useEffect(() => {
    dispatch(
      formContactData({
        firstName: formData.firstName,
        lastName: formData.lastName,
        email: formData.email,
        phone: formData.phone
      })
    );
  }, [formData, dispatch])

  return (
    <ContactForm>
      <ContactForm.Wrapper>
        <ContactForm.Title>Potrebujeme od Vás zopár informácií</ContactForm.Title>

        <div style={{display: 'flex', marginBottom: 13}}>
          <ContactForm.Label>O vás</ContactForm.Label>
        </div>

        <TextInput formData={formData} setFormData={setFormData} type={"firstName"} />
        <TextInput formData={formData} setFormData={setFormData} type={"lastName"} />
        <TextInput formData={formData} setFormData={setFormData} type={"email"} />
        <TextInput formData={formData} setFormData={setFormData} type={"phone"} />

        <div style={{display: 'flex', justifyContent: 'space-between'}}>
          <PreviousButton><PreviousButton.Text>Späť</PreviousButton.Text></PreviousButton>
          <ContinueButton2 formData={formData}><ContinueButton2.Text>Pokračovať</ContinueButton2.Text></ContinueButton2>
        </div>

      </ContactForm.Wrapper>
    </ContactForm>
  )
}

export default ContributionFormContainer;