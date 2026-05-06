import React from 'react'
import { Hero, SeeItInAction, HomeStepsSection, ParkingSection } from '../components'
import { ParkingCircle } from 'lucide-react'


function Home() {
  return (
    <div>
      <Hero />
      <SeeItInAction />
      <HomeStepsSection />
      <ParkingSection />
    </div>
  )
}

export default Home
