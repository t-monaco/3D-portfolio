import { style } from "@vanilla-extract/css";

export const ParallaxViewSection = style({
    height: "100vh",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    position: "relative",
    scrollSnapAlign: "center",
    perspective: "500px",
});

export const ParallaxViewChildContainer = style({});
