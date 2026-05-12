import React from 'react'
import { Hero, SeeItInAction, HomeStepsSection, ParkingSection, PricingSection, MobileAppSection, ReadySection, HowItWorks, HomeFeatureSection } from '../components'


function Home() {
  return (
    <div>
      <Hero />
      <SeeItInAction />
      <HomeFeatureSection />
      <HomeStepsSection />
      <HowItWorks />
      {/* <ParkingSection /> */}
      <PricingSection />
      <MobileAppSection />
      {/* <ReadySection /> */}
    </div>
  )
}

export default Home
