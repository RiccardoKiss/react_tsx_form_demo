import { Container, Title, IconFB, IconIG } from './styles/header';

export default function Header ({ children, ...props }: { children: any }): JSX.Element {
  return <Container { ...props }>{ children }</Container>;
}

Header.Title =  function HeaderTitle ({ children, ...props }: { children: any }): JSX.Element {
  return <Title { ...props }>{ children }</Title>;
}

Header.IconFB =  function HeaderIcon ({ ...props }): JSX.Element {
  return <IconFB { ...props } />;
}

Header.IconIG =  function HeaderIcon ({ ...props }): JSX.Element {
  return <IconIG { ...props } />;
}