import { useState } from "react";
import { exitOptions, helpOptions, initialOptions } from "./optionsChat";

const useChatForm = () => {
  const [form, setForm] = useState({});

  const flow = {
    start: {
      chatDisabled: false,
      message: "Hola! ¿Cuál es tu nombre?",
      function: (params) => setForm({ ...form, name: params.userInput }),
      path: "welcome",
    },
    welcome: {
      message: (params) => `Mucho gusto ${params.userInput}`,
      chatDisabled: true,
      function: (params) => setForm({ ...form, question: params.userInput }),
      path: "ask_question",
      transition: { duration: 1000 },
    },
    ask_question: {
      message: "¿En que te podemos ayudar?",
      chatDisabled: true,
      function: (params) => setForm({ ...form, question: params.userInput }),
      options: initialOptions,
      path: async (params) => {
        switch (params.userInput) {
          case "Preguntas Frecuentes":
            return "show_question_options";
          case "Ver Sucursales":
            return "show_link_sucursales";
          case "Ir a Contacto":
            return "show_link_contacto";
          default:
            return "ask_question";
        }
      },
    },
    show_question_options: {
      message: "A continuación te mostraré las preguntas más frecuentes:",
      options: helpOptions,
      chatDisabled: true,
      path: "frequent_questions",
    },
    show_link_sucursales: {
      transition: { duration: 1000 },
      path: async (params) => {
        let link = "https://easylav-react.netlify.app/sucursales";
        if (link !== "") {
          await params.injectMessage("Te dirijo al lugar solicitado...");
          setTimeout(() => {
            window.open(link);
          }, 1000);
        }
        return "repeat";
      },
    },
    show_link_contacto: {
      transition: { duration: 1000 },
      path: async (params) => {
        let link = "/contacto";
        if (link !== "") {
          await params.injectMessage("Te dirijo al lugar solicitado...");
          setTimeout(() => {
            window.open(link);
          }, 1000);
        }
        return "repeat";
      },
    },
    prompt_again: {
      chatDisabled: true,
      message: "¿Tiene alguna otra duda?",
      options: exitOptions,
      path: "process_exit",
    },
    frequent_questions: {
      transition: { duration: 1000 },
      chatDisabled: true,
      path: async (params) => {
        switch (params.userInput) {
          case "¿Qué tipos de prendas se pueden lavar en el servicio de lavandería?":
            await params.injectMessage(
              "En nuestro servicio de lavandería lavamos una amplia variedad de prendas, incluyendo ropa casual, de trabajo, de cama, toallas y prendas delicadas que requieren un cuidado especial.",
            );
            break;
          case "¿Cuánto tiempo tarda en completarse el servicio de lavandería?":
            await params.injectMessage(
              "El tiempo de procesamiento puede variar según la carga de trabajo y el tipo de prendas.",
            );
            await params.injectMessage(
              "Generalmente, podemos completar el lavado y secado estándar en un plazo de 24 a 48 horas.",
            );
            break;
          case "¿Cómo se determinan los precios del servicio de lavandería?":
            await params.injectMessage(
              "Los precios se basan principalmente en el peso total de la ropa a lavar. Ofrecemos tarifas competitivas por libra/kilo y también tenemos opciones especiales para prendas delicadas o que requieren un tratamiento especial.",
            );
            break;
          case "¿Ofrecen servicio de recogida y entrega a domicilio?":
            await params.injectMessage(
              "No, no ofrecemos servicio de recogida y entrega a domicilio.",
            );
            break;
          case "¿Qué medidas toman para garantizar que las prendas no se mezclen o dañen durante el lavado?":
            await params.injectMessage(
              "Nuestro personal capacitado clasifica cuidadosamente las prendas antes de lavarlas, separando por colores, tipos de tejido y requisitos de lavado. Utilizamos productos de calidad y ajustamos los ciclos de lavado según las especificaciones de cada prenda.",
            );
            break;
          case "¿Qué debo hacer si tengo una prenda con manchas difíciles o específicas?":
            await params.injectMessage(
              "Si tienes prendas con manchas difíciles, te recomendamos que nos lo indiques al dejar la ropa. Nuestro personal está entrenado para tratar diferentes tipos de manchas y utilizaremos métodos adecuados para maximizar la posibilidad de eliminación sin dañar la tela.",
            );
            break;
          default:
            return "repeat";
        }
      },
    },
    process_exit: {
      chatDisabled: true,
      transition: { duration: 0 },
      path: async (params) => {
        switch (params.userInput) {
          case "Si":
            return "ask_question";
          case "No":
            return "exit";
          default:
            return "show_question_options";
        }
      },
    },
    exit: {
      chatDisabled: true,
      message: "Muchas gracias por utilizar nuestro ChatBot.",
      transition: { duration: 1000 },
    },
    repeat: {
      chatDisabled: true,
      transition: { duration: 5000 },
      path: "prompt_again",
    },
  };

  return { form, flow };
};

export default useChatForm;
