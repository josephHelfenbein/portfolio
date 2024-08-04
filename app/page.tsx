import Card from './components/card';
import Footer from './components/footer';
import {PhysicsProjectCard, HorrorGameProjectCard, ScienceProjectCard, FightingGameProjectCard} from './components/project-cards';
import ThreeScene from './components/threescene';
import Links from './components/bottom-text';
import { Suspense } from 'react';
export default function Page() {
  return (
    <main>
      <div className='gradientPage'></div>
      <Suspense fallback={'Loading...'}>
      <div className='threecontainer'>
        <ThreeScene />
      </div>
      <Card />
      <Footer />
      <PhysicsProjectCard />
      <HorrorGameProjectCard />
      <ScienceProjectCard />
      <FightingGameProjectCard />
      <Links />
      </Suspense>
    </main>
  )
}