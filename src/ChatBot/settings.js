import icon from "../assets/images/logos/horizontal/logo-blanco.png";

export const settings = {
  isOpen: false,

  emoji: {
    disabled: "false",
  },
  general: {
    primaryColor: "#42b0c5",
    secondaryColor: "#622A77",
    fontFamily: "Arial, sans-serif",
    embedded: false,
  },
  header: {
    title: "Easylav ChatBot",
  },
  audio: {
    disabled: true,
  },
  chatHistory: {
    disabled: true,
    storageKey: "concepts_settings",
  },
  chatButton: {
    icon: icon,
  },
  tooltip: {
    text: "¿Tienes dudas?",
  },
  chatInput: {
    disabled: true,
    enabledPlaceholderText: "Escribe tu mensaje...",
  },
  botBubble: {
    showAvatar: true,
  },
  fileAttachment: {
    disabled: true,
  },
  footer: {
    text: "Lavanderías EASYLAV",
  },
};
