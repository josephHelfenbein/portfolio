'use client';
import { useRef, useEffect } from 'react';
import * as THREE from 'three';
import {Canvas, useFrame} from '@react-three/fiber';
import { useGLTF } from '@react-three/drei';

const KeyboardModel = () => {
    const gltf = useGLTF('/keyboard.glb');
    const ref = useRef<THREE.Group>(null);

    useEffect(() => {
    if (ref.current) {
      ref.current.rotation.x = -40 * Math.PI / 180;
      ref.current.rotation.y = -40 * Math.PI / 180;
      ref.current.rotation.z = 180 * Math.PI / 180;
      ref.current.position.x = 1.6;
      ref.current.position.y = 0;
      ref.current.position.z = 0;
    }
  }, []);

    return <primitive object={gltf.scene} ref={ref} />;
};
useGLTF.preload('/keyboard.glb');

const MonitorModel = () => {
    const gltf = useGLTF('/monitor.glb');
    const ref = useRef<THREE.Group>(null);
    useEffect(() => {
        if (ref.current) {
            ref.current.rotation.x = -90 * Math.PI / 180;
            ref.current.rotation.y = 5 * Math.PI / 180;
            ref.current.rotation.z = 75 * Math.PI / 180;
            ref.current.position.x = -5.40;
            ref.current.position.y = 0;
            ref.current.position.z = -3;
        }
      }, []);
    return <primitive object={gltf.scene} ref={ref} />;
};
useGLTF.preload('/monitor.glb');


const ThreeScene = () => {
return (
    <Canvas camera={{ position: [0, 0, 5], fov: 50 }}>
    <ambientLight intensity={0.2} />
    <pointLight position={[0, 6, 0]} intensity={70} color={'#aaaaff'} />
    <pointLight position={[-4, 3.5, -3]} intensity={10} color={'#aaffaa'}/>
    <KeyboardModel />
    <MonitorModel />
    </Canvas>
);
};

export default ThreeScene;