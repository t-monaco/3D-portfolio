import { Reveal } from "..";
import ParallaxText from "../ParallaxText";
import * as Styled from "./Main.styled";

type MainProps = object;

const Main: React.FC<MainProps> = () => {
    return (
        <Styled.MainContainer id="home" className="my-section">
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
        </Styled.MainContainer>
    );
};

export default Main;
