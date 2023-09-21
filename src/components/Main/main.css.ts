import { keyframes, style } from "@vanilla-extract/css";

export const ScrollContainerList = style({
    whiteSpace: "nowrap",
    display: "flex",
    position: "absolute",
    left: 0,
    bottom: "3rem",
});

const LleftToRight = keyframes({
    from: { transform: "translateX(-100%)" },
    to: { transform: "translateX(0)" },
});

export const ScrollTextContainer = style({
    display: "flex",
    alignItems: "center",
    animation: `${LleftToRight} 14s infinite linear`,
});
