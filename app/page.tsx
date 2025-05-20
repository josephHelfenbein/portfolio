"use client"
import Card from './components/card';
import Footer from './components/footer';
import {PhysicsProjectCard, HorrorGameProjectCard, ScienceProjectCard, FightingGameProjectCard, AuriStorProjectCard, E3ProjectCard, TravelAmuletProjectCard, EAProjectCard} from './components/project-cards';
import Links from './components/bottom-text';
import { Suspense, useEffect, useState } from 'react';
import { ScaleLoader } from 'react-spinners';
import { AnimatedBackground } from 'animated-backgrounds';
import IntroCard from './components/intro-card';
import LabelItem from './components/label-item';
import GridComponent from './components/grid';
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
      <h1 style={{display:'none'}}>My Portfolio</h1>
      
      <IntroCard />
      
      <div className='flex flex-col justify-center items-center p-5 mb-52 mt-20'>
        <LabelItem label={"Work Experience"} />
        <div className='max-w-3xl'>
          <EAProjectCard />
          <AuriStorProjectCard />
          <E3ProjectCard />
        </div>
      </div>
      
      <div className='flex justify-center'>
        <div className='max-w-5xl mb-52'>
          <GridComponent />
        </div>
      </div>

      <Links />

      </Suspense>
    </main>
  )
}