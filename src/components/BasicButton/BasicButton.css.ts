import { style } from "@vanilla-extract/css";
import { breakpoints } from "../../styles";

export const BasicBtn = style({
    border: "2px solid black",
    padding: ".5rem",
    position: "relative",
    width: "100%",

    "::after": {
        position: "absolute",
        content: "",
        inset: 0,
        background: "#000",
        zIndex: -1,
        transform: "scaleX(0)",
        transition: "transform .4s cubic-bezier(0.1, 0.8, 0.30, 1)",
        transformOrigin: "left",
    },

    selectors: {
        "&:hover": {
            color: "#fff",
        },

        "&:hover::after": {
            transform: "scaleX(1)",
        },
    },

    "@media": {
        [`screen and (min-width: ${breakpoints.md})`]: {
            width: "40%",
        },
    },
});
