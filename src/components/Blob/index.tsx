import { motion } from "framer-motion";

type BlobProps = {
    from_path: string;
    to_path: string;
    color?: string;
};

const Blob: React.FC<BlobProps> = ({ from_path, to_path, color }) => {
    const animation = {
        from: {
            fill: color,
            d: from_path,
        },
        to: {
            d: to_path,
            fill: color,
        },
    };

    return (
        <svg
            id="visual"
            overflow="visible"
            viewBox="0 0 200 10"
            width={500}
            height={400}
            className="absolute md:bottom-0 md:left-[10rem] -z-10"
        >
            <motion.path
                variants={animation}
                initial="from"
                animate="to"
                transition={{
                    repeat: Infinity,
                    duration: 8,
                    repeatType: "reverse",
                }}
            />
        </svg>
    );
};

export default Blob;
