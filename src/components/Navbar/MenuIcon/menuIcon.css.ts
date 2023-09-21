import { style } from "@vanilla-extract/css";

const CONTAINER_LENGHT_UNITS = 4; // size in rem

export const MenuIconContainer = style({
    alignItems: "center",
    backgroundColor: "#1c1d20",
    border: 0,
    borderRadius: `${CONTAINER_LENGHT_UNITS * 0.5}rem`,
    cursor: "pointer",
    display: "flex",
    flexDirection: "column",
    gap: ".3rem",
    height: `${CONTAINER_LENGHT_UNITS}rem`,
    justifyContent: "center",
    overflow: "hidden",
    position: "fixed",
    right: "1rem",
    top: "1rem",
    width: `${CONTAINER_LENGHT_UNITS}rem`,
    zIndex: 10,

    "::after": {
        backgroundColor: "#FFCB00",
        border: 0,
        borderRadius: `${CONTAINER_LENGHT_UNITS * 0.5}rem`,
        content: "",
        display: "block",
        height: "100%",
        position: "absolute",
        transform: "scaleY(0)",
        transformOrigin: "top",
        transition: "transform 1s cubic-bezier(0.33, 1.31, 0.61, -0.24)",
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
    transition: "rotate .3s ease-in-out",
    width: `${CONTAINER_LENGHT_UNITS * 0.4}rem`,
    zIndex: 12,

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
