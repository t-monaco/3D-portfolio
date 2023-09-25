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

export const ParallaxViewChildContainer = style({
    width: "300px",
    height: "400px",
    position: "relative",
    maxHeight: "90vh",
    margin: "20px",
    background: "white",
    overflow: "hidden",
});

export const ParallaxTitle = style({
    margin: "0",
    color: "var(--accent)",
    right: "1rem",
    fontSize: "56px",
    fontWeight: "700",
    letterSpacing: "-3px",
    lineHeight: "1.2",
    position: "absolute",
});
