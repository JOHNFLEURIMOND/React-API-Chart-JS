import styled, { css } from "styled-components";
import { fleurimondColors } from "../../utils/theme.js";

export const ProjectsSectionContainer = styled.div`
  display: grid;
  justify-items: center;
  align-items: center;
  grid-gap: 1rem;
  width: 100%;
  height: 100%;
  box-sizing: border-box;
  font-size: 1rem;
  text-align: center;
  font-weight: 500;
  margin: 0;
  padding: 2em;
  line-height: normal;
  background-color: ${fleurimondColors.white};

  @media (max-width: 800px){
    width: 100%;
    height: 100%;
    box-sizing: border-box;
    margin: 0;
    padding: 2em;
    display: grid;
    grid-template-columns:1fr 1fr;
    grid-template-rows: 1fr 1fr 1fr;
    grid-gap: 10px;
    justify-items: center;
    align-items: center;
  }
  `;

export const Header = styled.h1`
  font-size: 3rem;
  text-align: center;
  grid-column: span 3;

  @media (max-width: 800px) {
    font-size: 2rem;
    text-align: center;
    grid-column: span 2;
    
  }
`;

export const CardDiv = styled.div`
grid-column: span 3;
`;
export const CineDiv = styled.div`
  display: block;
`;

export const Link = styled.a`
  font-size: 1rem;
  font-weight: 700;
  text-decoration: none;
  color: ${fleurimondColors.black};
`;

export const ItemContainer = styled.div`
  display: flex;
  align-items: center;
  margin-left: 30px;

  div {
    font-size: 18px;
    margin-right: 5px;
  }

  span {
    font-size: 15px;
    font-weight: 500;
  }

  @media (max-width: 400px) {
    display: none;
  }
`;

export const Right = styled.div``;

export const Hamburger = styled.span`
  width: 32px;
  height: 25px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  cursor: pointer;
`;
export const Bolt = styled.span`
  position: relative;
  margin: 50px;
  width: 30px;
  height: 50px;
  transform-origin: 50% 50%;
  transform: skewX(-30deg) skewY(-30deg) rotate(10deg);
  background-color: yellow;
  padding: 0;
  margin-left: 0;
  margin-right: 0;

  &:before {
    position: absolute;
    border-style: solid;
    border-width: 0 0 10px 5px;
    border-color: transparent transparent ${fleurimondColors.graySmoke}
      transparent;
    top: 0px;
    left: -11px;
    padding: 0;
    margin: 0;
    content: "";
  }

  &:after {
    display: inline-block;
    position: absolute;
    border-style: solid;
    border-width: 0 0 10px 5px;
    border-color: transparent transparent transparent
      ${fleurimondColors.graySmoke};
    bottom: 0px;
    right: 3px;
    content: "";
  }
`;
export const FlippedCardInfoFieldset = styled.span`
  color: ${fleurimondColors.smoke};
  display: block;
  font-size: 15px;
  width: 100%;
  font-family: "proxima-nova", "sans-serif";
  font-weight: 500;
  position: relative;
  padding: 0 10px;
  margin: 5px;
`;
