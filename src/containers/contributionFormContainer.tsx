import ContributionForm from '../components/contributionForm';
import ContributionChoice from '../components/contributionChoice';
import ShelterDropdown from '../components/shelterDropdown';
import PriceInput from '../components/priceInput';
import { formContributionData, formStep, useTypedSelector } from '../formSlice';
import WalletIcon from './assets/wallet.svg';
import PawIcon from './assets/paw.svg';
import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import PriceButton from '../components/priceButton';
import ContinueButton from '../components/continueButton';

type ContributionFields = {
  allShelters: boolean;
  shelterID: number;
  value: number;
}

const ContributionFormContainer = () => {
  const dispatch = useDispatch();
  
  const formContributionChoice = useTypedSelector(state => state.FormContributionData.allShelters);
  const formContributionShelter = useTypedSelector(state => state.FormContributionData.shelterID);
  const formContributionValue = useTypedSelector(state => state.FormContributionData.value);

  const [formData, setFormData] = useState<ContributionFields>({
    allShelters: formContributionChoice || true,
    shelterID: formContributionShelter || 0,
    value: formContributionValue || 0,
  })
  /*
  useEffect(() => {
    dispatch(
      formContributionData({
        allShelters: formData.allShelters,
        shelterID: formData.shelterID,
        value: formData.value
      })
    );
  }, [formData, dispatch])*/

  return (
    <ContributionForm>
      <ContributionForm.Wrapper>
        <ContributionForm.Title>Vyberte si možnosť, ako chcete pomôcť</ContributionForm.Title>

        <ContributionForm.ContributionChoiceRow>
          <ContributionChoice formData={formData} setFormData={setFormData} isSelected={!formData.allShelters} left >
            <ContributionChoice.Circle>
              <ContributionChoice.Icon isSelected={!formData.allShelters} src={WalletIcon} />
            </ContributionChoice.Circle>
            <ContributionChoice.Text isSelected={!formData.allShelters}>Chcem finančne prispieť konkrétnemu útulku</ContributionChoice.Text>
          </ContributionChoice>
          <ContributionChoice formData={formData} setFormData={setFormData} isSelected={formData.allShelters} right >
            <ContributionChoice.Circle>
              <ContributionChoice.Icon isSelected={formData.allShelters} src={PawIcon} />
            </ContributionChoice.Circle>
            <ContributionChoice.Text isSelected={formData.allShelters}>Chcem finančne prispieť celej nadácii</ContributionChoice.Text>
          </ContributionChoice>
        </ContributionForm.ContributionChoiceRow>

        <ContributionForm.LabelRow>
          <ContributionForm.Label>O projekte</ContributionForm.Label>
          <ContributionForm.Label>{formData.allShelters ? 'Nepovinné' : 'Povinné'}</ContributionForm.Label>
        </ContributionForm.LabelRow>
        <ShelterDropdown formData={formData} setFormData={setFormData} />

        <ContributionForm.PriceRowLabel>Suma, ktorou chcem prispieť</ContributionForm.PriceRowLabel>
        <ContributionForm.PriceRow>
          <PriceButton formData={formData} setFormData={setFormData} isSelected={formData.value===5} value={5}><PriceButton.Text isSelected={formData.value===5}>5 €</PriceButton.Text></PriceButton>
          <PriceButton formData={formData} setFormData={setFormData} isSelected={formData.value===10} value={10}><PriceButton.Text isSelected={formData.value===10}>10 €</PriceButton.Text></PriceButton>
          <PriceButton formData={formData} setFormData={setFormData} isSelected={formData.value===20} value={20}><PriceButton.Text isSelected={formData.value===20}>20 €</PriceButton.Text></PriceButton>
          <PriceButton formData={formData} setFormData={setFormData} isSelected={formData.value===30} value={30}><PriceButton.Text isSelected={formData.value===30}>30 €</PriceButton.Text></PriceButton>
          <PriceButton formData={formData} setFormData={setFormData} isSelected={formData.value===50} value={50}><PriceButton.Text isSelected={formData.value===50}>50 €</PriceButton.Text></PriceButton>
          <PriceButton formData={formData} setFormData={setFormData} isSelected={formData.value===100} value={100}><PriceButton.Text isSelected={formData.value===100}>100 €</PriceButton.Text></PriceButton>
          <PriceInput formData={formData} setFormData={setFormData} />
        </ContributionForm.PriceRow>

        <div style={{display: 'flex', flexDirection: 'row-reverse'}}>
          <ContinueButton formData={formData}><ContinueButton.Text>Pokračovať</ContinueButton.Text></ContinueButton>
        </div>

      </ContributionForm.Wrapper>
    </ContributionForm>
  )
}

export default ContributionFormContainer;