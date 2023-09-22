import { style } from "@vanilla-extract/css";
import { breakpoints } from "../../../styles";

const SIDEBAR_WIDTH_MD = "32rem";

export const SidebarMenuContainer = style({
    backgroundColor: "#050816",
    borderBottomLeftRadius: "90vw 100vh",
    borderTopLeftRadius: "90vw 100vh",
    display: "flex",
    flexDirection: "column",
    height: "100vh",
    justifyContent: "space-between",
    right: 0,
    overflow: "hidden",
    overflowY: "hidden",
    padding: "8rem 1.5rem 2rem 1.5rem",
    position: "absolute",
    top: 0,
    transform: "translateX(100vw)",
    transformOrigin: "right",
    transition:
        "border-radius 1s cubic-bezier(0, 0.65, 0.95, 0.25), transform 1s cubic-bezier(0.41, 1.24, 0.92, 0.7)",
    width: "100vw",
    zIndex: 9,

    "::before": {
        backgroundColor: "#1c1d20",
        borderRadius: "100% 0% 0% 37% / 62% 0% 0% 22% ",
        content: "",
        height: "100vh",
        right: 0,
        position: "absolute",
        top: 0,
        width: "100vw",
        zIndex: -1,
    },

    selectors: {
        "&.open": {
            borderBottomLeftRadius: "0",
            borderTopLeftRadius: "0",
            transform: "translateX(0)",
        },
    },

    "@media": {
        [`screen and (min-width: ${breakpoints.md})`]: {
            padding: "8rem 6rem 5rem 6rem",
            width: SIDEBAR_WIDTH_MD,

            "::before": {
                width: SIDEBAR_WIDTH_MD,
            },
        },
    },
});

export const ListItem = style({
    position: "relative",

    "::before": {
        backgroundColor: "#fff",
        borderRadius: "50%",
        content: "",
        height: ".7rem",
        left: 0,
        position: "absolute",
        scale: 0,
        top: 0,
        transition: "scale .3s ease-out",
        translate: "-3rem calc(30px - 50%)",
        width: ".7rem",
    },

    selectors: {
        "&:hover::before": {
            scale: 1,
        },
    },
});

export const SocialLink = style({
    position: "relative",

    "::after": {
        backgroundColor: "#fff",
        bottom: "-10%",
        content: "",
        height: "1px",
        left: 0,
        position: "absolute",
        transform: "scaleX(0)",
        transition: "transform .3s ease-out",
        width: "100%",
    },

    selectors: {
        "&:hover::after": {
            transform: "scaleX(1)",
        },
    },
});