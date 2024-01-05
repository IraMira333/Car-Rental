import Modal from 'components/Modal/Modal';
import { useState } from 'react';
import { IoMenu } from 'react-icons/io5';
import { MenuMobButton } from './MobileMenu.styled';
import { MobMenuList } from './MobMenu/MobMenu';

export default function MobMenu() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const handeOnClose = () => setIsMenuOpen(!isMenuOpen);
  const styleBox = {
    height: '100%',
    width: '100',
    marginTop: 0,
    marginRight: 0,
    marginLeft: 'auto',
    borderRadius: 0,
    backgroundImage:
      'linear-gradient(to top,rgba(46, 47, 66, 0.7),rgba(46, 47, 66, 0.1))',
  };

  return (
    <>
      <MenuMobButton type="button" onClick={() => handeOnClose()}>
        <IoMenu size={32} color="#555657" />
      </MenuMobButton>
      {isMenuOpen && (
        <Modal closeModal={handeOnClose} style={styleBox}>
          <MobMenuList handeOnClose={() => handeOnClose()} />
        </Modal>
      )}
    </>
  );
}
