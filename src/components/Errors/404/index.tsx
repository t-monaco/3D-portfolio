import { Link } from "react-router-dom";
import { default as Robot404 } from "../../../assets/robot-pana-004.svg";
import { BasicButton } from "../..";

type Error404Props = object;

const Error404: React.FC<Error404Props> = () => {
    return (
        <div className="relative z-0 min-h-screen overflow-hidden my-section flex flex-col w-screen h-screen bg-[#242431] text-white items-center justify-center gap-8 p-4">
            <img className="md:w-1/3" src={Robot404} />
            <div className="flex flex-col gap-4 items-center">
                <h2 className="font-semibold text-3xl">Page not found...</h2>
                <BasicButton className="md:w-full">
                    <Link to="/">Take me Home</Link>
                </BasicButton>
            </div>
        </div>
    );
};

export default Error404;
