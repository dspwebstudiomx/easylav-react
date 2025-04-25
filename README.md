# EasyLav React

**EasyLav React** es una aplicación web moderna diseñada para gestionar servicios de lavandería de manera eficiente. Este proyecto utiliza tecnologías como **React**, **Vite**, y **Tailwind CSS** para ofrecer una experiencia de usuario rápida, intuitiva y visualmente atractiva.

---

## Características

- **Gestión de sucursales:** Visualiza y administra información de las sucursales.
- **Formulario de facturación:** Permite a los usuarios generar facturas de manera sencilla.
- **Términos y condiciones:** Página dedicada para mostrar las políticas del servicio.
- **Integración con EmailJS:** Envío de correos electrónicos directamente desde la aplicación.
- **Diseño responsivo:** Optimizado para dispositivos móviles, tabletas y escritorios.
- **Estilos modernos:** Implementación de **Tailwind CSS** para un diseño limpio y profesional.

---

## Tecnologías Utilizadas

- **React**: Biblioteca para construir interfaces de usuario.
- **Vite**: Herramienta de desarrollo rápida para aplicaciones modernas.
- **Tailwind CSS**: Framework de CSS para estilos rápidos y personalizables.
- **Formik**: Manejo de formularios y validación.
- **EmailJS**: Envío de correos electrónicos sin necesidad de un backend.
- **React Icons**: Iconos personalizables para mejorar la interfaz.

---

## Requisitos Previos

Antes de comenzar, asegúrate de tener instalados los siguientes programas:

- **Node.js** (versión 16 o superior)
- **npm** (incluido con Node.js)
- **Git** (para clonar el repositorio)

---

## Instalación

Sigue estos pasos para instalar el proyecto en tu entorno local:

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

## Configuración de Variables de Entorno

El archivo `.env` contiene las variables de entorno necesarias para el proyecto. Asegúrate de configurarlas correctamente antes de ejecutar el proyecto. Ejemplo de variables de entorno:

```env
VITE_API_URL=https://api.tu-dominio.com
VITE_EMAILJS_SERVICE_ID=tu_service_id
VITE_EMAILJS_TEMPLATE_ID=tu_template_id
VITE_EMAILJS_PUBLIC_KEY=tu_public_key
```

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

## Contribución

Si deseas contribuir al proyecto:

1. Haz un fork del repositorio.
2. Crea una rama para tu funcionalidad o corrección: `git checkout -b mi-nueva-funcionalidad`.
3. Realiza tus cambios y haz un commit: `git commit -m "Agrega nueva funcionalidad"`.
4. Sube tus cambios: `git push origin mi-nueva-funcionalidad`.
5. Abre un Pull Request en GitHub.

---

## Soporte

Si tienes alguna pregunta o problema, no dudes en contactarnos:

- **Correo electrónico:** [contacto@easylav.mx](mailto:contacto@easylav.mx)
- **Teléfono:** [+52 443 520 0593](tel:+524435200593)

---

## Licencia

Este proyecto está bajo la licencia [MIT](LICENSE).

---

¡Gracias por usar **EasyLav React**!
