import React from 'react';
import { Container, Title, IconFB, IconIG } from './styles/header';

export default function Header ({ children, ...props}) {
  return <Container { ...props }>{ children }</Container>;
}

Header.Title =  function HeaderTitle ({ children, ...props}) {
  return <Title { ...props }>{ children }</Title>;
}

Header.IconFB =  function HeaderIcon ({ children, ...props}) {
  return <IconFB { ...props }>{ children }</IconFB>;
}

Header.IconIG =  function HeaderIcon ({ children, ...props}) {
  return <IconIG { ...props }>{ children }</IconIG>;
}