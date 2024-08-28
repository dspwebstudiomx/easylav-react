/*
Importaciones externas
Secondary Button
TitleH2
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
  TITLEH1: "",
  TITLEH2: {
    JUSTIFY: "",
    FONT_SIZE: "text-3xl",
    FONT_WEIGHT: "font-bold",
    BACKGROUND_COLOR: "",
  },
  PARAGRAPH: "text-lg",
};

// Section
export const SECTION_UI = {
  DISPLAY: "grid gap-12",
  PADDING: "p-12 sm:p-20 2xl:p-0",
  BACKGROUND_COLOR: "bg-light dark:bg-dark",
  TEXT_COLOR: "text-dark dark:text-light",
};

export const BUTTON_UI = {
  DISPLAY: "flex items-center justify-center",
  WIDTH: "w-auto",
  HEIGHT: "min-h-[70px]",
  FONT_SIZE: "text-xl",
  PADDING: "px-6 py-4",
  FONT_WEIGHT: "font-semibold",
  ROUNDED: "rounded-xl",
};

// Secondary Button
export const BUTTON_SECONDARY_UI = {
  HEIGHT: "min-h-[70px]",
  TEXT_COLOR: "text-light",
  BACKGROUND_COLOR: "bg-secondary dark:bg-primary_dark ",
  BORDER:
    "border-l-secondary_dark border-l-4 border-t-secondary_light border-t-4 hover:border-t-secondary_light hover:border-l-secondary dark:border-l-primary dark:border-t-primary_light dark:hover:border-l-primary",
};

// Hero Inicio
export const HEROINICIO_UI = {
  TEXT_COLOR: "text-light",
  OPACITY: "opacity-45",
  OPACITY_COLOR: "bg-dark",
  HEIGHT: "min-h-[60vh] sm:h-auto 2xl:h-[70vh]",
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
  PARAGRAPH: "text-balance 2xl:text-x",
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
  TITLEH2_JUSTIFY: "",
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
