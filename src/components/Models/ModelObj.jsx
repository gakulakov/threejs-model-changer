// import React from "react";
// import { useLoader } from "@react-three/fiber";
// import * as THREE from "three";
// import {MTLLoader} from "three/examples/jsm/loaders/MTLLoader";
// import {OBJLoader} from "three/examples/jsm/loaders/OBJLoader";
// import { DDSLoader } from "three-stdlib";
// THREE.DefaultLoadingManager.addHandler(/\.dds$/i, new DDSLoader());
//
// export const ModelObj = (props) => {
//     const materials = useLoader(MTLLoader, ferrariMtl);
//     const obj = useLoader(OBJLoader, ferrari, (loader) => {
//         materials.preload();
//         loader.setMaterials(materials);
//     });
//
//     console.log(obj);
//
//
//     return <primitive object={obj} scale={0.4} />;
// }