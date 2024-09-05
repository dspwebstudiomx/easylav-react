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

// -------- Importaciones externas ---------- //
import {
  canastaderopa_1920,
  canastaderopa_2400,
  canastaderopa_640,
} from "assets";

// --------- Constantes para estilos - TailwindCSS ------------- //H1

// General Styles

export const GENERAL_UI = {
  TITLEH1: {
    FONT_SIZE: "text-3xl",
    FONT_WEIGHT: "font-bold",
    COLOR: "text-light",
    BACKGROUND_COLOR: "",
  },
  TITLEH2: {
    FONT_SIZE: "text-3xl",
    FONT_WEIGHT: "font-bold",
    COLOR: "text-dark dark:text-light",
    BACKGROUND_COLOR: "",
  },
  TITLEH3: {
    FONT_SIZE: "text-2xl",
    FONT_WEIGHT: "font-semibold",
    COLOR: "text-dark",
    BACKGROUND_COLOR: "",
    CARD: "text-base uppercase font-semibold",
    CLASSNAME: "text-lg sm:text-sm mx-auto uppercase",
  },
  PARAGRAPH: {
    FONT_SIZE: "text-base sm:text-lg",
    COLOR: "text-[#324] dark:text-light",
    FONT_WEIGHT: "",
    LETTER_SPACING: "tracking-wide",
    LINE_HEIGHT: "leading-6",
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
  PADDING: "p-12 sm:p-20 2xl:p-20",
  BACKGROUND_COLOR: "bg-light dark:bg-dark",
  TEXT_COLOR: "",
};

// Button
export const BUTTON_UI = {
  DISPLAY: "flex items-center justify-center gap-0",
  WIDTH: "w-auto",
  HEIGHT: "min-h-[0px]",
  FONT_SIZE: "text-xl",
  PADDING: "px-6 py-4",
  FONT_WEIGHT: "font-base",
  ROUNDED: "rounded-xl",
};

// Border Bottom
export const BORDER_BOTTOM_UI = {
  WIDTH: "w-full",
  BORDER_LEFT: "flex border-b-4 border-b-primary",
  JUSTIFY: "justify-center",
};

// Border Center
export const BORDER_CENTER_UI = {
  WIDTH: "w-full",
  BORDER_CENTER:
    "flex border-l-4 border-l-primary border-r-4 border-r-primary ",
  JUSTIFY: "justify-center",
};

// Border Left
export const BORDER_LEFT_UI = {
  BORDER_LEFT: "flex border-l-4 border-l-primary",
  JUSTIFY: "justify-center",
};

// Secondary Button
export const BUTTON_SECONDARY_UI = {
  HEIGHT: "min-h-[70px]",
  TEXT_COLOR: "text-light",
  BACKGROUND_COLOR: "bg-gradient-to-r from-secondary_dark to-secondary_light",
  BORDER:
    "border-l-secondary_dark border-l-4 border-t-secondary_light border-t-4 hover:border-t-secondary_light hover:border-l-secondary dark:border-l-primary dark:border-t-primary_light dark:hover:border-l-primary",
};

//Primary Button
export const BUTTON_PRIMARY_UI = {
  HEIGHT: "min-h-[70px]",
  TEXT_COLOR: "text-light",
  BACKGROUND_COLOR:
    "bg-gradient-to-r from-primary_dark to-primary dark:bg-secondary_dark ",
  BORDER:
    "border-l-primary_dark border-l-4 border-t-primary_light border-t-4 hover:border-t-primary_light hover:border-l-primary dark:border-l-secondary dark:border-t-secondary_light dark:hover:border-l-secondary",
};

// Hero Inicio
export const HEROINICIO_UI = {
  TEXT_COLOR: "text-light",
  OPACITY: "opacity-45",
  OPACITY_COLOR: "bg-dark",
  HEIGHT: "h-[80vh] sm:h-[120vh]  md:h-[40vh] lg:h-[60vh] xl:h-[60vh]",
};
export const HEROINICIO_PROPS = {
  SECTION_ID: "inicio",
  IMAGE_ALT: "canasta de ropa verde con ropa sucia de color con fondo blanco",
  BACKGROUND_IMAGE_640: canastaderopa_640,
  BACKGROUND_IMAGE_1024: canastaderopa_1920,
  BACKGROUND_IMAGE_1920: canastaderopa_2400,
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
    "shadow-xl p-10 flex flex-col justify-between bg-light text-dark rounded-lg",
  PARAGRAPH_CLASSNAME: "text-pretty text-base text-lg",
  CONTAINER_CLASSNAME:
    "flex flex-row lg:flex-row mt-6 gap-6 justify-between sm:items-center",
  NAME_CLASSNAME: "font-semibold text-lg",
  NUMBER_STAR_CONTAINER_CLASSNAME: "text-dark justify-between flex",
  STARS_CONTAINER_CLASSNAME: "flex items-center",
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

// Franquicias
export const FRANQUICIAS_UI = {
  TITLEH1: {
    COLOR: "text-dark dark:text-light",
    FONT_SIZE: "text-3xl",
    FONT_WEIGHT: "font-semibold",
    LETTER_SPACING: "tracking-wide",
  },
};
