import { style } from "@vanilla-extract/css";
import { breakpoints } from "../../styles";

export const ParallaxTextContainer = style({
    overflow: "hidden",
    letterSpacing: "-2px",
    lineHeight: 0.8,
    margin: 0,
    whiteSpace: "nowrap",
    display: "flex",
    flexWrap: "nowrap",
});

export const ParallaxTextScroller = style({
    selectors: {
        [`${ParallaxTextContainer} &`]: {
            fontWeight: 500,
            fontSize: "8rem",
            display: "flex",
            whiteSpace: "nowrap",
            flexWrap: "nowrap",
        },
    },

    "@media": {
        [`screen and (min-width: ${breakpoints.md})`]: {
            selectors: {
                [`${ParallaxTextContainer} &`]: {
                    fontWeight: 300,
                    fontSize: "12rem",
                },
            },
        },
    },
});
