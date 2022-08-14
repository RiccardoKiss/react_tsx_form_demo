import { 
  Container, 
  Wrapper, 
  Title, 
  LabelRow,
  Label,
} from './styles/contactForm';

export default function ContributionForm ({ children, ...props }: { children: any }): JSX.Element {
  return <Container { ...props }>{ children }</Container>;
}

ContributionForm.Wrapper =  function ContributionFormWrapper ({ children, ...props }: { children: any }): JSX.Element {
  return <Wrapper { ...props }>{ children }</Wrapper>;
}

ContributionForm.Title =  function ContributionFormTitle ({ children, ...props }: { children: any }): JSX.Element {
  return <Title { ...props }>{ children }</Title>;
}

ContributionForm.LabelRow =  function ContributionFormLabelRow ({ children, ...props }: { children: any }): JSX.Element {
  return <LabelRow { ...props }>{ children }</LabelRow>;
}

ContributionForm.Label =  function ContributionFormLabel ({ children, ...props }: { children: any }): JSX.Element {
  return <Label { ...props }>{ children }</Label>;
}
