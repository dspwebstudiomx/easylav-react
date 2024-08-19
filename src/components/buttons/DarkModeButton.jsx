import { useState } from 'react'
import { FiMoon } from "react-icons/fi"
import { IoSunnyOutline } from 'react-icons/io5'

export default function ThemeToggle() {
  const [darkMode, setDarkMode] = useState(true)
  const toggleTheme = () => {
    setDarkMode(!darkMode)
    document.body.classList.toggle('dark')
  }
  return (
    <button
      id='themeToggle'
      title='Theme Toggle'
      aria-label='The Toggle'
      aria-labelledby='dspwebstudio'
      className="ml-5 w-12 h-12  mx-auto rounded-full focus:outline-none rounded-xl"
      onClick={toggleTheme}>
      {!darkMode ? <IoSunnyOutline className='w-full h-full rounded-lg border-2 p-3 text-primary bg-primary_light border-primary' /> : <FiMoon className='w-full h-full rounded-lg border-2 p-3 text-light bg-secondary_light border-secondary' />}
    </button>
  )
}