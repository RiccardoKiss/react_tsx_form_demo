import ContributionForm from '../components/contributionForm';
import StepIndicator from '../components/stepIndicator';

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
      </ContributionForm.Wrapper>
    </ContributionForm>
  )
}

export default ContributionFormContainer;