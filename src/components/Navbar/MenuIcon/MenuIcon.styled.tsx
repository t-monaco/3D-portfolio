import styled from "styled-components";

const CONTAINER_LENGTH_UNITS = 4; // size in rem

export const MenuIconContainer = styled.div<object>`
    align-items: center;
    background-color: #1c1d20;
    border: 0;
    border-radius: ${CONTAINER_LENGTH_UNITS * 0.5}rem;
    cursor: pointer;
    display: flex;
    flex-direction: column;
    gap: 0.3rem;
    height: ${CONTAINER_LENGTH_UNITS}rem;
    justify-content: center;
    overflow: hidden;
    position: fixed;
    right: 1rem;
    top: 1rem;
    width: ${CONTAINER_LENGTH_UNITS}rem;
    z-index: 10;

    &::after {
        background-color: #ffcb00;
        border: 0;
        border-radius: ${CONTAINER_LENGTH_UNITS * 0.5}rem;
        content: "";
        display: block;
        height: 100%;
        position: absolute;
        transform: scaleY(0);
        transform-origin: top;
        transition: transform 1s cubic-bezier(0.33, 1.31, 0.61, -0.24);
        width: 100%;
    }

    &:hover {
        &::after {
            transform-origin: bottom;
            transform: scaleY(1);
            z-index: 11;
        }
    }

    & > span {
        background-color: #fff;
        display: block;
        height: 0.1rem;
        transition: rotate 0.3s ease-in-out;
        width: ${CONTAINER_LENGTH_UNITS * 0.4}rem;
        z-index: 12;
    }

    &.open {
        background-color: #ffcb00;

        & > span {
            background-color: #000;
            transform-origin: center;

            &#top {
                rotate: -45deg;
                translate: 0 0.2rem;
            }

            &#bottom {
                rotate: 45deg;
                translate: 0 -0.2rem;
            }
        }
    }
`;
