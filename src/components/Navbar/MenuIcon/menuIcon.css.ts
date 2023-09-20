import { style } from "@vanilla-extract/css";

const CONTAINER_LENGHT_UNITS = 4; // size in rem

export const MenuIconContainer = style({
    // margin: "10rem auto", //!! REMOVE
    cursor: "pointer",
    position: "relative",
    backgroundColor: "#1c1d20",
    width: `${CONTAINER_LENGHT_UNITS}rem`,
    height: `${CONTAINER_LENGHT_UNITS}rem`,
    borderRadius: `${CONTAINER_LENGHT_UNITS * 0.5}rem`,
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    gap: ".3rem",
    overflow: "hidden",
    zIndex: 10,
    border: 0,

    "::after": {
        backgroundColor: "#FFCB00",
        borderRadius: `${CONTAINER_LENGHT_UNITS * 0.5}rem`,
        border: 0,
        content: "",
        display: "block",
        height: "100%",
        position: "absolute",
        transform: "scaleY(0)",
        transition: "transform 1s cubic-bezier(0.33, 1.31, 0.61, -0.24)",
        transformOrigin: "top",
        width: "100%",
    },

    selectors: {
        "&:hover::after": {
            transformOrigin: "bottom",
            transform: "scaleY(1)",
            zIndex: 11,
        },
        "&.open": {
            backgroundColor: "#FFCB00",
        },
    },
});

export const MenuBar = style({
    backgroundColor: "#fff",
    display: "block",
    height: ".1rem",
    width: `${CONTAINER_LENGHT_UNITS * 0.4}rem`,
    zIndex: 12,
    transition: "rotate .3s ease-in-out",

    selectors: {
        [`${MenuIconContainer}.open &`]: {
            backgroundColor: "#000",
        },
        [`${MenuIconContainer}.open #top&`]: {
            rotate: "-45deg",
            translate: "0 .2rem",
            transformOrigin: "center",
        },
        [`${MenuIconContainer}.open #bottom&`]: {
            rotate: "45deg",
            translate: "0 -.2rem",
            transformOrigin: "center",
        },
    },
});
