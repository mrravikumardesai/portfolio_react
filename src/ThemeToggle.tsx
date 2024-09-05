// src/components/ThemeToggle.js
import { Switch } from '@nextui-org/react';
import { useState, useEffect } from 'react';
import { CiSun } from 'react-icons/ci';
import { RiMoonClearLine } from 'react-icons/ri';

const ThemeToggle = () => {
  const [darkMode, setDarkMode] = useState(() => (localStorage.getItem('theme') == "dark"));
  // const {darkMode} = useSelector((state:any)=>state.theme)

  useEffect(() => {
    const root = window.document.documentElement;
    if (darkMode) {
      root.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    } else {
      root.classList.remove('dark');
      localStorage.setItem('theme', 'light');
    }
  }, [darkMode]);

  return (
    <Switch
      defaultSelected={darkMode}
      isSelected={darkMode}
      size="sm"
      color="default"
      onChange={()=>{
        setDarkMode(!darkMode)
        // dispatch(setChangeTheme(!darkMode))
      }}
      startContent={ <CiSun />}
      endContent={ <RiMoonClearLine  />}
    />

  );
};

export default ThemeToggle;
