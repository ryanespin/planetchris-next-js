import { Metadata } from 'next'

import DetailsSection from './DetailsSection'
import HeroSection from './HeroSection'
import WhatWellDoSection from './WhatWellDoSection'
import WhoThisIsFor from './WhoThisIsForSection'

export const metadata: Metadata = {
  description: 'The Village is a five-circle, small-cohort experience for parents unsettled by the cultural, educational, and political systems shaping their children\'s lives. Together, we practice reflection over reactivity, long-view thinking over urgency, and growth over blame. This is not therapy and not a debate forum. It is a guided space for parents committed to equity, inclusion, and raising future adults.',
  title: 'The Village | PlanetChris Consulting',
}

export default function Village() {
  return (
    <>
      <HeroSection />
      <WhoThisIsFor />
      <WhatWellDoSection />
      <DetailsSection />
    </>
  )
}
