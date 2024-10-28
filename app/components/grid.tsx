import { useEffect, useState } from "react";
import LabelItem from "./label-item";
import { TravelAmuletProjectCard, GameRecommendCard, PhysicsProjectCard, HorrorGameProjectCard, FightingGameProjectCard, ScienceProjectCard, MaterialProjectCard, MendPathProjectCard, PrototypeGameCard, SpiritBoxGameCard, HelpSignalProjectCard, CerebrixProjectCard } from "./project-cards";
const areaProjects = [
    (<div className="grid md:grid-cols-2 max-w-7xl gap-1 mb-16">
        <MaterialProjectCard />
        <PhysicsProjectCard />
    </div>),
    (<div className="grid md:grid-cols-2 max-w-7xl gap-1 mb-16">
        <TravelAmuletProjectCard />
        <MendPathProjectCard />
        <CerebrixProjectCard />
        <HelpSignalProjectCard />
        <GameRecommendCard />
    </div>),
    (<div className="grid md:grid-cols-2 max-w-7xl gap-1 mb-16">
        <HorrorGameProjectCard />
        <PrototypeGameCard />
        <SpiritBoxGameCard />
        <FightingGameProjectCard />
    </div>),
    (<div className="grid md:grid-cols-2 max-w-7xl gap-1 mb-16">
        <ScienceProjectCard />
    </div>)
];
export default function GridComponent(){
    const [area, setArea] = useState(1);
    const areas = ["Graphics Programming", "Full Stack", "Game Development", "AI/ML"];
    
    return(
        <div>
            <LabelItem label={areas[area] + " Experience"} />
            <div className="flex justify-center space-x-2">
                <button onClick={()=>{setArea(1)}} className={`bg-slate-500 p-1 pl-4 pr-4 rounded-2xl text-white hover:scale-110 duration-75 hover:bg-slate-400 hover:text-white ${area==1? 'bg-slate-200 text-slate-700 border' : 'bg-slate-500 text-white'}`}>{areas[1]}</button>
                <button onClick={()=>{setArea(0)}} className={`bg-slate-500 p-1 pl-4 pr-4 rounded-2xl text-white hover:scale-110 duration-75 hover:bg-slate-400 hover:text-white ${area==0? 'bg-slate-200 text-slate-700 border' : 'bg-slate-500 text-white'}`}>{areas[0]}</button>
                <button onClick={()=>{setArea(2)}} className={`bg-slate-500 p-1 pl-4 pr-4 rounded-2xl text-white hover:scale-110 duration-75 hover:bg-slate-400 hover:text-white ${area==2? 'bg-slate-200 text-slate-700 border' : 'bg-slate-500 text-white'}`}>{areas[2]}</button>
                <button onClick={()=>{setArea(3)}} className={`bg-slate-500 p-1 pl-4 pr-4 rounded-2xl text-white hover:scale-110 duration-75 hover:bg-slate-400 hover:text-white ${area==3? 'bg-slate-200 text-slate-700 border' : 'bg-slate-500 text-white'}`}>{areas[3]}</button>
            </div>
            <div className="flex justify-center ml-5 mr-5">
                {areaProjects[area]}
            </div>
           
        </div>
       
    );
}
