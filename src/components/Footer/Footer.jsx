import { NameCar, NameRental } from 'pages/HomePage/HomePage.styled';
import { FooterBox, FooterP, GitHref } from './Footer.styled';

export default function Footer() {
  return (
    <FooterBox>
      <FooterP>
        Reserve your rental car today and experience travel freedom with{' '}
        <NameCar>CAR </NameCar> <NameRental>RENTAL</NameRental>.
      </FooterP>
      <span>Copyright &copy; 2023 | </span>{' '}
      <GitHref href="https://github.com/IraMira333">Iryna Trynkal</GitHref>
    </FooterBox>
  );
}
