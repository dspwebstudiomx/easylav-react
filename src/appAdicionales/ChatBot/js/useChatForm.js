import { useState } from "react";
import { exitOptions, helpOptions, initialOptions } from "./optionsChat";

const useChatForm = () => {
  const [form, setForm] = useState({});

  const flow = {
    start: {
      message: "Hola! ¿Cuál es tu nombre?",
      function: (params) => setForm({ ...form, name: params.userInput }),
      path: "welcome",
    },
    welcome: {
      message: (params) => `Mucho gusto ${params.userInput}`,
      function: (params) => setForm({ ...form, question: params.userInput }),
      path: "ask_question",
      transition: { duration: 1000 },
      chatDisabled: true,
    },
    ask_question: {
      message: "¿En que te podemos ayudar?",
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
      chatDisabled: true,
    },
    show_question_options: {
      message: "A continuación te mostraré las preguntas más frecuentes:",
      options: helpOptions,
      path: "process_options",
      chatDisabled: true,
    },
    show_link_sucursales: {
      transition: { duration: 1000 },
      chatDisabled: true,
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
      chatDisabled: true,
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
      message: "¿Tiene alguna otra duda?",
      options: exitOptions,
      path: "process_exit",
      chatDisabled: true,
    },
    process_options: {
      transition: { duration: 0 },
      path: async (params) => {
        let link = "";
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
        }
        if (link !== "") {
          await params.injectMessage("Te dirijo al lugar solicitado...");
          setTimeout(() => {
            window.open(link);
          }, 1000);
        }
        return "repeat";
      },
      chatDisabled: true,
    },
    chatDisabled: true,
    process_exit: {
      transition: { duration: 0 },
      chatDisabled: true,
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
      message: "Muchas gracias por utilizar nuestro ChatBot.",
      chatDisabled: true,
    },
    repeat: {
      transition: { duration: 5000 },
      path: "prompt_again",
    },
  };

  return { form, flow };
};

export default useChatForm;
