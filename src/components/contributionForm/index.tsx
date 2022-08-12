import { Container, Wrapper, StepIndicatorsRow, Title, ContributionChoiceRow } from './styles/contributionForm';

export default function ContributionForm ({ children, ...props }: { children: any }): JSX.Element {
  return <Container { ...props }>{ children }</Container>;
}

ContributionForm.Wrapper =  function ContributionFormWrapper ({ children, ...props }: { children: any }): JSX.Element {
  return <Wrapper { ...props }>{ children }</Wrapper>;
}

ContributionForm.StepIndicatorsRow =  function ContributionFormStepIndicatorsRow ({ children, ...props }: { children: any }): JSX.Element {
  return <StepIndicatorsRow { ...props }>{ children }</StepIndicatorsRow>;
}

ContributionForm.Title =  function ContributionFormTitle ({ children, ...props }: { children: any }): JSX.Element {
  return <Title { ...props }>{ children }</Title>;
}

ContributionForm.ContributionChoiceRow =  function ContributionFormContributionChoiceRow ({ children, ...props }: { children: any }): JSX.Element {
  return <ContributionChoiceRow { ...props }>{ children }</ContributionChoiceRow>;
}