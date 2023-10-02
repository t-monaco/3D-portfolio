import { Reveal } from "..";
import ParallaxText from "../ParallaxText";
import * as Styled from "./Main.styled";

type MainProps = object;

const Main: React.FC<MainProps> = () => {
    return (
        <div
            className={`w-scree h-screen bg-main-solid bg-cover bg-bottom -z-10 relative overflow-hidden flex flex-col justify-end`}
            id="home"
        >
            <Reveal>
                <Styled.ProfessionContainer id="profession">
                    <h2 className="flex flex-col">
                        <span>Software Engineer</span>
                        <span>Data Nerd & Drone Pilot</span>
                    </h2>
                </Styled.ProfessionContainer>
            </Reveal>
            <Styled.ScrollTextContainer
                id="big-name"
                className={`lg:font-light`}
            >
                <ParallaxText baseVelocity={-3}>Tomas Monaco</ParallaxText>
            </Styled.ScrollTextContainer>
        </div>
    );
};

export default Main;
