/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import styled, { css } from "styled-components";
import tw from "twin.macro";
import { slide as Menu } from "react-burger-menu";
import { useMediaQuery } from "react-responsive";
import { SCREENS } from "../responsive";
import menuStyles from "./menuStyles";



const ListContainer = styled.ul `
${tw `
flex
list-none
`}
`;

//Added props (menu) with optional types any to target nav items
// Using styled components to create a css attribute "menu"
const ListItem = styled.li <{menu?: any}>`
${tw `
text-xs
md:text-base
text-black
font-medium
mr-2
md:mr-6
cursor-pointer
transition
duration-500
ease-in-out
hover:text-gray-500
`}

 ${({menu}) => menu && css ` 
  ${tw`
   text-white
   text-xl
   mb-4
   focus:text-white 
  `}
 `}
`;

export function NavItems() {
    //Checks if we are on mobile or desktop
    //Use react responsive package
    const isMobile = useMediaQuery({ maxWidth: SCREENS.md})

    //checks if it is mobile then renders with alignment from the right
    if (isMobile) 
    return( 
    <Menu right styles={menuStyles}>
        
        <ListContainer>
            <ListItem menu>
                <a href="/">Home</a>
            </ListItem>
            <ListItem menu>
                <a href="#">Cars</a>
            </ListItem>
            <ListItem menu>
                <a href="#">Services</a>
            </ListItem>
            <ListItem menu>
                <a href="#">Promotions</a>
            </ListItem>
            <ListItem menu>
                <a href="#">Du Luxe</a>
            </ListItem>
            <ListItem menu>
                <a href="#">Contact</a>
            </ListItem>
        </ListContainer>
    </Menu>
    );

    //else if not mobile it renders this
    return (
        <ListContainer>
            <ListItem>
                <a href="#">Home</a>
            </ListItem>
            <ListItem>
                <a href="#">Cars</a>
            </ListItem>
            <ListItem>
                <a href="#">Services</a>
            </ListItem>
            <ListItem>
                <a href="#">Promotions</a>
            </ListItem>
            <ListItem>
                <a href="#">Du Luxe</a>
            </ListItem>
            <ListItem>
                <a href="#">Contact</a>
            </ListItem>
        </ListContainer>
    );
}