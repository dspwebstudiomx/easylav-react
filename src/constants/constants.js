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

// Banner
export const BANNER_UI = {
  BORDER: "border-2",
  COLOR: "text-dark",
  FONT_SIZE: "text-xl",
  PADDING: "p-8",
  ROUNDED: "rounded-xl",
  THEME: "primary",
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
