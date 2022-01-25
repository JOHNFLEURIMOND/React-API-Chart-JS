import { BiMenu, BiX } from "react-icons/bi";
import React, { useState } from 'react'
import { Button } from '../Button/index.jsx';
import {
Nav,
NavbarContainer,
NavLogo,
NavIcon,
Menu,
MenuItem,
MenuLink,
MenuItemBtn,
MenuIcon,
MenuLinkBtn
} from './index';
import { GlobalStyle } from '../layout/global-style';

const Navbar = () => {
    //click is the initial state and setclick will be the update state
    const [click, setClick] = useState(false);

    //Create a function to handle the click state of the menu icon. 
    //if the menu icon was the menu bar at the beginning when clicked it will have the close icon
    const handleClick = () => setClick(!click);

    return (
                <Nav>
                    <NavbarContainer>
                        <NavLogo to="/">
                            Fleurimond
                        </NavLogo>
                        <MenuIcon onClick={handleClick}>
                            {click ? <BiX /> : <BiMenu />}
                        </MenuIcon>

                        <Menu onClick={handleClick} click={click}>
                            <MenuItem>
                                <MenuLink onClick={handleClick} to="/">Home</MenuLink>
                            </MenuItem>
                        </Menu>

                    </NavbarContainer>


                </Nav>
    )
}

export default Navbar