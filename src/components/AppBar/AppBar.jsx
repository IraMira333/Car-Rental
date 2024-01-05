import { NavLink } from 'react-router-dom';
import { StyledHeader, StyledNavLink } from './AppBar.styled';
import carLogo from '../../assets/carRentCut.png';
import { useMediaQuery } from 'react-responsive';
import MobMenu from 'components/MobileMenu/MobileMenu';

export default function AppBar() {
  const isMobileSize = useMediaQuery({
    query: '(max-width: 500px)',
  });
  const TabMenu = (
    <>
      <StyledNavLink to="/">Home</StyledNavLink>
      <StyledNavLink to="/catalog">Catalog</StyledNavLink>
      <StyledNavLink to="/favorites">Favorites</StyledNavLink>
    </>
  );

  return (
    <>
      <StyledHeader>
        <NavLink to="/">
          <img src={carLogo} alt="logo" height="70" />
        </NavLink>
        {isMobileSize ? <MobMenu /> : TabMenu}
      </StyledHeader>
    </>
  );
}
