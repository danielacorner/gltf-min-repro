import { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import { Box, Loader } from "@react-three/drei";
import JeffBezos from "./GLTFs/JeffBezos";
import Boomerang from "./GLTFs/Boomerang";

function App() {
  return (
    <>
      <Loader />
      <Canvas style={{ height: "100vh" }} shadows>
        <Suspense fallback={null}>
          <Scene />
        </Suspense>
      </Canvas>
    </>
  );
}

export default App;

function Scene() {
  return (
    <>
      <ambientLight intensity={0.5} />
      <pointLight position={[10, 10, 10]} />
      <Box />
      {[...Array(10)].map((_, i, arr) => {
        const [x, y, z] = [i - arr.length / 2, -1, 0];
        return (
          <mesh position={[x, y, z]}>
            <JeffBezos />
          </mesh>
        );
      })}
      {[...Array(10)].map((_, i, arr) => {
        const [x, y, z] = [i - arr.length / 2, 1, 0];
        return (
          <mesh position={[x, y, z]}>
            <Boomerang />
          </mesh>
        );
      })}
    </>
  );
}
