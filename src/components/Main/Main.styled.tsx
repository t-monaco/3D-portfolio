import styled from "styled-components";
import { breakpoints } from "../../styles";
import { default as BgImage } from "./../../assets/main-transp.png";

export const MainContainer = styled.main<object>`
    background: url(${BgImage}),
        linear-gradient(180deg, var(--purple-003) 20.83%, var(--purple-004) 80.73%);
    background-size: cover;
    background-position: bottom;
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    overflow: hidden;
    z-index: -1;
`;

export const ScrollTextContainer = styled.section<object>`
    display: flex;
    padding: 1rem 0;
    white-space: nowrap;

    @media screen and (min-width: ${breakpoints.lg}) {
        bottom: 3rem;
        left: 0 3rem;
        position: absolute;
    }
`;

export const ProfessionContainer = styled.section<object>`
    padding: 0 1rem;
    font-size: 1.5rem;

    @media screen and (min-width: ${breakpoints.lg}) {
        text-align: right;
        position: absolute;
        right: 2vw;
        bottom: 40vh;
        font-size: 2.5rem;
        font-weight: 300;
    }
`;
