import styled from 'styled-components';

export const FooterBox = styled.section`
  text-align: center;
  background: linear-gradient(to right, #095680, #ffffff);
  color: #2a2b2b;
  padding-top: 5px;
  padding-bottom: 5px;
`;
export const FooterP = styled.p`
  font-size: 14px;
  font-weight: 500;
  margin-bottom: 10px;

  @media screen and (max-width: 424px) {
    font-size: 12px;
  }
`;
export const GitHref = styled.a`
  color: #3470ff;
  font-weight: 700;
`;
