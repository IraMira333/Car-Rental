import { useDispatch, useSelector } from 'react-redux';
import { useState } from 'react';
import {
  CarDescription,
  CarDetailButton,
  CarImage,
  CarImgBox,
  CarPrice,
  CardBox,
  CardModel,
  CardTitle,
  HeartButton,
  IconFavoriteHeart,
  IconHeart,
} from './CarCard.styled';
import Modal from 'components/Modal/Modal';
import DetailsAboutTheCar from 'components/DetailsAboutTheCar/DetailsAboutTheCar';
import { addFavoriteCar, deleteFavoriteCar } from 'redux/carSlice';
import { selectFavoriteCars } from 'redux/selectors';

const CarCard = ({ car }) => {
  const {
    id,
    year,
    make,
    model,
    type,
    img,
    accessories,
    rentalPrice,
    rentalCompany,
    address,
  } = car;

  const [isModalOpen, setIsModalOpen] = useState(false);
  const handeOnDetail = () => setIsModalOpen(!isModalOpen);

  const cityCountry = address.split(', ').slice(-2);

  const dispatch = useDispatch();
  const favoriteCars = useSelector(selectFavoriteCars);
  const isFavorite = favoriteCars.find(favorCar => favorCar.id === car.id);

  const onSwitchFavorite = () => {
    if (!isFavorite) dispatch(addFavoriteCar(car));
    if (isFavorite) dispatch(deleteFavoriteCar(car));
  };

  return (
    <>
      <CardBox>
        <CarImgBox>
          <CarImage src={img} alt={` ${model}`} loading="lazy" />
          <HeartButton onClick={onSwitchFavorite}>
            {isFavorite ? (
              <IconHeart width={18} height={18} />
            ) : (
              <IconFavoriteHeart width={18} height={18} />
            )}
          </HeartButton>
        </CarImgBox>
        <CardTitle>
          <CardModel>
            {make} <span>{model}</span>, {year}
          </CardModel>
          <CarPrice>{rentalPrice}</CarPrice>
        </CardTitle>
        <CarDescription>
          {cityCountry[0]} <span>|</span> {cityCountry[1]} <span>|</span>{' '}
          {rentalCompany} <br /> {type} <span>|</span> {make} <span>|</span>{' '}
          {id} <span>|</span> {accessories[0]}
        </CarDescription>
        <CarDetailButton type="button" onClick={() => handeOnDetail(car)}>
          Learn more
        </CarDetailButton>
      </CardBox>
      {isModalOpen && (
        <Modal closeModal={handeOnDetail}>
          <DetailsAboutTheCar car={car} />
        </Modal>
      )}
    </>
  );
};

export default CarCard;
