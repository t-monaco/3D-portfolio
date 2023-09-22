import { keyframes, style } from "@vanilla-extract/css";
import { breakpoints } from "../../styles";

export const ScrollContainerList = style({
    whiteSpace: "nowrap",
    display: "flex",

    "@media": {
        [`screen and (min-width: ${breakpoints.lg})`]: {
            position: "absolute",
            left: 0,
            bottom: "3rem",
        },
    },
});

const LleftToRight = keyframes({
    from: { transform: "translateX(-100%)" },
    to: { transform: "translateX(0)" },
});

const RightToLeft = keyframes({
    from: { transform: "translateX(0)" },
    to: { transform: "translateX(-100%)" },
});

export const ScrollTextContainer = style({
    display: "flex",
    alignItems: "center",
    transition: "all 1s ease",

    selectors: {
        "&.up": {
            animation: `${RightToLeft} 14s infinite linear`,
        },
        "&.down": {
            animation: `${LleftToRight} 14s infinite linear`,
        },
    },
});

export const ProfessionContainer = style({
    padding: "0 1rem",
    fontSize: "1.8rem",

    "@media": {
        [`screen and (min-width: ${breakpoints.lg})`]: {
            position: "absolute",
            right: "5vw",
            bottom: "40vh",
            fontSize: "2.5rem",
            fontWeight: "300",
        },
    },
});
