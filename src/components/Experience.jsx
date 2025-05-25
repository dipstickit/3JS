import { Environment, OrbitControls } from "@react-three/drei";
import { Book } from "./Book";
export const Experience = () => {
  return (
    <>
      <group>
        <Book />
      </group>
      <OrbitControls />
      <Environment preset="studio"></Environment>
    </>
  );
};
