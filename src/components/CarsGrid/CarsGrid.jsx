import CarCard from 'components/CarCard/CarCard';
import { CarsGridStyle } from './CarsGrid.styled';

const CarsGrid = ({ cars }) => {
  return (
    <CarsGridStyle>
      {cars.map(car => (
        <li key={car.id}>
          <CarCard car={car} />
        </li>
      ))}
    </CarsGridStyle>
  );
};

export default CarsGrid;
