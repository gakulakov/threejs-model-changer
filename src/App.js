import './App.css';
import { Canvas } from "@react-three/fiber";
import {Environment, OrbitControls,} from "@react-three/drei";
import {Suspense, useState} from "react";
import {Model} from "./components/Models/Model";
import perfectKitchen from './assets/gltfFormay/kitchen_vr_blend.gltf'
import secondKitchen from './assets/gltfFormay/Kitchen.gltf'
import room from './assets/gltfFormay/Kaluzhskaya.gltf'
import office from './assets/gltfFormay/uploads_files_3020219_Interior11.gltf'
import previewOne from './assets/1.jpg'

function App() {

    const [change, setChange] = useState(null)


    const changeHandler = (file) => {
        const changePromise = new Promise(res => {
            setChange(null)
            res('Done')
        })

        changePromise.then(res => setChange(file))
    }

  return (
    <div className={'main'}>
        <div className={'select-panel'}>

            <div className={'item'} onClick={() => changeHandler(room)}>
                <img className={'img'} height={100} width={100} src={previewOne} alt="image"/>

            </div>
            <div className={'item'} onClick={() => changeHandler(perfectKitchen)}>
                <img className={'img'} width={100} height={100} src="https://static.turbosquid.com/Preview/2020/08/25__08_04_43/A.jpgB166792E-E4A6-4601-9CD7-91FF77A145B2Zoom.jpg" alt="image"/>

            </div>
            <div className={'item'} onClick={() => changeHandler(secondKitchen)}>
                <img className={'img'} width={100} height={100} src="https://img2.cgtrader.com/items/2933907/4db8e340db/aarchvis-kitchen-blender-render-3d-model-blend.jpg" alt="image"/>
            </div>
            <div className={'item'} onClick={() => changeHandler(office)}>
                <img className={'img'} width={100} src="https://img1.cgtrader.com/items/3020219/419a4ce19c/large/blender-cycles-conference-room-scene-3d-model-blend.jpg" alt="image"/>
            </div>
        </div>
        <div className="App">
      <Canvas>
          <Suspense fallback={null}>
              <OrbitControls />
              {/*<PointerLockControls />*/}
              {/*<FlyControls autoForward={false} dragToLook={false} movementSpeed={1.0} rollSpeed={0.005} />*/}
              {/*<ModelFbx />*/}
              {change && <Model change={change} />}
              <ambientLight intensity={0.5} />
              {/*<spotLight position={[10, 15, 10]} angle={0.3} />*/}
              <Environment preset="warehouse" background />
          </Suspense>
      </Canvas>
        </div>
    </div>
  );
}

export default App;
