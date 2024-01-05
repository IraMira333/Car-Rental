import { useSelector } from 'react-redux';
import { selectFavoriteCars } from 'redux/selectors';
import CarsGrid from 'components/CarsGrid/CarsGrid';

export default function FavoritePage() {
  const favoriteCars = useSelector(selectFavoriteCars);

  return (
    <>
      <CarsGrid cars={favoriteCars} />
    </>
  );
}
