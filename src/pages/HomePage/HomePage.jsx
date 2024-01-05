import React from 'react';
import carsFoto from '../../assets/homePage.png';
import {
  HomeContainer,
  HomeH2,
  HomeH3,
  HomeH4,
  HomeP,
  HomePageText,
  ImageHome,
  NameCar,
  NameRental,
} from './HomePage.styled';

export default function HomePage() {
  return (
    <HomeContainer>
      <HomePageText>
        <HomeH2>
          Welcome to{' '}
          <NameCar style={{ fontSize: 'var(--spanName-Size)' }}>CAR </NameCar>{' '}
          <NameRental style={{ fontSize: 'var(--spanName-Size)' }}>
            RENTAL
          </NameRental>
        </HomeH2>
        <HomeP>
          Discover the Freedom of the Open Road with <NameCar>CAR </NameCar>
          <NameRental>RENTAL</NameRental>. We make every journey an
          unforgettable adventure, providing you with the keys to explore your
          destination at your own pace.
        </HomeP>
        <ImageHome src={carsFoto} alt="Cars" />
        <HomeH3>
          Why Choose <NameCar>CAR </NameCar> <NameRental>RENTAL</NameRental> ?
        </HomeH3>
        <HomeH4>Wide Selection of Vehicles</HomeH4>
        <HomeP>
          Whether you're cruising through the city or embarking on a
          cross-country road trip, we have the perfect vehicle for you. Choose
          from our diverse fleet, featuring fuel-efficient compacts, spacious
          SUVs, sleek sedans, and more.
        </HomeP>
        <HomeH4>Easy Booking Process</HomeH4>
        <HomeP>
          Booking a car with us is a breeze. Our user-friendly online platform
          allows you to reserve your vehicle in just a few clicks. Select your
          dates, choose your preferred car model, and you're ready to hit the
          road.
        </HomeP>
        <HomeH4>Transparent Pricing</HomeH4>
        <HomeP>
          No hidden fees, no surprises. At <NameCar>CAR </NameCar>{' '}
          <NameRental>RENTAL</NameRental>, we believe in transparent pricing.
          The quote you see is the price you pay. Enjoy affordable rental rates
          with no compromise on quality.
        </HomeP>
        <HomeH4>Convenient Locations</HomeH4>
        <HomeP>
          With rental locations strategically situated, we're where you need us
          to be. Whether you're landing at the airport, arriving by train, or
          exploring the heart of the city, <NameCar>CAR </NameCar>{' '}
          <NameRental>RENTAL</NameRental> is there to meet your transportation
          needs.
        </HomeP>
        <HomeH3>Explore With Confidence</HomeH3>
        <HomeP>
          At <NameCar>CAR </NameCar> <NameRental>RENTAL</NameRental>, we
          understand the importance of a seamless travel experience. Our
          dedicated team is committed to ensuring your journey is stress-free,
          allowing you to focus on the moments that matter. Ready to start your
          adventure?
        </HomeP>
      </HomePageText>
    </HomeContainer>
  );
}
