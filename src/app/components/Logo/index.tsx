import React from "react";
import styled from "styled-components";
import tw from "twin.macro";
import CarLogoPng from "../../../assets/images/car-logo.png"

const LogoContainer = styled.div `
  ${tw `
    flex
    items-center
  `}
`;

//Design is mobile first approach
const LogoText = styled.div `
  ${tw `
    text-xl
    md:text-2xl
    font-bold
    text-black
    m-1
  `}
`;

const LogoImage = styled.div `
  ${tw `
    h-6
    md:h-9
    ml-4
    md:ml-9
    `}
   
   img{
       width: auto;
       height: 100%;
   }
`;

export function Logo() {
    return <LogoContainer>
        <LogoImage>
            <img src={CarLogoPng} alt="Logo"/>
        </LogoImage>
        <LogoText>Kesh Lux.</LogoText>
    </LogoContainer>
};