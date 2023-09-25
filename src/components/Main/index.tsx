import { ProfessionContainer, ScrollContainerList } from "./main.css";
import ParallaxText from "../ParallaxText";
import { Reveal } from "..";

type MainProps = object;

const Main: React.FC<MainProps> = () => {
    return (
        <div
            className={`w-scree h-screen bg-main-solid bg-cover bg-bottom -z-10 relative overflow-hidden flex flex-col justify-end`}
        >
            <Reveal>
                <section id="profession" className={`${ProfessionContainer}`}>
                    <h2 className="flex flex-col">
                        <span>Software Engineer</span>
                        <span>Data Nerd & Drone Pilot</span>
                    </h2>
                </section>
            </Reveal>
            <section
                id="big-name"
                className={`${ScrollContainerList} md:font-light`}
            >
                <ParallaxText baseVelocity={-3}>Tomas Monaco</ParallaxText>
            </section>
        </div>
    );
};

export default Main;
