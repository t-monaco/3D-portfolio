import { SphereCanvas } from "..";
import { technologies } from "../../constants";

type TechProps = object;

const Tech: React.FC<TechProps> = () => {
    return (
        <div className="common-content mt-12">
            <div className="flex flex-row flex-wrap justify-center gap-6">
                {technologies.map(({ icon }, k) => (
                    <SphereCanvas icon={icon} key={k} />
                ))}
            </div>
        </div>
    );
};

export default Tech;
