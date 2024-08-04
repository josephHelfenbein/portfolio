'use client';
import { Suspense, useRef, useEffect, useState } from 'react';
import * as THREE from 'three';
import { Canvas, useFrame, useThree } from '@react-three/fiber';
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

const CubeModel = () => {
    const geometry = new THREE.BoxGeometry(1,1,1);
    const material = new THREE.MeshStandardMaterial({color:0xff0000});
    const cube = new THREE.Mesh(geometry, material);
    const ref = useRef<THREE.Group>(null);
    useEffect(() => {
        if (ref.current) {
            ref.current.rotation.x = -90 * Math.PI / 180;
            ref.current.rotation.y = 5 * Math.PI / 180;
            ref.current.rotation.z = 75 * Math.PI / 180;
            ref.current.position.x = 0;
            ref.current.position.y = -5;
            ref.current.position.z = -4;
        }
      }, []);
    return <primitive object={cube} ref={ref} />
}

const SCPModel = () => {
    const gltf = useGLTF('/049.glb');
    const ref = useRef<THREE.Group>(null);
    useEffect(() => {
        if (ref.current) {
            ref.current.rotation.x = 90 * Math.PI / 180;
            ref.current.rotation.y = 180 * Math.PI / 180;
            ref.current.rotation.z = 180 * Math.PI / 180;
            ref.current.position.x = 0;
            ref.current.position.y = -10;
            ref.current.position.z = -5;
            const size = .3;
            ref.current.scale.x = size;
            ref.current.scale.y = size;
            ref.current.scale.z = size;
        }
      }, []);
    return <primitive object={gltf.scene} ref={ref} />;
};
useGLTF.preload('/049.glb');

const Knight = () => {
    const gltf = useGLTF('/knight.glb');
    const ref = useRef<THREE.Group>(null);
    useEffect(() => {
        if (ref.current) {
            ref.current.rotation.x = 90 * Math.PI / 180;
            ref.current.rotation.y = 190 * Math.PI / 180;
            ref.current.rotation.z = 30 * Math.PI / 180;
            ref.current.position.x = 0;
            ref.current.position.y = -13;
            ref.current.position.z = -4;
            const size = 4;
            ref.current.scale.x = size;
            ref.current.scale.y = size;
            ref.current.scale.z = size;
        }
      }, []);
    return <primitive object={gltf.scene} ref={ref} />;
};
useGLTF.preload('/knight.glb');

const CameraController = () => {
    const {camera} = useThree();
    const [scrollY, setScrollY] = useState(0);
    useEffect(()=>{
        const handleScroll = () => {
            setScrollY(window.scrollY);
        };
        window.addEventListener('scroll', handleScroll);
        return ()=>{window.removeEventListener('scroll', handleScroll);};
    }, []);
    useFrame(()=>{
        camera.position.y = -scrollY / 200;
        camera.updateProjectionMatrix();
    });
    return null;
};

const Scene = () => {
    return (
        <Canvas camera={{ position: [0, 0, 5], fov: 50 }}>
        <ambientLight intensity={0.2} />
        <pointLight position={[0, 6, 0]} intensity={70} color={'#aaaaff'} />
        <pointLight position={[-4, 3.5, -3]} intensity={10} color={'#aaffaa'}/>
        <KeyboardModel />
        <MonitorModel />
        <CubeModel />
        <SCPModel />
        <Knight />
        <pointLight position={[2, -7, -5]} intensity={80} color={'#aaaaff'} />
        <pointLight position={[2, -12, -5]} intensity={80} color={'#aaaaff'} />
        <CameraController />
        </Canvas>
    );
};
export default Scene;