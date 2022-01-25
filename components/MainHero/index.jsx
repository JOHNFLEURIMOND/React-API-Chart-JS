import styled from 'styled-components';
import { fleurimondColors } from '../../utils/theme.js';

export const MainHero = styled.div`
width: 100%;
height: 60vw;
box-sizing: border-box;
display: grid;
grid-template-columns:  1fr 1fr 1fr;
grid-template-rows: 1fr 1fr;
justify-items: center;
align-items: center;
grid-gap: 1rem;
font-size: 20px;
background-color: ${fleurimondColors.white};
padding: 20px;
`

export const LeftHalf = styled.div`
  width: 50%;
  display:flex;
  padding: 35px;
`
export const RightHalf = styled.div`
  width: '50%',
  display: 'inline-block',
`
export const Title = styled.h1`
  letter-spacing: 1px;
  font-size: 1.4em;
  display: grid;
  grid-template-rows: repeat(auto-fit, minmax(300px, 1fr));
  align-items: center;


  @media only screen and (max-width:800px) {
    font-size: .8em;
    flex: 1;
  }
`