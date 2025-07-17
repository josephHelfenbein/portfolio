import { useEffect, useState } from "react";
import LabelItem from "./label-item";
import { TravelAmuletProjectCard, GameRecommendCard, PhysicsProjectCard, HorrorGameProjectCard, FightingGameProjectCard, ScienceProjectCard, MaterialProjectCard, MendPathProjectCard, PrototypeGameCard, SpiritBoxGameCard, HelpSignalProjectCard, CerebrixProjectCard, ChamaProjectCard, PairGridProjectCard, PatSafeProjectCard, GuardianAngelProjectCard, BlazeGuardProjectCard, COFAProjectCard, FocuraProjectCard, RecapGridProjectCard, GustGridProjectCard } from "./project-cards";
import { motion } from "motion/react";
const areaProjects = [
    (<div className="grid sm:grid-cols-2 max-w-7xl gap-1 mb-16">
        <GustGridProjectCard />
        <MaterialProjectCard />
        <PhysicsProjectCard />
    </div>),
    (<div className="grid sm:grid-cols-2 max-w-7xl gap-1 mb-16">
        <RecapGridProjectCard />
        <PairGridProjectCard />
        <TravelAmuletProjectCard />
    </div>),
    (<div className="grid sm:grid-cols-2 max-w-7xl gap-1 mb-16">
        <HorrorGameProjectCard />
        <PrototypeGameCard />
        <SpiritBoxGameCard />
        <FightingGameProjectCard />
    </div>),
    (<div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-1 mb-16">
        <COFAProjectCard />
        <FocuraProjectCard />
        <GuardianAngelProjectCard />
        <MendPathProjectCard />
        <CerebrixProjectCard />
        <ChamaProjectCard />
        <BlazeGuardProjectCard />
        <PatSafeProjectCard />
        <HelpSignalProjectCard />
        <GameRecommendCard />
    </div>)
];
export default function GridComponent(){
    const [area, setArea] = useState(0);
    const areas = ["Graphics", "Full Stack", "Gamedev"];
    return(
        <div>
            <LabelItem label={areas[area] + " Projects"} />
            <div className="flex justify-center space-x-2 text-sm md:text-base">
                <motion.button className={`p-1 pl-2 pr-2 md:pl-4 md:pr-4 rounded-2xl duration-75 hover:bg-slate-400 hover:text-white ${area==0? 'bg-slate-200 text-slate-700 border' : 'bg-slate-500 text-white'}`} 
                initial={{scale: 1.0}}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 1.0 }}
                onClick={()=>{setArea(0)}}
                >{areas[0]}</motion.button>
                <motion.button className={`p-1 pl-2 pr-2 md:pl-4 md:pr-4 rounded-2xl duration-75 hover:bg-slate-400 hover:text-white ${area==1? 'bg-slate-200 text-slate-700 border' : 'bg-slate-500 text-white'}`} 
                initial={{scale: 1.0}}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 1.0 }}
                onClick={()=>{setArea(1)}}
                >{areas[1]}</motion.button>
                <motion.button className={`p-1 pl-2 pr-2 md:pl-4 md:pr-4 rounded-2xl duration-75 hover:bg-slate-400 hover:text-white ${area==2? 'bg-slate-200 text-slate-700 border' : 'bg-slate-500 text-white'}`} 
                initial={{scale: 1.0}}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 1.0 }}
                onClick={()=>{setArea(2)}}
                >{areas[2]}</motion.button>
            </div>
            <div className="flex justify-center ml-5 mr-5">
                {areaProjects[area]}
            </div>
            <LabelItem label="Hackathon Projects" />
            <div className="flex justify-center ml-5 mr-5">
                {areaProjects[3]}
            </div>
           
        </div>
       
    );
}
