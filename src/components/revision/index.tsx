import { 
  Container, 
  Wrapper, 
  Title, 
  Text,
  Label,
} from './styles/revision';

export default function Revision ({ children, ...props }: { children: any }): JSX.Element {
  return <Container { ...props }>{ children }</Container>;
}

Revision.Wrapper =  function RevisionWrapper ({ children, ...props }: { children: any }): JSX.Element {
  return <Wrapper { ...props }>{ children }</Wrapper>;
}

Revision.Title =  function RevisionTitle ({ children, ...props }: { children: any }): JSX.Element {
  return <Title { ...props }>{ children }</Title>;
}

Revision.Text =  function RevisionText ({ children, ...props }: { children: any }): JSX.Element {
  return <Text { ...props }>{ children }</Text>;
}

Revision.Label =  function RevisionLabel ({ children, ...props }: { children: any }): JSX.Element {
  return <Label { ...props }>{ children }</Label>;
}
