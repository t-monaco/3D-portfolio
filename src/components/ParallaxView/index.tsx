import { motion, useScroll } from "framer-motion";
import { PropsWithChildren, useRef } from "react";
import { useParallax } from "../../hooks/useParallax";
import { ParallaxViewSection } from "./parallaxView.css";

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
    const y = useParallax(scrollYProgress, 300);

    return (
        <section
            id={`${id}`}
            className={`min-h-screen w-full bg-red-400 ${ParallaxViewSection}`}
        >
            <div ref={ref}>{props.children}</div>
            {title && <motion.h2 style={{ y }}>{`ABOUT`}</motion.h2>}
        </section>
    );
};

export default ParallaxView;
