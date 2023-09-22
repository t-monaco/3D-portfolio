import { ProfessionContainer, ScrollContainerList } from "./main.css";
import ParallaxText from "../ParallaxText";

type MainProps = object;

const Main: React.FC<MainProps> = () => {
    return (
        <div
            className={`w-scree h-screen bg-main-solid bg-cover bg-bottom -z-10 relative overflow-hidden flex flex-col justify-end`}
        >
            <section id="profession" className={`${ProfessionContainer}`}>
                <h2 className="flex flex-col">
                    <span>Software Engineer,</span>
                    <span>Data Nerd & Drone Pilot</span>
                </h2>
            </section>
            <section
                id="big-name"
                className={`${ScrollContainerList} md:font-light`}
            >
                <ParallaxText baseVelocity={-3}>Tomas Monaco</ParallaxText>

                {/* <div className={`${ScrollTextContainer} ${scrollDirection}`}>
                    <h1 className="text-9xl md:text-[12rem]">Tomas Monaco</h1>
                    <span className="spacer text-9xl md:text-[12rem] px-4 md:px-8">
                        —
                    </span>
                </div>
                <div className={`${ScrollTextContainer} ${scrollDirection}`}>
                    <h1 className="text-9xl md:text-[12rem]">Tomas Monaco</h1>
                    <span className="spacer text-9xl md:text-[12rem] px-4 md:px-8">
                        —
                    </span>
                </div> */}
            </section>
        </div>
    );
};

export default Main;
