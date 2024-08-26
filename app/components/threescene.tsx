'use client';
import { useRef, useEffect, useState, use } from 'react';
import * as THREE from 'three';
import { Canvas, useFrame, useThree } from '@react-three/fiber';
import { useGLTF } from '@react-three/drei';

const PlaneModel = () =>{
    const gltf = useGLTF('/plane.glb');
    const ref = useRef<THREE.Group>(null);
    useEffect(()=>{
        if(ref.current){
            ref.current.rotation.x = -180 * Math.PI / 180;
            ref.current.rotation.y = 135 * Math.PI / 180;
            ref.current.rotation.z = 190 * Math.PI / 180;
            let size = 1.0
            if(/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent))
            {
                ref.current.position.x = 0.5;
                ref.current.position.y = -7.75;
                ref.current.position.z = 1.3;
                size = .025;
            }
            else{
                ref.current.position.x = 3;
                ref.current.position.y = -7;
                ref.current.position.z = 0;
                size = .15;
            }
            ref.current.scale.x = size;
            ref.current.scale.y = size;
            ref.current.scale.z = size;
        }
    }, []);
    useFrame(({clock})=>{
        const a = clock.getElapsedTime();
        if(ref.current){
            ref.current.rotation.x = (-180) * Math.PI / 180;
            ref.current.rotation.z = (190+Math.sin(a))*Math.PI/180;
            ref.current.rotation.y = (135+Math.cos(a))*Math.PI/180 ;
        }
    })
    return <primitive object={gltf.scene} ref={ref} />;
};
useGLTF.preload('plane.glb');

const KeyboardModel = () => {
    const gltf = useGLTF('/keyboard.glb');
    const ref = useRef<THREE.Group>(null);

    useEffect(() => {
        if (ref.current) {
            ref.current.rotation.x = -40 * Math.PI / 180;
            ref.current.rotation.y = -40 * Math.PI / 180;
            ref.current.rotation.z = 180 * Math.PI / 180;
            if(/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent))
                {
                    ref.current.position.x = 0.6;
                    ref.current.position.y = -1.0;
                    ref.current.position.z = 2;
                    let size = 0.4;
                    ref.current.scale.x = size;
                    ref.current.scale.y = size;
                    ref.current.scale.z = size;
                }
            else{
                ref.current.position.x = 2.6;
                ref.current.position.y = -0.5;
                ref.current.position.z = 0;
            }
        }
    }, []);
    useFrame(({clock})=>{
        const a = clock.getElapsedTime();
        if(ref.current){
            ref.current.rotation.z = (180+(Math.cos(0.5 * a)))*Math.PI/180;
            ref.current.rotation.y = (-40+(Math.sin(1.0 * a)))*Math.PI/180;
            ref.current.rotation.x = (-40+(Math.cos(0.7 * a)))*Math.PI/180;
        }
    })

    return <primitive object={gltf.scene} ref={ref} />;
};
useGLTF.preload('/keyboard.glb');

const MonitorModel = () => {
    const gltf = useGLTF('/monitor.glb');
    const ref = useRef<THREE.Group>(null);
    const [onMobile, setOnMobile] = useState(false);
    useEffect(() => {
        if (ref.current) {
            ref.current.rotation.x = -90 * Math.PI / 180;
            ref.current.rotation.y = 5 * Math.PI / 180;
            ref.current.rotation.z = 45 * Math.PI / 180;
            let size=1.0;
            if(/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent))
                {
                    ref.current.position.x = -0.40;
                    ref.current.position.y = -2;
                    ref.current.position.z = 2;
                    size = .2;
                }
            else{
                ref.current.position.x = -3.40;
                ref.current.position.y = -0.8;
                ref.current.position.z = -1;
                size = .6;
            }
            ref.current.scale.x = size;
            ref.current.scale.y = size;
            ref.current.scale.z = size;
        }
      }, []);
    useFrame(({clock})=>{
        const a = clock.getElapsedTime();
        if(ref.current){
            ref.current.rotation.z = (45+(Math.sin(1.0 *a)))*Math.PI/180;
            ref.current.rotation.y = (5+(Math.cos(1.0 * a)))*Math.PI/180;
            ref.current.rotation.x = (-90+(Math.cos(0.5 * a)))*Math.PI/180;
        }
    })
    return <primitive object={gltf.scene} ref={ref} />;
};
useGLTF.preload('/monitor.glb');

const SphereModel = () => {
    const geometry = new THREE.SphereGeometry(0.5,32,16);
    const material = new THREE.MeshStandardMaterial({color:0xb21212});
    const sphere = new THREE.Mesh(geometry, material);
    const ref = useRef<THREE.Group>(null);
    useEffect(() => {
        if (ref.current) {
            ref.current.rotation.x = -90 * Math.PI / 180;
            ref.current.rotation.y = 5 * Math.PI / 180;
            ref.current.rotation.z = 75 * Math.PI / 180;
            let size = 1.0
            if(/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent))
            {
                ref.current.position.x = 0.7;
                ref.current.position.y = -11.7;
                ref.current.position.z = 1;
                size=0.25;
            }
            else{
                ref.current.position.x = 3.3;
                ref.current.position.y = -8.7;
                ref.current.position.z = -1;
            }
            ref.current.scale.x = size;
            ref.current.scale.y = size;
            ref.current.scale.z = size;
        }
      }, []);
    return <primitive object={sphere} ref={ref} />
};

const SCPModel = () => {
    const gltf = useGLTF('/049.glb');
    const ref = useRef<THREE.Group>(null);
    useEffect(() => {
        if (ref.current) {
            ref.current.rotation.x = 90 * Math.PI / 180;
            ref.current.rotation.y = 180 * Math.PI / 180;
            ref.current.rotation.z = 215 * Math.PI / 180;
            let size = 1.0;
            if(/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent))
            {
                ref.current.position.x = -0.7;
                ref.current.position.y = -14;
                ref.current.position.z = 1;
                size = .05;
            }
            else{
                ref.current.position.x = -3;
                ref.current.position.y = -11;
                ref.current.position.z = 0;
                size = .2;
            }
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
            ref.current.rotation.x = 80 * Math.PI / 180;
            ref.current.rotation.y = 170 * Math.PI / 180;
            ref.current.rotation.z = -50 * Math.PI / 180;
            let size = 1.0;
            if(/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent))
            {
                ref.current.position.x = 0.7;
                ref.current.position.y = -18.7;
                ref.current.position.z = 1.0;
                size = 1.0;
            }
            else{
                ref.current.position.x = 2.3;
                ref.current.position.y = -12.7;
                ref.current.position.z = 0;
                size = 2.0;
            }
            ref.current.scale.x = size;
            ref.current.scale.y = size;
            ref.current.scale.z = size;
        }
      }, []);
    return <primitive object={gltf.scene} ref={ref} />;
};
useGLTF.preload('/knight.glb');

const TravelAmulet = () => {
    const gltf = useGLTF('/travelamulet.glb');
    const ref = useRef<THREE.Group>(null);
    useEffect(() => {
        if (ref.current) {
            ref.current.rotation.x = 80 * Math.PI / 180;
            ref.current.rotation.y = 10 * Math.PI / 180;
            ref.current.rotation.z = -10 * Math.PI / 180;
            let size = 1.0;
            if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|BB|PlayBook|IEMobile|Windows Phone|Kindle|Silk|Opera Mini/i.test(navigator.userAgent)) {
                ref.current.position.x = -0.9;
                ref.current.position.y = -9;
                ref.current.position.z = 0;
                size = .25;
            }
            else{
                ref.current.position.x = -2.8;
                ref.current.position.y = -7;
                ref.current.position.z = 0;
                size = .6;
            }
            ref.current.scale.x = size;
            ref.current.scale.y = size;
            ref.current.scale.z = size;
        }
      }, []);
    return <primitive object={gltf.scene} ref={ref} />;
};
useGLTF.preload('/travelamulet.glb');

const CameraController = () => {
    const {camera} = useThree();
    const [scrollY, setScrollY] = useState(0);
    useEffect(()=>{
        const handleScroll = () => {
            setScrollY(window.scrollY * window.innerHeight / 900);
        };
        window.addEventListener('scroll', handleScroll);
        return ()=>{window.removeEventListener('scroll', handleScroll);};
    }, []);
    useFrame(()=>{
        if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|BB|PlayBook|IEMobile|Windows Phone|Kindle|Silk|Opera Mini/i.test(navigator.userAgent)) {
            camera.position.y = -scrollY / 230;
        }
        else camera.position.y = -scrollY / 200;
        camera.updateProjectionMatrix();
    });
    return null;
};

const Scene = () => {
    const [onMobile, setOnMobile] = useState(false);
    useEffect(()=>{
        if(/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent))
            setOnMobile(true);
    })
    return (
        <Canvas camera={{ position: [0, 0, 5], fov: 50 }}>
        <ambientLight intensity={0.1} />
        {!onMobile&&
            <pointLight position={[2, 3, 0]} intensity={40} color={'#9999ff'} />
        }
        {!onMobile &&
            <pointLight position={[-3, 0, -3]} intensity={5} color={'#ffffff'}/>
        }
        {onMobile&&
            <pointLight position={[1.5, 1, 3]} intensity={40} color={'#9999ff'} />
        }
        {onMobile &&
            <pointLight position={[-3, 0, 3]} intensity={5} color={'#ffffff'}/>
        }
        <KeyboardModel />
        <MonitorModel />
        <PlaneModel />
        <TravelAmulet />
        <SphereModel />
        <SCPModel />
        <Knight />
        <pointLight position={[2, -5, 2]} intensity={60} color={'#ffffff'} />
        {!onMobile &&
            <pointLight position={[-2, -8, 0]} intensity={80} color={'#aaaaff'} />
        }
        {onMobile &&
            <pointLight position={[0, -15, 2]} intensity={80} color={'#aaaaff'} />
        }
        <pointLight position={[1.5, -12, 4]} intensity={80} color={'#aaaaff'} />
        <CameraController />
        </Canvas>
    );
};
export default Scene;