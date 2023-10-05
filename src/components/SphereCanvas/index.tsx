import { Canvas, useFrame, useThree } from "@react-three/fiber";
import { Suspense } from "react";
import { Vector3 } from "three";
import { Sphere } from "..";

type SphereCanvasProps = { icon: string };

const Rig = () => {
    const { camera, mouse } = useThree();
    const vec = new Vector3();

    return useFrame(() => {
        camera.position.lerp(vec.set(mouse.x, mouse.y, camera.position.z), 0.1);
        camera.lookAt(0, 0, 0);
    });
};

const SphereCanvas: React.FC<SphereCanvasProps> = ({ icon }) => {
    return (
        <div className="w-28 h-28">
            <Canvas>
                <Suspense fallback={null}>
                    <Sphere imgUrl={icon} />
                </Suspense>
                <Rig />
            </Canvas>
        </div>
    );
};

export default SphereCanvas;
