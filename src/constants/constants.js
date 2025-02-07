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
    FONT_SIZE: "text-[26px] sm:text-2xl xl:text-3xl",
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
    FONT_SIZE: "text-2xl",
    FONT_WEIGHT: "font-semibold",
    COLOR: "text-dark dark:text-primary",
    BACKGROUND_COLOR: "",
    JUSTIFY: "mx-auto",
    TEXT_TRANSFORM: "uppercase",
  },
  TITLEH3: {
    FONT_FAMILY: "font-din-bold",
    FONT_SIZE: "text-[21px]",
    FONT_WEIGHT: "font-bold",
    COLOR: "text-dark dark:text-primary",
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
    FONT_SIZE: "text-lg sm:text-base mr-6 sm:mr-0",
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
