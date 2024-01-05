import styled from 'styled-components';

export const BackDrop = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;

  display: flex;
  justify-content: center;
  align-items: flex-start;
  background-color: rgba(18, 20, 23, 0.5);
  @media screen and (max-width: 600px) {
    overflow-y: auto;
  }
`;

export const ModalContainer = styled.div`
  position: relative;

  padding: 40px;
  max-width: 541px;
  background-color: #fff;
  border-radius: 24px;
  @media screen and (max-width: 600px) {
    min-width: 200px;
    padding: 10px;
  }
`;
export const CloseButton = styled.button`
  position: absolute;
  top: 16px;
  right: 16px;
  cursor: pointer;
  background-color: transparent;
  border: none;
  outline: none;
  font-size: 24px;
  padding: 0;
  transition: all 250ms cubic-bezier(0.4, 0, 0.2, 1);

  :hover {
    color: #3470ff;
  }
`;
