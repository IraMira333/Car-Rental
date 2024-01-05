import styled from 'styled-components';
import { FaHeart, FaRegHeart } from 'react-icons/fa';

export const CardBox = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
  width: 274px;

  margin-left: auto;
  margin-right: auto;
`;

export const CarImgBox = styled.div`
  position: relative;
  width: 274px;
  height: 268px;
  margin-bottom: 14px;
  border-radius: 14px;
  overflow: hidden;
`;

export const CarImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;
export const HeartButton = styled.button`
  position: absolute;
  top: 14px;
  right: 14px;
  padding: 0;
  line-height: 0;
  background-color: transparent;
  border: none;
  cursor: pointer;
`;

export const IconHeart = styled(FaHeart)`
  fill: #3470ff;
  width: 100%;
  height: 100%;
`;

export const IconFavoriteHeart = styled(FaRegHeart)`
  fill: #ffffffcc;
  width: 100%;
  height: 100%;
`;

export const CardTitle = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 8px;
`;

export const CardModel = styled.h2`
  font-size: 16px;
  font-weight: 500;
  color: #121417;

  & span {
    color: #3470ff;
  }
`;

export const CarPrice = styled.p`
  font-size: 16px;
  font-weight: 500;

  color: #121417;
`;
export const CarDescription = styled.div`
  max-height: 40px;
  color: #12141780;

  & span {
    color: #12141710;
  }
`;

export const CarDetailButton = styled.button`
  justify-self: end;
  margin-top: 28px;
  padding-block: 12px;
  padding-inline: 99px;

  font-family: Manrope;
  font-size: 14px;
  font-weight: 600;
  line-height: 1.43; /* 142.857% */

  color: #ffffff;
  background-color: #3470ff;
  border-radius: 12px;
  border: none;
  transition: all 250ms cubic-bezier(0.4, 0, 0.2, 1);

  &:hover {
    background-color: #0b44cd;
  }
`;
