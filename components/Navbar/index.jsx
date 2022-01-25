import React from 'react';
import { GlobalStyle, Container } from '../layout/global-style';
import { BiRestaurant } from 'react-icons/bi';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

import { fleurimondColors } from '../../utils/theme.js';

export const Nav = styled.nav` 
font-size: 18px;
width: 100%;
top: 0;
z-index: 999;
height: 80px;
background: linear-gradient(90deg, ${fleurimondColors.woooRed} 0%, ${fleurimondColors.orneryOrange}  27%, ${fleurimondColors.leapingLemon}  85%);
/* box-shadow: ${fleurimondColors.graySmoke} ; */
box-shadow: 0px 2px 10px ${fleurimondColors.graySmoke};
display: flex;
justify-content: center;
align-items: center;
`;

export const NavbarContainer = styled(Container)`
display: flex;
justify-content: space-between;
align-items: center;
height: 80px;
${Container};
`;

export const NavLogo = styled(Link)`
color: ${fleurimondColors.white};
cursor: pointer;
margin: 1em;
display: flex;
align-items: center;
text-decoration: none;
font-size: 2.5rem;
font-weight: 800;
transition: all .5s ease;
&:hover{
    transform: scale(1.08);
}
@media (max-width: 1000px){
    display: none;
}
`;

export const NavIcon = styled(BiRestaurant)`
margin: 2rem;
transition: all .5s ease;
&:hover {
    transform: scale(2);
}
`;

export const MenuIcon = styled.div`
display: none;
@media (max-width: 1000px) {
    display: block;
    position: absolute;
    color: ${fleurimondColors.white} ;
    top: 0;
    right: 0;
    transform: translate(-50%, 20%);
    font-size: 4rem;
    cursor: pointer;
}
`;

export const Menu = styled.ul`
display: flex;
align-items: center;
text-align: center;
@media only screen and (max-width:1000px) {
    display: flex;
    flex-direction: column;
    width: 100%;
    height: 100vh;
    position: absolute;
    top: 80px;
    left: ${({ click }) => click ? '0' : '-100%'};
    background: linear-gradient(90deg, rgba(69, 101, 238, 0.95) 0%, rgba(116, 59, 239, 0.85) 27%, rgba(91, 220, 148, 0.55) 85%);
    transition: all .5s ease;
}
`;

export const MenuItem = styled.li`
list-style: none;
height: 80px;
@media only screen and (max-width:1000px){
    width: 100%;
    &:hover {
        border: none;
    }
}
`;

export const MenuLink = styled(Link)`
text-decoration: none;
font-weight: bold;
font-size: 2rem;
color: ${fleurimondColors.white};
display: flex;
justify-content: space-between;
align-items: center;
padding: 1rem 2rem;
height: 100%;
transition: all .2s ease;
&:hover {
    color: ${fleurimondColors.white};
    transform: traslateY(-3rem);
}
&:active {
    transform: traslateY(3rem);
    color: ${fleurimondColors.white};
}
@media only screen and (max-width:1000px){
    display: block;
    padding: 3rem;
    text-align: center;
    transition: all .2s ease;
}
`;

export const MenuItemBtn = styled.li`
list-style: none;
@media screen and (max-width:1000px){
    display: flex;
    justify-content: center;
    align-items: center;
    width: 50%;
    height: 120px;
}
`;

export const MenuLinkBtn = styled(Link)`
text-decoration: none;
display: flex;
justify-content: center;
align-items: center;
padding: 8px 16px;
height: 100%;
width: 100%;
border: none;
outline: none;
`;