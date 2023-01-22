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
    //     ['https://www.solarsystemscope.com/textures/download/2k_earth_daymap.jpg',
    //     'https://www.solarsystemscope.com/textures/download/2k_earth_nightmap.jpg']);

    const demo = useTexture('https://upload.wikimedia.org/wikipedia/commons/9/97/The_Earth_seen_from_Apollo_17.jpg');


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
            <meshStandardMaterial map={demo}/>
        </mesh>
    </Suspense>
    )
}

export default DrawObject

