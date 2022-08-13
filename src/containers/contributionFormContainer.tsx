import ContributionForm from '../components/contributionForm';
import StepIndicator from '../components/stepIndicator';
import ContributionChoice from '../components/contributionChoice';
import WalletIcon from './assets/wallet.svg';
import PawIcon from './assets/paw.svg';

const ContributionFormContainer = () => {
  return (
    <ContributionForm>
      <ContributionForm.Wrapper>
        <ContributionForm.StepIndicatorsRow>
          <StepIndicator/>
          <StepIndicator/>
          <StepIndicator/>
        </ContributionForm.StepIndicatorsRow>

        <ContributionForm.Title>Vyberte si možnosť, ako chcete pomôcť</ContributionForm.Title>

        <ContributionForm.ContributionChoiceRow>
          <ContributionChoice isSelected={false} left >
            <ContributionChoice.Circle>
              <ContributionChoice.Icon isSelected={false} src={WalletIcon} />
            </ContributionChoice.Circle>
            <ContributionChoice.Text isSelected={false}>Chcem finančne prispieť konkrétnemu útulku</ContributionChoice.Text>
          </ContributionChoice>
          <ContributionChoice isSelected={true} right >
            <ContributionChoice.Circle>
              <ContributionChoice.Icon isSelected={true} src={PawIcon} />
            </ContributionChoice.Circle>
            <ContributionChoice.Text isSelected={true}>Chcem finančne prispieť celej nadácii</ContributionChoice.Text>
          </ContributionChoice>
        </ContributionForm.ContributionChoiceRow>

        <ContributionForm.ShelterLabelsRow>
          <ContributionForm.ShelterLabel>O projekte</ContributionForm.ShelterLabel>
          <ContributionForm.ShelterLabel>Nepovinné</ContributionForm.ShelterLabel>
        </ContributionForm.ShelterLabelsRow>

      </ContributionForm.Wrapper>
    </ContributionForm>
  )
}

export default ContributionFormContainer;