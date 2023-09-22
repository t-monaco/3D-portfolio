import { style } from "@vanilla-extract/css";
import { breakpoints } from "../../styles";

export const ScrollContainerList = style({
    display: "flex",
    padding: "1rem 0",
    whiteSpace: "nowrap",

    "@media": {
        [`screen and (min-width: ${breakpoints.lg})`]: {
            bottom: "3rem",
            left: 0,
            position: "absolute",
        },
    },
});

export const ProfessionContainer = style({
    padding: "0 1rem",
    fontSize: "1.5rem",

    "@media": {
        [`screen and (min-width: ${breakpoints.lg})`]: {
            textAlign: "right",
            position: "absolute",
            right: "2vw",
            bottom: "40vh",
            fontSize: "2.5rem",
            fontWeight: "300",
        },
    },
});
