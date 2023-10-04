import { Reveal } from "..";
import ParallaxText from "../ParallaxText";
import * as Styled from "./Main.styled";
import { default as Waves } from "../../assets/waves-main.svg";

type MainProps = object;

const Main: React.FC<MainProps> = () => {
    return (
        <Styled.MainContainer id="home">
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
            <img
                src={Waves}
                alt="waves"
                className="block absolute  bottom-0 left-0 -z-10"
            />
        </Styled.MainContainer>
    );
};

export default Main;
