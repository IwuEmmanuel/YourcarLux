import React from "react";
import styled from "styled-components";
import tw from "twin.macro";
import {Logo} from "../Logo";
import { NavItems } from "./navitems";

// Styled components are styled with tw(twin) libary To enable the easy
// integration/mixture of both tailwind classes and pure css styling for the
// navbar container max-w-screen-2xl ==> defined screen size in the tailwind
// config file for screen responsiveness
const NavbarContainer = styled.div `
  ${tw `
    w-full
    max-w-screen-2xl
    flex
    flex-row
    items-center
    mt-4
    sm:pl-10
    lg:pl-12
    lg:pr-12
    justify-between
  `}
`;

const LogoContainer = styled.div `
   ${tw ``}
`;

export function Navbar() {
    return (<NavbarContainer>
        <LogoContainer>
            <Logo />
        </LogoContainer>
        <NavItems />
    </NavbarContainer>
    )
};