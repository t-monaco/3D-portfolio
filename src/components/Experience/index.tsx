import { Reveal, Tech } from "..";
import { default as Waves } from "../../assets/waves-exp.svg";

type ExperienceProps = object;

const Experience: React.FC<ExperienceProps> = () => {
    return (
        <div id="experience" className="my-section">
            <div className="common-content">
                <Reveal>
                    <h3 className="common-title">Experience</h3>
                </Reveal>
                <Reveal>
                    <div className="text-container">
                        <p>
                            In my most recent role, I led UX analysis for a
                            diverse array of client webpages, a task that
                            demanded a keen eye for user experience
                            optimization. My notable achievement involved
                            spearheading the redesign of a critical application.
                            I crafted a robust React component library from
                            scratch and seamlessly integrated it with a new API,
                            empowering data-driven components. Additionally, I
                            successfully managed deployment pipelines and
                            environments, ensuring smooth project delivery.
                        </p>
                        <p>
                            Prior to that, I executed both frontend and backend
                            business logic, showcasing versatility in my
                            technical skills. My responsibilities spanned data
                            manipulation, dynamic visualization, and effective
                            web content management. I also demonstrated
                            proficiency in email marketing and automation,
                            further expanding my skill set.
                        </p>

                        <p>
                            In a previous role, I significantly enhanced payroll
                            process efficiency through the implementation of
                            automation. This involved data preprocessing,
                            intricate manipulation, and creating insightful
                            visualizations, ultimately streamlining critical
                            financial processes.
                        </p>
                    </div>
                </Reveal>
            </div>
            <Tech />
            <img
                src={Waves}
                alt="waves"
                className="block absolute  bottom-0 left-0 -z-10"
            />
        </div>
    );
};

export default Experience;
