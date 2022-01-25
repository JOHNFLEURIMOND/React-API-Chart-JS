import { fleurimondColors } from '../../utils/theme.js';
import styled, {createGlobalStyle} from 'styled-components';

export const Button = styled.button`
    font-size: 13px;
    border-radius: 3px;
    border-style: solid;
    border-width: 1px;
    padding: 8px 11px;
    color: ${fleurimondColors.palesasAqua};
    background-color: ${fleurimondColors.black};
    border-color: ${fleurimondColors.black};
    cursor: pointer;
    display: inline-block;
    letter-spacing: 0.02em;
    line-height: 1;

    :hover, :active, :focus{
        background-color: ${fleurimondColors.palesasAqua};
        border-color: ${fleurimondColors.palesasAqua};
        color: ${fleurimondColors.black};
        text-decoration: none;
      },
  
@media all and (max-width:30em){
  display:block;
  margin:0.4em auto;
 }

`;
