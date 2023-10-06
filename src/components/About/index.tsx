import { Reveal } from "..";
import { default as Waves } from "../../assets/waves-about.svg";
import { about } from "./../../constants";

type AboutProps = object;

const About: React.FC<AboutProps> = () => {
    return (
        <div id="about" className="my-section">
            <img
                src={Waves}
                alt="waves"
                className="block absolute  inset-0 -z-10"
            />
            <div className={`common-content limit-width`}>
                <Reveal>
                    <h3 className="common-title">{about.title}</h3>
                </Reveal>
                <Reveal>
                    <div className={`text-container`}>
                        {about.content.map((text) => (
                            <p>{text}</p>
                        ))}
                    </div>
                </Reveal>
            </div>
        </div>
    );
};

export default About;
