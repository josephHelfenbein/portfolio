"use client"
import Card from './components/card';
import Footer from './components/footer';
import {AuriStorProjectCard, EAProjectCard} from './components/project-cards';
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
      
      <div className='flex flex-col justify-center items-center mb-24 mt-12'>
        <LabelItem label={"Work Experience"} />
        <div className='max-w-5xl backdrop-blur-lg p-4 shadow-lg rounded-xl'>
          <EAProjectCard />
          <AuriStorProjectCard />
        </div>
      </div>
      
      <div className='flex justify-center'>
        <div className='xl:max-w-7xl max-w-5xl mb-52'>
          <GridComponent />
        </div>
      </div>

      <Links />

      </Suspense>
    </main>
  )
}