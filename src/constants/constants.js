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
    FONT_SIZE: "text-[26px] sm:text-2xl xl:text-2xl",
    FONT_WEIGHT: "font-bold",
    COLOR: "text-dark dark:text-light",
    BACKGROUND_COLOR: "",
    JUSTIFY: "mr-auto",
    HERO: {
      COLOR: "text-light",
    },
    TRANSFORM: "uppercase leading-7",
  },
  TITLEH2: {
    FONT_FAMILY: "font-din-bold",
    FONT_SIZE: "text-3xl",
    FONT_WEIGHT: "font-semibold",
    COLOR: "text-dark dark:text-light",
    BACKGROUND_COLOR: "",
    JUSTIFY: "mx-auto",
  },
  TITLEH3: {
    FONT_FAMILY: "font-din-bold",
    FONT_SIZE: "text-xl",
    FONT_WEIGHT: "font-bold",
    COLOR: "text-primary_dark dark:text-primary",
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
    FONT_FAMILY: "font-din text-pretty",
    FONT_SIZE: "text-base sm:text-base mr-6 sm:mr-0",
    COLOR: "text-dark dark:text-light",
    FONT_WEIGHT: "",
    LETTER_SPACING: "tracking-normal",
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
  WIDTH: "w-100%",
  BORDER: "flex border-b-4 border-b-primary pb-3",
  JUSTIFY: "mx-auto",
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

// Button Container
export const BUTTON_CONTAINER = {
  POSITION: "place-items-center bg-red",
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

// Testimonios
export const TESTIMONIALS_UI = {
  BACKGROUND_COLOR: "bg-primary",
  SECTION: "py-20",
  HEIGHT: "h-[100vh]",
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
    "p-10 flex flex-col justify-between bg-light text-dark rounded-lg h-[420px] sm:h-[380px] w-auto shadow-xl",
  PARAGRAPH_CLASSNAME: "text-pretty text-lg sm:text-xl ",
  CONTAINER_CLASSNAME:
    "flex items-center gap-2 flex-col sm:flex-row sm:items-start",
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
    HEIGHT: "min-h-[490px]",
    JUSTIFY: "justify-between",
    OVERFLOW: "overflow-hidden",
    ROUNDED: "rounded-xl",
    SHADOW: "shadow-xl",
    WIDTH: "w-[260px] 2xl:w-[280px]",
  },
  IMAGE: {
    CONTAINER: {
      HEIGHT: "",
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
    DISPLAY: "grid justify-items-center sm:grid-cols-2 gap-12",
    HEIGHT: "lg:h-auto md:h-[500px]",
    MARGIN: "mx-auto mt-24 sm:mt-8 2xl:mt-40 mx-auto",
    PADDING: "p-0",
    WIDTH: "w-full",
  },
  UL: {
    DISPLAY: "flex flex-col gap-0",
  },
  IMAGE: {
    WIDTH: "w-[280px] lg:w-[360px]",
  },
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
    IMAGE: "bg-fixed",
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
    CONTAINER: "items-center justify-center",
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
