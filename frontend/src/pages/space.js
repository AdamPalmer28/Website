import * as three from "three";
import { Canvas } from "@react-three/fiber";

import DrawObject from "../components/space3d/planets";
import DrawPlane from "../components/space3d/draw_plane";
import Box from "../components/space3d/demo";

import "../css/space.css";

const Space = () => {
  return (
    <div className="space">
      <h1>Space</h1>
      <div className="" style={{ width: "100vw", height: "80vh" }}>
        <Canvas className="bg-dark">
          <ambientLight />

          <pointLight position={[0, 4, 0]} />
          <pointLight position={[4, 0, 0]} />
          <pointLight position={[0, 0, 4]} />
          <pointLight position={[3, 3, 3]} />


            <DrawObject />
          
        </Canvas>
      </div>

      <body className="space-placeholder">
        <DrawPlane />
      </body>
    </div>
  );
};



export default Space;
