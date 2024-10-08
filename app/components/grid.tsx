import { useEffect, useState } from "react";
import { Dialog, DialogPanel } from '@headlessui/react';
import LabelItem from "./label-item";
import { TravelAmuletProjectCard, GameRecommendCard, PhysicsProjectCard, HorrorGameProjectCard, FightingGameProjectCard, ScienceProjectCard, MaterialProjectCard, MendPathProjectCard, PrototypeGameCard, SpiritBoxGameCard } from "./project-cards";
export default function GridComponent(){
    const [open, setOpen] = useState(false);
    const [area, setArea] = useState(0);
    const areas = ["Graphics Programming", "Full Stack Development", "Game Development", "AI/ML"];
    const [sizeMedium, setSizeMedium] = useState(true);
    useEffect(()=>{
        if(window.innerHeight < 768) setSizeMedium(false);
    }, [])

    const areaProjects = [
        (<div>
            <MaterialProjectCard />
            <PhysicsProjectCard />
        </div>),
        (<div>
            <TravelAmuletProjectCard />
            <MendPathProjectCard />
            <GameRecommendCard />
        </div>),
        (<div>
            <HorrorGameProjectCard />
            <PrototypeGameCard />
            <SpiritBoxGameCard />
            <FightingGameProjectCard />
        </div>),
        (<div>
            <ScienceProjectCard />
        </div>)
    ];
    return(
        <div>
            <Dialog open={open} onClose={setOpen} className="relative z-50">
                <div className="fixed inset-0 w-screen overflow-y-auto">
                    <div className="flex min-h-full items-center justify-center p-4 text-center sm:p-0">
                        <DialogPanel 
                            transition
                            className="relative transform overflow-hidden rounded-lg pt-3 bg-white text-left shadow-xl transition-all data-[closed]:translate-y-4 data-[closed]:opacity-0 data-[enter]:duration-300 data-[leave]:duration-200 data-[enter]:ease-out data-[leave]:ease-in sm:my-8 sm:w-full sm:max-w-lg data-[closed]:sm:translate-y-0 data-[closed]:sm:scale-95 z-100"
                        >
                            <div className="flex items-center justify-between">
                                <div className="ml-8"></div>
                                <LabelItem label={areas[area]} />
                                <button className="mr-8 hover:mr-7 transition-all :ease-in :ease-out" onClick={()=>{setOpen(false)}}>
                                    <svg xmlns="http://www.w3.org/2000/svg" height={24} viewBox="0 -960 960 960" className="hover:h-8 transition-all :ease-in :ease-out" fill="e8eaed">
                                    <path d="m256-200-56-56 224-224-224-224 56-56 224 224 224-224 56 56-224 224 224 224-56 56-224-224-224 224Z" />
                                    </svg>
                                </button>
                            </div>
                                {areaProjects[area]}
                        </DialogPanel>
                    </div>
                </div>
            </Dialog>
            <div className="flex justify-center ml-5 mr-5">
            <div className="grid md:grid-cols-2 max-w-7xl text-base text-center bg-blue-100 shadow-lg font-bold gap-1 mb-16">
                <button onClick={()=>{
                    setArea(0);
                    setOpen(true);
                }} className="bg-blue-50 z-8 hover:bg-white hover:shadow-lg hover:z-20 transition duration-100 ease-in-out p-8 rounded border border-blue-300">
                    <div className="flex justify-center space-x-5 pb-5 pt-5">
                    <img src="./javascript-color.svg" width={50} /> 
                     <img src="./webgl-color.svg" width={50} /> 
                     <img src="./cplusplus-color.svg" width={50} /> 
                     <img src="./opengl-color.svg" width={50} /> 
                    </div>
                   
                    Graphics Programming
                </button>
                <button onClick={()=>{
                    setArea(1);
                    setOpen(true);
                }} className="bg-blue-50 z-8 hover:bg-white hover:shadow-lg hover:z-20 transition duration-100 ease-in-out p-8 rounded border border-blue-300">
                    <div className="flex justify-center space-x-5 pb-5 pt-5">
                     <img src="./nextdotjs-color.svg" width={50} /> 
                     <img src="./react-color.svg" width={50} /> 
                     <img src="./mysql-color.svg" width={50} /> 
                     <img src="./amazonwebservices-color.svg" width={50} /> 
                    </div>
                    Full Stack Development
                </button>
                <button onClick={()=>{
                    setArea(2);
                    setOpen(true);
                }} className="bg-blue-50 z-8 hover:bg-white hover:shadow-lg hover:z-20 transition duration-100 ease-in-out p-8 rounded border border-blue-300">
                    <div className="flex justify-center  space-x-5 pb-5 pt-5">
                     <img src="./cplusplus-color.svg" width={50} /> 
                     <img src="./unrealengine-color.svg" width={50} /> 
                     <img src="./csharp.svg" width={45} /> 
                     <img src="./unity-color.svg" width={50} /> 
                    </div>
                    Game Development
                </button>
                <button onClick={()=>{
                    setArea(3);
                    setOpen(true);
                }} className="bg-blue-50 z-8 hover:bg-white hover:shadow-lg hover:z-20 transition duration-100 ease-in-out p-8 rounded border border-blue-300">
                    <div className="flex justify-center  space-x-5 pb-5 pt-5">
                    <img src="./python-color.svg" width={50} /> 
                     <img src="./tensorflow-color.svg" width={50} /> 
                    </div>
                    AI/ML
                </button>
            </div>
            </div>
           
        </div>
       
    );
}
