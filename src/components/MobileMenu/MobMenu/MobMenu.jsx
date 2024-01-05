import { StyledNavLink } from 'components/AppBar/AppBar.styled';
import { MenuMob, MenuMobButton } from '../MobileMenu.styled';

export const MobMenuList = handeOnClose => {
  return (
    <MenuMob>
      <MenuMobButton type="button" onClick={handeOnClose}>
        <StyledNavLink to="/">Home</StyledNavLink>
      </MenuMobButton>
      <MenuMobButton type="button" onClick={handeOnClose}>
        <StyledNavLink to="/catalog">Catalog</StyledNavLink>
      </MenuMobButton>

      <MenuMobButton type="button" onClick={handeOnClose}>
        <StyledNavLink to="/favorites">Favorites</StyledNavLink>
      </MenuMobButton>
    </MenuMob>
  );
};
