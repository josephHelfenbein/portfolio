"use client"
import Card from './components/card';
import Footer from './components/footer';
import {PhysicsProjectCard, HorrorGameProjectCard, ScienceProjectCard, FightingGameProjectCard, E3ProjectCard, TravelAmuletProjectCard} from './components/project-cards';
import ThreeScene from './components/threescene';
import Links from './components/bottom-text';
import { Suspense, useEffect, useState } from 'react';
import { ScaleLoader } from 'react-spinners';
import { AnimatedBackground } from 'animated-backgrounds';
import IntroCard from './components/intro-card';
import LabelItem from './components/label-item';
export default function Page() {
  return (
    <main>
      <Suspense fallback={
        <div className='h-screen flex items-center justify-center'>
          <div className='mx-auto w-1/2 text-center content-center '>
            <ScaleLoader
            color="#555555"
            height={105}
            margin={6}
            radius={6}
            width={12}
            />
          </div>
        </div>
      }>
      <AnimatedBackground animationName="auroraBorealis" style={{ opacity: 0.07 }} />
      <ThreeScene />
      <h1 style={{display:'none'}}>My Portfolio</h1>
      <IntroCard />
      <div className='projectCard'>
        <LabelItem label={"Work Experience"} />
        <E3ProjectCard />
      </div>
      <div className='projectCard'>
        <LabelItem label={"Project Experience"} />
        <TravelAmuletProjectCard />
        <PhysicsProjectCard />
       <HorrorGameProjectCard />
        <ScienceProjectCard />
        <FightingGameProjectCard />
      </div>

      <Links />

      </Suspense>
    </main>
  )
}