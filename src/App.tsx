import { useEffect, useState } from 'react'
import HeroSectionTwo from './main/modules/hero/HeroSectionTwo'
import AnimatedCursor from 'react-animated-cursor'
import AboutMe from './main/modules/about/AboutMe'
import Projects from './main/modules/projects/Projects'
import SplashScreen from './main/modules/splash/SplashScreen'
import Services from './main/modules/Services/Services'
import Expertise from './main/modules/experise/Expertise'
import ContactMe from './main/modules/contactme/ContactMe'
import { FaLinkedin, FaXTwitter } from 'react-icons/fa6'
import { RiGithubLine } from 'react-icons/ri'

import { Button, Link, Navbar, NavbarBrand, NavbarContent, NavbarItem, ScrollShadow } from '@nextui-org/react'
import ThemeToggle from './ThemeToggle'

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
  
          <section>
            <Navbar>
              <NavbarBrand>
                <p className="font-bold text-inherit">Ravikumar Desai</p>
              </NavbarBrand>
              <NavbarContent className="hidden sm:flex gap-4" justify="center">
                <NavbarItem>
                  <Link color="foreground" href="#about">
                    About
                  </Link>
                </NavbarItem>
                <NavbarItem>
                  <Link color="foreground" href="#services">
                  Services
                  </Link>
                </NavbarItem>
                <NavbarItem>
                  <Link color="foreground" href="#projects">
                  Projects
                  </Link>
                </NavbarItem>
                <NavbarItem>
                  <Link color="foreground" href="#contact">
                  Contact
                  </Link>
                </NavbarItem>
              </NavbarContent>
              <NavbarContent justify="end">
                <NavbarItem>
                  <ThemeToggle />
                  <Button
                    //   as={Link} 
                    color="primary" href="#" variant="flat">
                    Resume
                  </Button>
                </NavbarItem>
              </NavbarContent>
            </Navbar>

            <HeroSectionTwo />
            <Expertise />
            <AboutMe />
            <Services />
            <Projects />
            <ContactMe />
          </section>
        </>
      }

    </>
  )
}

export default App