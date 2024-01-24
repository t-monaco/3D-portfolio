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
        keyFeatures?: string[];
        footer?: string;
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
            {experience?.keyFeatures && (
                <div className="">
                    <p className="text-base font-semibold">Key Features:</p>
                    <ul className="mt-5 list-disc ml-5 space-y-2 relative">
                        {experience.keyFeatures.map((feature, idx) => (
                            <li
                                key={`experience-point-${idx}`}
                                className="text-sm pl-1 tracking-wider"
                            >
                                {feature}
                            </li>
                        ))}
                    </ul>
                </div>
            )}
            {experience?.footer && (
                <span className="block mt-4 text-sm font-light">
                    {experience.footer}
                </span>
            )}
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
