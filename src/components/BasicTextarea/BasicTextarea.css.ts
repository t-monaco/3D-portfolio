import { style } from "@vanilla-extract/css";

export const FormFieldContainer = style({
    display: "flex",
    flexDirection: "column",
    width: "100%",

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
