import styled, { css } from 'styled-components';
import { fleurimondColors } from '../../utils/theme.js';
import { GlobalStyle, Container } from '../layout/global-style';

export const Card = styled.article`
border: 1px solid ${fleurimondColors.lightSmoke};
border-radius: 10px;
display: grid; 
width: 300px;

@media(max-width: 800px){
  width:200px;
}
}
`;


export const CardImage = styled.img`
object-fit: cover;
width: 100%;
`

export const Caption = styled.figcaption`
background-color: rgba(0,0,0,.7);
width: 100%;
`

export const CardHeader = styled.header`
  cursor: context-menu;
  border-bottom: 1px solid ${fleurimondColors.lightSmoke};
`;

export const CardHeading = styled.h1`
  font-size: 24px;
  font-weight: bold;
  cursor: context-menu;
  text-align: center;
`;

export const CardBody = styled.figure`
  display: grid; 
  grid-template-areas: 200px 50px;
`;

export const PriceFieldset = styled.h3`
  color: ${fleurimondColors.dutchieBlue};
  font-family: 'proxima-nova', 'sans-serif';
  font-size: 1.25rem;
  border: 0;
`;

export const NameFieldset = styled.h3`
  color: ${fleurimondColors.black};
  padding: .75rem;
  font-size: 1rem;
  border: 0;
`;
export const StrainFieldset = styled.h3`
  border: 1px solid ${fleurimondColors.graySmoke};
  background-color: #eaeff4;
  border-radius: 3px;
  color: ${fleurimondColors.smoke};
  font-size: 14px;
  font-weight: bold;
  margin: 20px 0 0 33px;
  padding: 3px 7px 3px 18px;
  width: 10px;
`;

export const ThcCbdTitleFieldset = styled.p`
  font-size: 15px;
  text-decoration: none;
  color: ${fleurimondColors.smoke};
  padding: 0 32px;
  margin-top: 20px;
  border: 0;
`;
export const AVideo = styled.a`
  font-size: 15px;
  text-decoration: none;
  color: ${fleurimondColors.smoke};
  position: relative;
  padding: 0 32px;
  margin-top: 20px;
  border: 0;

  :hover{
    color: ${fleurimondColors.bebeBlue}
  }
`;

export const FlippedCardInfoFieldset = styled.span`
  color: ${fleurimondColors.smoke};
  font-size: 15px;
  width: 100%;
  font-weight: 500;
  padding: 0 10px;
  margin: 5px;
`;

