"use client"
import Card from './components/card';
import Footer from './components/footer';
import {PhysicsProjectCard, HorrorGameProjectCard, ScienceProjectCard, FightingGameProjectCard, E3ProjectCard, TravelAmuletProjectCard} from './components/project-cards';
import ThreeScene from './components/threescene';
import Links from './components/bottom-text';
import { Suspense } from 'react';
import { ScaleLoader } from 'react-spinners';
import { AnimatedBackground } from 'animated-backgrounds';
export default function Page() {
  return (
    <main>
      
      <Suspense fallback={
        <div className='h-screen flex items-center justify-center'>
          <div className='mx-auto w-1/2 text-center content-center '>
                <ScaleLoader
                color="#eeeeee"
                height={105}
                margin={6}
                radius={6}
                width={12}
                />
          </div>
        </div>
        
      
      }>
        <AnimatedBackground animationName="starryNight" style={{ opacity: 0.12 }} />
      <div className='threecontainer'>
        <ThreeScene />
      </div>
      <h1 style={{display:'none'}}>My Portfolio</h1>
      <Card />
      <Footer />
      <E3ProjectCard />
      <TravelAmuletProjectCard />
      <PhysicsProjectCard />
      <HorrorGameProjectCard />
      <ScienceProjectCard />
      <FightingGameProjectCard />
      <Links />
      </Suspense>
    </main>
  )
}