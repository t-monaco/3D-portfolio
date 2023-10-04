import { motion, useAnimation, useInView } from "framer-motion";
import { PropsWithChildren, useEffect, useRef } from "react";

type RevealProps = object;

const Reveal: React.FC<PropsWithChildren<RevealProps>> = ({ children }) => {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true });

    const mainControls = useAnimation();

    useEffect(() => {
        if (isInView) {
            mainControls.start("visible");
        }
    }, [isInView]);

    return (
        <div ref={ref}>
            <motion.div
                variants={{
                    hidden: { opacity: 0, y: 75 },
                    visible: { opacity: 1, y: 0 },
                }}
                initial="hidden"
                animate={mainControls}
                transition={{ duration: 0.5, delay: 0.2 }}
            >
                {children}
            </motion.div>
        </div>
    );
};

export default Reveal;
