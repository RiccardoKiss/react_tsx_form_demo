import ContributionForm from '../components/contributionForm';
import ContributionChoice from '../components/contributionChoice';
import ShelterDropdown from '../components/shelterDropdown';
import WalletIcon from './assets/wallet.svg';
import PawIcon from './assets/paw.svg';

const ContributionFormContainer = () => {

  return (
    <ContributionForm>
      <ContributionForm.Wrapper>
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

        <ContributionForm.LabelRow>
          <ContributionForm.Label>O projekte</ContributionForm.Label>
          <ContributionForm.Label>Nepovinné</ContributionForm.Label>
        </ContributionForm.LabelRow>

        <ShelterDropdown />

        <ContributionForm.LabelRow>
          <ContributionForm.Label>Suma, ktorou chcem prispieť</ContributionForm.Label>
        </ContributionForm.LabelRow>

      </ContributionForm.Wrapper>
    </ContributionForm>
  )
}

export default ContributionFormContainer;