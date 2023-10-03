import { default as Waves } from "../../assets/waves-exp.svg";

type ExperienceProps = object;

const Experience: React.FC<ExperienceProps> = () => {
    return (
        <div id="experience" className="my-section">
            <img
                src={Waves}
                alt="waves"
                className="block absolute  bottom-0 left-0 -z-10"
            />
            <div className="common-content">
                <h3 className="common-title">Experience</h3>
                <div className="text-container">
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
            </div>
        </div>
    );
};

export default Experience;
