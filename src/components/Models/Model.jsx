import React from "react";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";
import { useLoader } from "@react-three/fiber";


export const Model = ({change}) => {
    const gltf = useLoader(GLTFLoader, change);

    console.log(gltf)


    return (
        <>
            <primitive position={[0, 0, 0]} object={gltf.scene} scale={1} />
        </>
    );
}