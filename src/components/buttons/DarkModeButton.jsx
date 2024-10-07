import { useEffect, useState } from 'react';
import { FiMoon } from "react-icons/fi";
import { IoSunnyOutline } from 'react-icons/io5';

export default function ThemeToggle() {

  const [theme, setTheme] = useState(() => {
    if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
      return 'dark'
    } else {
      return 'light'
    }
  })

  useEffect(() => {
    if (theme == 'dark') {
      document.body.classList.add('dark')
    } else {
      document.body.classList.remove('dark')
    }
  }, [theme]);

  const toggleTheme = () => {
    setTheme(prevTheme => prevTheme === 'light' ? 'dark' : 'light')
  }
  return (
    <button
      id='themeToggle'
      title='Theme Toggle'
      aria-label='The Toggle'
      aria-labelledby='dspwebstudio'
      className="ml-5 w-12 h-12  mx-auto rounded-full focus:outline-none rounded-xl"
      onClick={toggleTheme}>
      {theme ? <IoSunnyOutline className='w-10 h-10 text-primary' /> : <FiMoon className='w-8 h-8 text-secondary_dark' />}
    </button>
  )
}