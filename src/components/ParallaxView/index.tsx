import { motion, useScroll } from "framer-motion";
import { PropsWithChildren, useRef } from "react";
import { useParallax } from "../../hooks/useParallax";
import {
    ParallaxTitle,
    ParallaxViewChildContainer,
    ParallaxViewSection,
} from "./parallaxView.css";

type ParallaxViewProps = {
    id: number;
    title?: string;
};

const ParallaxView: React.FC<PropsWithChildren<ParallaxViewProps>> = ({
    id,
    title,
    ...props
}) => {
    const ref = useRef(null);
    const { scrollYProgress } = useScroll({ target: ref });
    const y = useParallax(scrollYProgress, 500);

    return (
        <section id={`${id}`} className={`bg-red-400 ${ParallaxViewSection}`}>
            <div ref={ref} className={`${ParallaxViewChildContainer}`}>
                {props.children}
            </div>
            {title && (
                <motion.h2 style={{ y }} className={`${ParallaxTitle}`}>
                    {title}
                </motion.h2>
            )}
        </section>
    );
};

export default ParallaxView;
