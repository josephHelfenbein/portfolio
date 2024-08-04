import Card from './components/card';
import Footer from './components/footer';
import {PhysicsProjectCard, HorrorGameProjectCard, ScienceProjectCard, FightingGameProjectCard} from './components/project-cards';
import ThreeScene from './components/threescene';
export default function Page() {
  return (
    <main>
      <div className='gradientPage'></div>
      <div className='threecontainer'>
      <ThreeScene />
      </div>
      <Card />
      <Footer />
      <PhysicsProjectCard />
      <HorrorGameProjectCard />
      <ScienceProjectCard />
      <FightingGameProjectCard />
    </main>
  )
}