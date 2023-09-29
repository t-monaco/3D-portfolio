import styled from "styled-components";
import { breakpoints } from "../../../styles";

const SIDEBAR_WIDTH_MD = "32rem";

export const SidebarMenuContainer = styled.div<object>`
    background-color: #050816;
    border-bottom-left-radius: 90vw 100vh;
    border-top-left-radius: 90vw 100vh;
    display: flex;
    flex-direction: column;
    height: 100vh;
    justify-content: space-between;
    right: 0;
    overflow: hidden;
    overflow-y: hidden;
    padding: 8rem 1.5rem 2rem 1.5rem;
    position: absolute;
    top: 0;
    transform: translateX(100vw);
    transform-origin: right;
    transition: border-radius 1s cubic-bezier(0, 0.65, 0.95, 0.25),
        transform 1s cubic-bezier(0.41, 1.24, 0.92, 0.7);
    width: 100vw;
    z-index: 9;

    &::before {
        background-color: #1c1d20;
        border-radius: 100% 0% 0% 37% / 62% 0% 0% 22%;
        content: "";
        height: 100vh;
        right: 0;
        position: absolute;
        top: 0;
        width: 100vw;
        z-index: -1;
    }

    &.open {
        border-bottom-left-radius: 0;
        border-top-left-radius: 0;
        transform: translateX(0);
    }

    @media screen and (min-width: ${breakpoints.md}) {
        padding: 8rem 6rem 5rem 6rem;
        width: ${SIDEBAR_WIDTH_MD};

        &::before {
            width: ${SIDEBAR_WIDTH_MD};
        }
    }
`;

export const SidebarListItem = styled.li<object>`
    position: relative;

    &::before {
        background-color: #fff;
        border-radius: 50%;
        content: "";
        height: 0.7rem;
        left: 0;
        position: absolute;
        scale: 0;
        top: 0;
        transition: scale 0.3s ease-out;
        translate: -3rem calc(30px - 50%);
        width: 0.7rem;
    }

    &:hover {
        &::before {
            scale: 1;
        }
    }
`;

export const SocialLink = styled.a<object>`
    position: relative;

    &::after {
        background-color: #fff;
        bottom: -10%;
        content: "";
        height: 1px;
        left: 0;
        position: absolute;
        transform: scaleX(0);
        transition: transform 0.3s ease-out;
        width: 100%;
    }

    &:hover {
        &::after {
            transform: scaleX(1);
        }
    }
`;
