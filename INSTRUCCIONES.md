# Instrucciones de Instalación y Uso

Este documento describe los pasos necesarios para instalar y ejecutar el proyecto **EasyLav React** en un entorno local o en un servidor de producción.

---

## Requisitos Previos

Antes de comenzar, asegúrate de tener instalados los siguientes programas:

- **Node.js** (versión 16 o superior)
- **npm** (incluido con Node.js)
- **Git** (para clonar el repositorio)

---

## Instalación

Sigue estos pasos para instalar el proyecto:

1. **Clona el repositorio:**

   ```sh
   git clone https://github.com/dspwebstudiomx/easylav-react.git
   ```

2. **Navega al directorio del proyecto:**

   ```sh
   cd easylav-react
   ```

3. **Instala las dependencias:**

   ```sh
   npm install
   ```

---

## Uso en Desarrollo

Para ejecutar el proyecto en un entorno de desarrollo:

1. **Inicia el servidor de desarrollo:**

   ```sh
   npm run dev
   ```

2. **Accede al proyecto en tu navegador:**

   Abre [http://localhost:5173](http://localhost:5173) para ver la aplicación en funcionamiento.

---

## Despliegue en Producción

Para preparar el proyecto para producción:

1. **Genera los archivos optimizados:**

   ```sh
   npm run build
   ```

2. **Sirve los archivos generados:**

   Los archivos optimizados estarán en la carpeta `dist/`. Puedes servirlos utilizando un servidor web como **Netlify**, **Vercel**, o **Apache/Nginx**.

---

## Configuración Adicional

### Variables de Entorno

El archivo `.env` contiene las variables de entorno necesarias para el proyecto. Asegúrate de configurarlas correctamente antes de ejecutar el proyecto. Ejemplo de variables de entorno:

```env
VITE_API_URL=https://api.tu-dominio.com
VITE_EMAILJS_SERVICE_ID=tu_service_id
VITE_EMAILJS_TEMPLATE_ID=tu_template_id
VITE_EMAILJS_PUBLIC_KEY=tu_public_key
```

### Dependencias

El proyecto utiliza las siguientes tecnologías principales:

- **React**: Para la interfaz de usuario.
- **Vite**: Como herramienta de construcción.
- **Tailwind CSS**: Para los estilos.
- **EmailJS**: Para el envío de correos electrónicos.

---

## Estructura del Proyecto

El proyecto está organizado de la siguiente manera:

```
easylav-react/
├── public/          # Archivos públicos (favicon, imágenes, etc.)
├── src/             # Código fuente del proyecto
│   ├── assets/      # Recursos como imágenes y fuentes
│   ├── components/  # Componentes reutilizables
│   ├── pages/       # Páginas principales del sitio
│   ├── styles/      # Archivos de estilos (Tailwind CSS)
│   ├── utils/       # Funciones y utilidades
│   └── App.jsx      # Componente principal de la aplicación
├── .env             # Variables de entorno
├── package.json     # Dependencias y scripts del proyecto
└── vite.config.js   # Configuración de Vite
```

---

## Soporte

Si tienes alguna pregunta o problema, no dudes en contactarnos:

- **Correo electrónico:** [contacto@easylav.mx](mailto:contacto@easylav.mx)
- **Teléfono:** [+52 443 520 0593](tel:+524435200593)

¡Gracias por usar **EasyLav React**!
