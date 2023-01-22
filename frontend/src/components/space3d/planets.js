import React, { useRef, useState, Suspense } from 'react';
import { useFrame, useLoader} from '@react-three/fiber';
import { TextureLoader } from 'three/src/loaders/TextureLoader'
import { useTexture } from "@react-three/drei"

//import * as three from "three";


const DrawObject = (props) => {
    // This reference will give us direct access to the mesh
    const mesh = useRef()

    // Set up state for the hovered and active state
    const [hovered, setHover] = useState(false)
    const [active, setActive] = useState(false)

    // Subscribe this component to the render-loop, rotate the mesh every frame
    useFrame((state, delta) => (mesh.current.rotation.y += delta))

    // Return view, these are regular three.js elements expressed in JSX


    // const [day_texture, night_texture] = useTexture(
    //     ['www.solarsystemscope.com/textures/download/2k_earth_daymap.jpg',
    //     'www.solarsystemscope.com/textures/download/2k_earth_nightmap.jpg']);
    const url = 'hhttps://www.solarsystemscope.com/textures/download/2k_earth_daymap.jpg'
    const day_texture = useTexture(url);
    

    return (
    <Suspense fallback={<div>loading</div>}>
        <mesh
            {...props}
            ref={mesh}
            scale={active ? 0.5 : 1}

            onClick={(event) => setActive(!active)}
            onPointerOver={(event) => setHover(true)}
            onPointerOut={(event) => setHover(false)}>


            <sphereGeometry args={[3, 32, 32]} position={[0,0,0]} />
            <meshStandardMaterial map={day_texture}/>
        </mesh>
    </Suspense>
    )
}

export default DrawObject

