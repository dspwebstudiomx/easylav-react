import { useState } from 'react'
import { FiMoon } from "react-icons/fi"
import { IoSunnyOutline } from 'react-icons/io5'

export default function ThemeToggle() {
  const [darkMode, setDarkMode] = useState(false)
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
      className="ml-5 w-12 h-12  mx-auto rounded-full text-primary bg-blue-500 hover:bg-blue-600 focus:outline-none border-2 rounded-xl bg-primary_light"
      onClick={toggleTheme}>
      {darkMode ? <IoSunnyOutline className='w-full h-6 text-primary' /> : <FiMoon className='w-full h-6 text-slate-100' />}
    </button>
  )
}