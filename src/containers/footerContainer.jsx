import React from 'react';
import Footer from '../components/footer';
import Logo from './icons/good-boy-logo.svg';

export function FooterContainer() {
  return (
    <Footer>
      <Footer.Separator />
      <Footer.Wrapper>
        <Footer.Row>
          <Footer.Logo src={Logo} />
          <Footer.Column>
            <Footer.Title>Nadácia Good boy</Footer.Title>
            <Footer.Link href="#">O projekte</Footer.Link>
            <Footer.Link href="#">Ako na to</Footer.Link>
            <Footer.Link href="#">Kontakt</Footer.Link>
          </Footer.Column>
          <Footer.Column>
            <Footer.Title>Nadácia Good boy</Footer.Title>
            <Footer.Text>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus in interdum ipsum, sit amet.</Footer.Text>
          </Footer.Column>
          <Footer.Column>
            <Footer.Title>Nadácia Good boy</Footer.Title>
            <Footer.Text>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus in interdum ipsum, sit amet.</Footer.Text>
          </Footer.Column>
        </Footer.Row>
      </Footer.Wrapper>
    </Footer>
  )
}