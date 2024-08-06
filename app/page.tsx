import Card from './components/card';
import Footer from './components/footer';
import {PhysicsProjectCard, HorrorGameProjectCard, ScienceProjectCard, FightingGameProjectCard, E3ProjectCard} from './components/project-cards';
import ThreeScene from './components/threescene';
import Links from './components/bottom-text';
import { Suspense } from 'react';
export default function Page() {
  return (
    <main>

      <Suspense fallback={'Loading...'}>
      <div className='threecontainer'>
        <ThreeScene />
      </div>
      <Card />
      <Footer />
      <E3ProjectCard />
      <PhysicsProjectCard />
      <HorrorGameProjectCard />
      <ScienceProjectCard />
      <FightingGameProjectCard />
      <Links />
      </Suspense>
    </main>
  )
}