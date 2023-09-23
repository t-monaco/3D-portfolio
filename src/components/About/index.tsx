import { ParallaxView } from "..";

type AboutProps = object;

const About: React.FC<AboutProps> = () => {
    return (
        <div className="text-black">
            <ParallaxView id={Math.floor(Math.random() * 100)} title="About">
                <div>
                    <h2>Esto ES un PRUEBA H@2222</h2>
                    <p>holiiiiis</p>
                </div>
            </ParallaxView>
        </div>
    );
};

export default About;
