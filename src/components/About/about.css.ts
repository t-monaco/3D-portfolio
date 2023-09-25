import { style } from "@vanilla-extract/css";
import { breakpoints } from "../../styles";

export const AboutContent = style({
    textAlign: "justify",
    padding: "0 2rem",
    height: "100vh",
    gap: "1.5rem",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    margin: "0 auto",

    "@media": {
        [`screen and (min-width: ${breakpoints.md})`]: {
            // flexDirection: "row",
            // alignItems: "center",
            maxWidth: "800px",
            // position: "relative",
        },
    },
});

export const AboutTitle = style({
    fontSize: "4rem",
    fontWeight: 700,

    "@media": {
        [`screen and (min-width: ${breakpoints.md})`]: {
            // position: "absolute",
            // top: "0",
            // left: "0",
        },
    },
});

export const AboutText = style({
    gap: "1rem",
    display: "flex",
    flexDirection: "column",
});
