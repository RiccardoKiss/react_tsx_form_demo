import { Container, Wrapper, Column, Row, Title, Link, Text, Logo, Separator } from './styles/footer';

export default function Footer ({ children, ...props }: { children: any }): JSX.Element {
  return <Container { ...props }>{ children }</Container>;
}

Footer.Wrapper =  function FooterWrapper ({ children, ...props }: { children: any }): JSX.Element {
  return <Wrapper { ...props }>{ children }</Wrapper>;
}

Footer.Column =  function FooterColumn ({ children, ...props }: { children: any }): JSX.Element {
  return <Column { ...props }>{ children }</Column>;
}

Footer.Row =  function FooterRow ({ children, ...props }: { children: any }): JSX.Element {
  return <Row { ...props }>{ children }</Row>;
}

Footer.Title =  function FooterTitle ({ children, ...props }: { children: any }): JSX.Element {
  return <Title { ...props }>{ children }</Title>;
}

Footer.Link =  function FooterLink ({ children, ...props }: { href: string; children: any }): JSX.Element {
  return <Link { ...props }>{ children }</Link>;
}

Footer.Text =  function FooterText ({ children, ...props }: { children: any }): JSX.Element {
  return <Text { ...props }>{ children }</Text>;
}

Footer.Logo =  function FooterLogo ({  ...props }): JSX.Element {
  return <Logo { ...props } />;
}

Footer.Separator =  function FooterSeparator ({ ...props }): JSX.Element {
  return <Separator { ...props } />;
}