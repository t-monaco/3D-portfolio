import { style } from "@vanilla-extract/css";
import { breakpoints } from "../../styles";

export const FormFieldContainer = style({
    display: "flex",
    flexDirection: "column",
    // flexWrap: "wrap",
    width: "100%",

    "@media": {
        [`screen and (min-width: ${breakpoints.md})`]: {
            width: "calc(50% - 1rem)",
        },
    },

    selectors: {
        "&.error": {
            // add styles when input has an error
        },
    },
});

export const FormField = style({
    background: "none",
    borderBottom: "2px solid black",
    outline: "none",
    paddingBottom: ".4rem",

    ":focus": {
        borderColor: "red",
    },
});

export const FormLabel = style({
    // color: "red",
    // selectors: {
    //     [`&${FormField}:focus`]: {
    //         color: "blue",
    //     },
    // },
});
