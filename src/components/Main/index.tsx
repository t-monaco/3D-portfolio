import { ScrollContainerList, ScrollTextContainer } from "./main.css";

type MainProps = object;

const Main: React.FC<MainProps> = () => {
    return (
        <div
            className={`w-scree h-screen bg-bg-me bg-cover bg-bottom -z-10 relative overflow-hidden`}
        >
            <section
                id="name"
                className={`${ScrollContainerList} md:font-light`}
            >
                <div className={`${ScrollTextContainer}`}>
                    <h1 className="text-9xl md:text-[12rem]">Tomas Monaco</h1>
                    <span className="spacer text-9xl md:text-[12rem] px-4 md:px-8">
                        —
                    </span>
                </div>
                <div className={`${ScrollTextContainer}`}>
                    <h1 className="text-9xl md:text-[12rem]">Tomas Monaco</h1>
                    <span className="spacer text-9xl md:text-[12rem] px-4 md:px-8">
                        —
                    </span>
                </div>
            </section>
        </div>
    );
};

export default Main;
