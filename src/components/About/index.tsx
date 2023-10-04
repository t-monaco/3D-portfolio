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
                            Hey there, I'm <b className="text-xl">Tomas</b>. I'm
                            not your run-of-the-mill developer. I'm passionate
                            about bringing innovative concepts to life through
                            code.
                        </p>
                        <p>
                            My journey in the world of tech has equipped me with
                            a diverse set of skills across various programming
                            languages and frameworks. Whether it's unraveling
                            complex challenges or crafting elegant solutions, I
                            thrive on the art of creation.
                        </p>
                        <p>
                            But what truly sets me apart is my unwavering
                            determination. When I'm involved in a project, I go
                            full throttle, pushing boundaries and embracing
                            challenges with gusto. While I have a deep-rooted
                            love for data-driven projects and a fascination with
                            the ever-evolving landscape of machine learning.
                        </p>
                        <p>
                            I'm not just seeking opportunities; I'm on the
                            lookout for purpose-driven collaborations that allow
                            both personal and collective growth.
                        </p>
                        <p>
                            Join me on this exciting adventure where we turn
                            ideas into remarkable digital experiences. Let's
                            make a difference together.
                        </p>
                    </div>
                </Reveal>
            </div>
        </div>
    );
};

export default About;
