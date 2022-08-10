import React from 'react';
import { Container, Wrapper, Column, Row, Title, Link, Text, Logo, Separator } from './styles/footer';

export default function Footer ({ children, ...props}) {
  return <Container { ...props }>{ children }</Container>;
}

Footer.Wrapper =  function FooterWrapper ({ children, ...props}) {
  return <Wrapper { ...props }>{ children }</Wrapper>;
}

Footer.Column =  function FooterColumn ({ children, ...props}) {
  return <Column { ...props }>{ children }</Column>;
}

Footer.Row =  function FooterRow ({ children, ...props}) {
  return <Row { ...props }>{ children }</Row>;
}

Footer.Title =  function FooterTitle ({ children, ...props}) {
  return <Title { ...props }>{ children }</Title>;
}

Footer.Link =  function FooterLink ({ children, ...props}) {
  return <Link { ...props }>{ children }</Link>;
}

Footer.Text =  function FooterText ({ children, ...props}) {
  return <Text { ...props }>{ children }</Text>;
}

Footer.Logo =  function FooterLogo ({ children, ...props}) {
  return <Logo { ...props }>{ children }</Logo>;
}

Footer.Separator =  function FooterSeparator ({ children, ...props}) {
  return <Separator { ...props }>{ children }</Separator>;
}