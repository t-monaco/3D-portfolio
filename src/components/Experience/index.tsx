import { Reveal, Tech } from "..";
import { default as Waves } from "../../assets/waves-exp.svg";
import {
    VerticalTimeline,
    VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import { experiences } from "../../constants";
import { default as BlobBg } from "../../assets/blob-bg.svg";

type ExperienceCardProps = {
    experience: {
        title: string;
        company_name: string;
        iconBg: string;
        icon: string;
        date: string;
        points: string[];
    };
};

const ExperienceCard: React.FC<ExperienceCardProps> = ({ experience }) => {
    return (
        <VerticalTimelineElement
            contentStyle={{
                background: `url(${BlobBg})`,
                backgroundSize: "cover",
                color: "#fff",
                position: "relative",
            }}
            contentArrowStyle={{ borderRight: "7px solid  #363b6c" }}
            date={experience.date}
            iconStyle={{ background: experience.iconBg }}
            icon={
                <div className="flex justify-center items-center w-full h-full">
                    <img
                        src={experience.icon}
                        alt={experience.company_name}
                        className="w-[70%] h-[70%] object-contain"
                    />
                </div>
            }
        >
            {/* <img src={Wa} className="absolute inset-0 -z-0" /> */}
            <div className="relative">
                <h3 className="text-2xl font-bold">{experience.title}</h3>
                <p className="text-base font-semibold">
                    {experience.company_name}
                </p>
            </div>
            <ul className="mt-5 list-disc ml-5 space-y-2 relative">
                {experience.points.map((point, idx) => (
                    <li
                        key={`experience-point-${idx}`}
                        className="text-sm pl-1 tracking-wider"
                    >
                        {point}
                    </li>
                ))}
            </ul>
        </VerticalTimelineElement>
    );
};

type ExperienceProps = object;

const Experience: React.FC<ExperienceProps> = () => {
    return (
        <div id="experience" className="my-section">
            <div className="common-content">
                <Reveal>
                    <h2 className="common-title">Experience</h2>
                </Reveal>
                <Reveal>
                    <div className="text-container">
                        {/* <p>
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
                        </p> */}
                        <VerticalTimeline
                        // className="w-full"
                        >
                            {experiences.map((experience) => (
                                <ExperienceCard experience={experience} />
                            ))}
                        </VerticalTimeline>
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
