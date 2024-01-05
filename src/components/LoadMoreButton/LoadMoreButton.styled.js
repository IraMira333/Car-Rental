import styled from 'styled-components';

export const LoadMoreStyle = styled.button`
  display: block;
  align-self: center;
  margin-bottom: 150px;
  margin-left: auto;
  margin-right: auto;

  font-family: Manrope;
  font-size: 16px;
  font-style: normal;
  font-weight: 500;
  line-height: 1.5; /* 150% */
  text-decoration-line: underline;
  color: #3470ff;
  border: none;
  background-color: transparent;
  transition: all 250ms cubic-bezier(0.4, 0, 0.2, 1);

  &:hover {
    color: #0b44cd;
  }
`;
