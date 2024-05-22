import  { useEffect, useState } from 'react'
import HeroSectionTwo from './main/modules/hero/HeroSectionTwo'
import AnimatedCursor from 'react-animated-cursor'
import AboutMe from './main/modules/about/AboutMe'
import Projects from './main/modules/projects/Projects'
import SplashScreen from './main/modules/splash/SplashScreen'
import Services from './main/modules/Services/Services'
import Expertise from './main/modules/experise/Expertise'

const App = () => {
  const [isVisible, setIsVisible] = useState(true)
  useEffect(() => {
    setTimeout(() => {
      setIsVisible(false)
    }, 1500);
  }, [])
  return (
    <>
      <AnimatedCursor
        innerSize={8}
        outerSize={8}
        color='255, 128, 128'
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
      {isVisible ?
        <SplashScreen />
        :
        <>
          <HeroSectionTwo />
          <AboutMe />
          <Expertise />
          <Services />
          <Projects />
        </>
      }

    </>
  )
}

export default App