import { useEffect, useState } from 'react';
import { FiMoon } from 'react-icons/fi';
import { IoSunnyOutline } from 'react-icons/io5';

export default function ThemeToggle() {
  const [darkMode, setDarkMode] = useState(() => {
    // Recuperar el tema del localStorage al inicializar el estado
    const savedTheme = localStorage.getItem('darkMode');
    if (savedTheme !== null) {
      return savedTheme === 'true'; // Devuelve true si el tema guardado es 'true'
    }
    // Si no hay tema guardado, verificar el tema del sistema
    return window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;
  });

  const toggleTheme = () => {
    setDarkMode((prevDarkMode) => {
      const newDarkMode = !prevDarkMode;
      // Almacenar el nuevo estado del tema en localStorage
      localStorage.setItem('darkMode', newDarkMode);
      return newDarkMode;
    });
  };

  useEffect(() => {
    // Aplicar el tema al cargar el componente
    document.body.classList.toggle('dark', darkMode);
  }, [darkMode]);

  return (
    <button
      id="themeToggle"
      title="Theme Toggle"
      aria-label="The Toggle"
      className="ml-5 mx-auto focus:outline-none flex "
      onClick={toggleTheme}>
      {darkMode ? (
        <IoSunnyOutline className="w-8 h-8 text-secondary_dark" />
      ) : (
        <FiMoon className="w-8 h-8 text-secondary" />
      )}
    </button>
  );
}
