import React from 'react'
import HeroSection from './main/modules/hero/HeroSection'
import HeroSectionTwo from './main/modules/hero/HeroSectionTwo'
import AnimatedCursor from 'react-animated-cursor'
import AboutMe from './main/modules/about/AboutMe'
import Projects from './main/modules/projects/Projects'

const App = () => {
  return (
    <>
     <AnimatedCursor
      innerSize={8}
      outerSize={8}
      color='18,18,18'
      // outerAlpha={0.2}
      innerScale={5}
      outerScale={15}
      clickables={[
        'a',
        'input[type="text"]',
        'input[type="email"]',
        'input[type="number"]',
        'input[type="submit"]',
        'input[type="image"]',
        'label[for]',
        'select',
        'textarea',
        'button',
        '.link'
      ]}
    />
    {/* <HeroSection /> */}
    <HeroSectionTwo />
    <AboutMe />
    <Projects />
    </>
  )
}

export default App