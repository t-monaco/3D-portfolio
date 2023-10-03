import { Reveal } from "..";
import { default as Waves } from "../../assets/waves-about.svg";

type AboutProps = object;

const About: React.FC<AboutProps> = () => {
    return (
        <div id="about" className="my-section">
            <img
                src={Waves}
                alt="waves"
                className="block absolute  inset-0 -z-10"
            />
            <div className={`common-content`}>
                <Reveal>
                    <h3 className="common-title">About Me</h3>
                </Reveal>
                <Reveal>
                    <div className={`text-container`}>
                        <p>
                            I'm a software engineer, Lorem ipsum, dolor sit amet
                            consectetur adipisicing elit. Odio ullam incidunt
                            architecto harum amet.
                        </p>
                        <p>
                            Expedita delectus quis impedit quia, quae totam
                            perspiciatis, recusandae laudantium maiores officiis
                            quod velit omnis aut.
                        </p>
                        <p>
                            Expedita delectus quis impedit quia, quae totam
                            perspiciatis, recusandae laudantium maiores officiis
                            quod velit omnis aut.
                        </p>
                    </div>
                </Reveal>
            </div>
        </div>
    );
};

export default About;
