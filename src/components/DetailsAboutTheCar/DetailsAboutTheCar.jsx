import {
  BoxForSecondaryText,
  ConditionItem,
  ConditionsLIst,
  Description,
  Image,
  ImageBox,
  MileageData,
  ModalSubTitle,
  ModalTitle,
  RentCarButton,
  SecondaryTextItem,
  SecondaryTextLIst,
} from './DetailsAboutTheCar.styled';

const DetailsAboutTheCar = ({ car }) => {
  const {
    img,
    year,
    make,
    model,
    type,
    fuelConsumption,
    engineSize,
    description,
    accessories,
    functionalities,
    rentalConditions,
    mileage,
    rentalPrice,
    address,
    id,
  } = car;

  const cityCountry = address.split(', ').slice(-2);
  const conditions = rentalConditions.split('\n');

  return (
    <div>
      <ImageBox>
        <Image src={img} alt={` ${model}`} />
      </ImageBox>
      <ModalTitle>
        {make} <span>{model}</span>, {year}
      </ModalTitle>
      <BoxForSecondaryText>
        <SecondaryTextLIst>
          <SecondaryTextItem>
            {cityCountry[0]} <span>|</span>
          </SecondaryTextItem>
          <SecondaryTextItem>
            {cityCountry[1]} <span>|</span>
          </SecondaryTextItem>
          <SecondaryTextItem>
            Id: {id} <span>|</span>
          </SecondaryTextItem>
          <SecondaryTextItem>
            {' '}
            Year: {year} <span>|</span>
          </SecondaryTextItem>
          <SecondaryTextItem>
            Type: {type} <span>|</span>
          </SecondaryTextItem>
        </SecondaryTextLIst>

        <SecondaryTextLIst>
          <SecondaryTextItem>
            Fuel Consumption: {fuelConsumption} <span>|</span>
          </SecondaryTextItem>
          <SecondaryTextItem>
            Engine Size: {engineSize} <span>|</span>
          </SecondaryTextItem>
        </SecondaryTextLIst>
      </BoxForSecondaryText>
      <Description>{description}</Description>

      <ModalSubTitle>Accessories and functionalities:</ModalSubTitle>
      <BoxForSecondaryText>
        <SecondaryTextLIst>
          {accessories.map((text, idx) => (
            <SecondaryTextItem key={idx}>
              {text}
              <span>|</span>
            </SecondaryTextItem>
          ))}
        </SecondaryTextLIst>
        <SecondaryTextLIst>
          {functionalities.map((text, idx) => (
            <SecondaryTextItem key={idx}>
              {text}
              <span>|</span>
            </SecondaryTextItem>
          ))}
        </SecondaryTextLIst>
      </BoxForSecondaryText>
      <div>
        <ModalSubTitle>Rental Conditions: </ModalSubTitle>
        <ConditionsLIst>
          {conditions.map((text, idx) => (
            <ConditionItem key={idx}>{text}</ConditionItem>
          ))}
          <ConditionItem>
            Mileage: <MileageData value={mileage} thousandSeparator="," />
          </ConditionItem>
          <ConditionItem>
            Price: <span>{rentalPrice}</span>
          </ConditionItem>
        </ConditionsLIst>
      </div>
      <RentCarButton href="tel:+380730000000" as="a">
        Rental car
      </RentCarButton>
    </div>
  );
};
export default DetailsAboutTheCar;
