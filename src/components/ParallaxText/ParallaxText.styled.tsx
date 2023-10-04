import { motion } from "framer-motion";
import styled from "styled-components";
import { breakpoints } from "../../styles";

export const ParallaxTextContainer = styled.div<object>`
    display: flex;
    flex-wrap: nowrap;
    letter-spacing: -2px;
    line-height: 0.8;
    margin: 0;
    overflow: hidden;
    white-space: nowrap;
`;

export const TextScroll = styled(motion.div)`
    font-weight: 400;
    font-size: 8rem;
    display: flex;
    white-space: nowrap;
    flex-wrap: nowrap;

    @media screen and (min-width: ${breakpoints.md}) {
        font-size: 12rem;
    }
`;
