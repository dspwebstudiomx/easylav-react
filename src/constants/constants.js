/*
  Externals Imports
  General UI
  -TitleH1
  -TitleH2
  -Paragraph
  Section
  Button
  Secondary Button
  Hero Inicio
  Sobre Nosotros
  Testimoios
  Testimonio

*/

// --------- Constantes para estilos - TailwindCSS ------------- //

// General Styles
export const GENERAL_UI = {
  TITLEH1: {
    FONT_FAMILY: "",
    FONT_SIZE: "text-2xl sm:text-3xl xl:text-3xl",
    FONT_WEIGHT: "font-bold",
    COLOR: "text-dark dark:text-light",
    BACKGROUND_COLOR: "",
    JUSTIFY: "mr-auto",
    HERO: {
      COLOR: "text-light",
    },
    TRANSFORM: "uppercase",
  },
  TITLEH2: {
    FONT_FAMILY: "font-din-bold",
    FONT_SIZE: "text-3xl",
    FONT_WEIGHT: "font-semibold",
    COLOR: "text-dark dark:text-light",
    BACKGROUND_COLOR: "",
  },
  TITLEH3: {
    FONT_FAMILY: "font-din-regular",
    FONT_SIZE: "text-2xl",
    FONT_WEIGHT: "font-bold",
    COLOR: "text-dark dark:text-light",
    BACKGROUND_COLOR: "",
    CARD: "text-base uppercase font-semibold",
    TEXT_TRANSFORM: "uppercase",
  },
  TITLEH4: {
    FONT_FAMILY: "font-din-regular",
    FONT_SIZE: "text-base",
    FONT_WEIGHT: "font-semibold",
    COLOR: "text-dark",
    BACKGROUND_COLOR: "",
    TEXT_TRANSFORM: "uppercase",
    JUSTIFY: "mx-auto",
  },
  PARAGRAPH: {
    FONT_FAMILY: "font-din text-balance",
    FONT_SIZE: "text-xl sm:text-xl mr-6 sm:mr-0",
    COLOR: "text-dark dark:text-light",
    FONT_WEIGHT: "",
    LETTER_SPACING: "tracking-tight",
    LINE_HEIGHT: "leading-0",
  },
};

// Loading
export const LOADING_UI = {
  CONTAINER:
    "flex flex-col justify-start items-center h-screen pt-60 sm:justify-center sm:pt-0",
  BACKGROUND_COLOR: "bg-secondary_dark",
  SPINNER: "loader mx-auto mt-8",
};

// Section
export const SECTION_UI = {
  DISPLAY: "grid gap-12",
  PADDING: "py-12 px-8 sm:p-20",
  BACKGROUND_COLOR: "bg-section dark:bg-dark",
  TEXT_COLOR: "",
};

// Container
export const CONTAINER_UI = {
  DISPLAY:
    "flex flex-col gap-8 sm:max-w-screen-sm md:max-w-screen-md lg:max-w-screen-lg",
};

// Navbar
export const NAVBAR_UI = {
  NAV: {
    BACKGROUND_COLOR: "bg-light",
    POSITION: "fixed top-0 z-50 h-[100px] sm:relative xl:fixed",
    SHADOW: "shadow-xl",
    WIDTH: "w-full",
  },
  CONTAINER: {
    DISPLAY: "flex justify-between items-center h-full w-full",
    MARGIN: "mx-auto",
    PADDING: "px-8 sm:px-8 md:px-8 xl:px-0",
  },
  NAVBAR: {
    DISPLAY: "flex items-center justify-between gap-4",
    WIDTH: "w-full",
    HEIGHT: "h-[100px]",
  },
  NAVLINKS: {
    DISPLAY: "flex items-center gap-4",
    FONT_WEIGHT: "font-semibold",
    FONT_SIZE: "text-base",
  },
};

// Banner
export const BANNER_UI = {
  BORDER: "border-2",
  COLOR: "text-dark",
  FONT_SIZE: "text-xl",
  PADDING: "p-8",
  ROUNDED: "rounded-xl",
  THEME: "primary",
};

// Border Bottom
export const BORDER_BOTTOM_UI = {
  WIDTH: "w-full",
  BORDER: "flex border-b-4 border-b-primary pb-2",
  JUSTIFY: "justify-center",
};

// Border Center
export const BORDER_CENTER_UI = {
  WIDTH: "w-full",
  BORDER_CENTER:
    "flex border-l-4 border-l-primary border-r-4 border-r-primary ",
  JUSTIFY: "mx-auto",
};

// Border Left
export const BORDER_LEFT_UI = {
  BORDER_LEFT: "flex border-l-4 border-l-primary",
  JUSTIFY: "mr-auto",
};

// Button
export const BUTTON_UI = {
  DISPLAY: "flex items-center justify-center gap-0",
  WIDTH: "min-w-[240px]",
  HEIGHT: "h-auto",
  FONT_SIZE: "text-xl",
  PADDING: "px-6 py-6 sm:px-3 sm:py-4",
  FONT_WEIGHT: "font-semibold",
  TEXT_TRANSFORM: "",
  ROUNDED: "rounded-lg",
  LETTER_SPACING: "tracking-wider sm:tracking-normal",
};

// Button Container
export const BUTTON_CONTAINER = {
  POSITION: "place-items-center sm:place-items-start",
  DISTANCE: "mt-12",
};

//Primary Button
export const BUTTON_PRIMARY_UI = {
  TEXT_COLOR: "text-light",
  BACKGROUND_COLOR:
    "bg-gradient-to-r from-primary_dark to-primary dark:bg-gradient dark:from-secondary_dark dark:to-secondary_light hover:bg-primary_dark",
  BORDER:
    "border-l-primary_dark border-l-4 border-t-primary_light border-t-4 hover:border-t-primary_light hover:border-l-primary dark:border-l-secondary dark:border-t-secondary_light dark:hover:border-l-secondary",
};

// Secondary Button
export const BUTTON_SECONDARY_UI = {
  TEXT_COLOR: "text-light",
  BACKGROUND_COLOR: "bg-secondary_dark",
  BORDER:
    "border-l-secondary_light border-l-4 border-t-secondary_light border-r-secondary_dark border-t-4 hover:border-t-secondary_light hover:border-l-secondary dark:border-l-primary dark:border-t-primary_light dark:hover:border-l-primary dark:bg-primary",
};

// Hero Inicio
export const HEROINICIO_UI = {
  THEME: "dark",
  BACKGROUND: {
    OPACITY: "opacity-90",
    COLOR: "bg-dark",
  },
  DISPLAY: {
    BUTTON: "block",
    IMAGE: "block",
    PARAGRAPH: "hidden",
  },
  COLOR: {
    BUTTON: "primary",
    PARAGRAPH: "light",
    TITLE: "light",
  },
  BUTTON: {
    SIZE: "lg",
    HREF: "/#servicios",
    TEXT: {
      CONTENT: "Nuestros Servicios",
      COLOR: "light",
      SIZE: "xl",
      TRANSFORM: "",
    },
  },
};
export const HEROINICIO_PROPS = {
  SECTION_ID: "inicio",
  IMAGE_ALT: "canasta de ropa verde con ropa sucia de color con fondo blanco",
  BUTTON_SECONDARY: {
    TITLE: "Nuestros Servicios",
    HREF: "/#servicios",
    TYPE: "button",
  },
};

// Sobre Nosotros
export const ABOUT_UI = {
  BACKGROUND_COLOR: "",
  HEIGHT: "h-auto",
  SECTION: "",
  CONTAINER: "mx-auto",
  TWOCOLUMNS_CONTAINER: "grid gap-x-20 gap-y-16 sm:grid-cols-2",
  COLUMN1_CONTAINER: "grid place-content-center gap-8",
  COLUMN2_CONTAINER: "items-center justify-end",
  SPAN: "font-semibold text-secondary dark:text-primary ml-2",
};
export const ABOUT_PROPS = {
  SECTION_ID: "nosotros",
  CONTAINER_ID: "sobrenosotros-contenedor",
  TITLEH2: "Sobre Nosotros",
};

// Testimonios
export const TESTIMONIALS_UI = {
  BACKGROUND_COLOR: "",
  HEIGHT: "",
  SECTION: "",
  CONTAINER: "mx-auto",
  BORDERBOTTOM_JUSTIFY: "mx-auto",
};
export const TESTIMONIALS_PROPS = {
  SECTION_ID: "testimonios",
  CONTAINER_ID: "testimonios-contenedor",
  TITLEH2: "Testimonios",
};

// Testimonio
export const TESTIMONIAL_UI = {
  ARTICLE_CLASSNAME:
    "p-10 flex flex-col justify-between bg-light text-dark rounded-lg h-[380px] md:h-[340px] xl:h-[340px] w-auto shadow-xl",
  PARAGRAPH_CLASSNAME: "text-pretty text-base text-lg",
  CONTAINER_CLASSNAME:
    "flex lg:flex-row gap-1 justify-between items-center flex-col sm:flex-row",
  NAME_CLASSNAME: "font-semibold text-lg",
  NUMBER_STAR_CONTAINER_CLASSNAME:
    "text-dark justify-center flex items-center mb-6",
  STARS_CONTAINER_CLASSNAME: "flex items-center justify-center",
  STARS_CLASSNAME: "text-secondary dark:text-primary",
  QUALIFICATION_CLASSNAME: "font-semibold text-lg text-dark",
};

// Nuestras Sucursales
export const SUCURSAL_SECTION_UI = {
  TITLEH2_JUSTIFY: "mx-auto",
  BORDER_JUSTIFY: "mx-auto",
};
export const SUCURSAL_SECTION_PROPS = {
  TITLEH2: "Nuestras Sucursales",
};

// Sucursal Card
export const SUCURSAL_CARD_PROPS = {};
export const SUCURSAL_CARD_UI = {
  ARTICLE: {
    ANIMATION: "animate__animated animate__fadeIn animate__slower ",
    BACKGROUND: "bg-light",
    COLOR: "text-dark",
    DISPLAY: "flex  flex-col relative mx-auto",
    HEIGHT: "min-h-[480px]",
    JUSTIFY: "justify-between",
    OVERFLOW: "overflow-hidden",
    ROUNDED: "rounded-xl",
    SHADOW: "shadow-2xl",
    WIDTH: "w-[290px] sm:w-[280px] 2xl:w-[300px]",
  },
  IMAGE: {
    CONTAINER: {
      HEIGHT: "h-[180px]",
      OVERFLOW: "overflow-hidden",
      ROUNDED: "rounded-t-lg",
      WIDTH: "w-full",
    },
  },
  PARAGRAPH: {
    FONT_SIZE: "text-sm",
    COLOR: "text-dark",
    FONT_WEIGHT: "",
    LETTER_SPACING: "",
    LINE_HEIGHT: "leading-1",
    JUSTIFY: "",
  },
  ICON: {
    SIZE: 16,
  },
};

// Franquicias
export const FRANQUICIAS_PROPS = {
  CONTAINER: {
    ID: "franquicias-container",
  },
  COLUMNA_1: {
    ID: "franquicias-columna-1",
    UL: "franquicias-texto",
  },
};
export const FRANQUICIAS_UI = {
  TITLEH1: {
    COLOR: "text- dark:text-light",
    FONT_SIZE: "text-3xl md:text-4xl",
    FONT_WEIGHT: "font-semibold",
    LETTER_SPACING: "tracking-wide",
  },
  CONTAINER: {
    DISPLAY: "grid 2xl:grid-cols-2 sm:gap-8",
  },
  COLUMNA_1: {
    DISPLAY: "flex flex-col gap-2",
  },
  COLUMNA_2: {
    DISPLAY: "grid justify-items-center sm:grid-cols-2 gap-8",
    HEIGHT: "lg:h-auto md:h-[500px]",
    MARGIN: "mx-auto mt-24 sm:mt-8",
    PADDING: "p-0",
    WIDTH: "lg:w-[80%] xl:w-full",
  },
  UL: {
    DISPLAY: "flex flex-col gap-0",
  },
  IMAGE: {
    WIDTH: "w-[320px] sm:w-[300px]",
  },
};

// Nuestros Servicios
export const NUESTROS_SERVICIOS_PROPS = {
  SECTION: {
    ID: "servicios",
  },
  TITLEH2: "Nuestros Servicios",
  CONTAINER: {
    ID: "nuestrosservicios-container",
  },
  BUTTON_SECONDARY: {
    TITLE: "Conoce nuestras sucursales",
    HREF: "/sucursales",
  },
};
export const NUESTROS_SERVICIOS_UI = {
  CONTAINER: {
    CLASSNAME: "mx-auto",
  },
  BUTTON_CONTAINER: {
    DISTANCE: "mt-16",
    POSITION: "justify-center items-center",
  },
};

// Services Generator
export const SERVICES_GENERATOR_PROPS = {};
export const SERVICES_GENERATOR_UI = {
  DIV: "grid place-content-center gap-8 w-full",
  UL: "grid sm:grid-cols-2 xl:grid-cols-3 gap-20",
  LI: {
    CLASSNAME: "flex flex-col gap-8 items-center justify-center",
    DIV_VIDEO: "mx-auto sm:w-24 md:w-44 dark:border-4 dark:border-primary ",
    DIV_TITLEH3: "mx-auto",
  },
  IMAGE: "w-[210px]",
};

// Por que Elegirnos
export const PORQUE_ELEGIRNOS_PROPS = {
  SECTION: {
    ID: "porque-elegirnos",
  },
  CONTAINER: {
    ID: "porque-elegirnos-container",
  },
  ARTICLE: {
    CARACTERISTICAS: {
      CONTENEDOR: {
        ID: "contenedor-caracteristicas",
      },
      TITLEH2: {
        TITLE: "Por qué Elegirnos?",
      },
    },
    IMAGE: {
      CONTENEDOR: {
        ID: "contenedor-imagen",
      },
    },
  },
};
export const PORQUE_ELEGIRNOS_UI = {
  SECTION: {
    BACKGROUND_COLOR: "",
    CLASSNAME: "",
    HEIGHT: "h-auto",
  },
  ARTICLE: "mx-auto grid sm:grid-cols-2 gap-x-20 gap-y-16",
  CONTAINER: "mx-auto",
  CONTAINER_CARACTERISTICAS: "grid place-content-center gap-12",
  CONTAINER_BULLET_DETAILS: "grid lg:grid-cols-1 gap-8",
  CONTAINER_IMAGE: "items-center lg:justify-end mt-8",
};

// Quieres una franquicia - Inicio - Sección
export const QUIERES_UNA_FRANQUICIA_UI = {
  THEME: "dark",
  BACKGROUND: {
    OPACITY: "opacity-80",
    COLOR: "dark",
  },
  DISPLAY: {
    BUTTON: "block",
    IMAGE: "block",
    PARAGRAPH: "block",
  },
  COLOR: {
    BUTTON: "primary",
    PARAGRAPH: "light",
    TITLE: "light",
  },
  BUTTON: {
    SIZE: "",
    HREF: "/franquicias",
    TEXT: {
      CONTENT: "Conocer más",
      COLOR: "light",
      SIZE: "xl",
      TRANSFORM: "",
    },
    CONTAINER: "place-content-center",
  },
  TITLE: {
    H2: {
      CONTENT:
        "¿Estás listo para emprender un negocio rentable y en crecimiento? ",
      TRANSFORM: "uppercase",
      FONT_SIZE: "text-2xl",
      FONT_WEIGHT: "font-bold",
      JUSTIFY: "mx-auto",
    },
  },
};
