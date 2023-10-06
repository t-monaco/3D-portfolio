import { Decal, Float, useTexture } from "@react-three/drei";

type SphereProps = { imgUrl: string };

const Sphere: React.FC<SphereProps> = ({ imgUrl }) => {
    const [decal] = useTexture([imgUrl]);

    return (
        <Float speed={1.75} rotationIntensity={1} floatIntensity={2}>
            <ambientLight intensity={0.5} />
            <directionalLight position={[0, 0, 0.1]} />
            <mesh scale={2.2} castShadow receiveShadow>
                <sphereGeometry args={[1, 32]} />
                <meshStandardMaterial
                    color={"#7077ff"}
                    polygonOffset
                    polygonOffsetFactor={-5}
                    flatShading
                />
                <Decal
                    position={[0, 0, 1]}
                    rotation={[2 * Math.PI, 0, 6.25]}
                    map={decal}
                />
            </mesh>
        </Float>
    );
};
export default Sphere;
