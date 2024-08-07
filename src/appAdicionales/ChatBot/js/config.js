import icon from "../../../assets/images/logos/horizontal/logo-blanco.png";

const primaryColor = "#42b0c5";
const secondaryColor = "#622A77";
const lightColor = "#FAFAFA";

const settings = {
  isOpen: false,

  emoji: {
    disabled: "false",
  },
  general: {
    primaryColor: primaryColor,
    secondaryColor: secondaryColor,
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
    disabled: false,
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

const styles = {
  headerStyle: {
    background: primaryColor,
    color: lightColor,
    letterSpacing: "1px",
    display: "flex",
    alignItems: "center",
    justifyContent: "between",
    fontSize: "16px",
    fontWeight: "bold",
  },
  chatWindowStyle: {
    backgroundColor: lightColor,
  },
  chatButtonStyle: {
    backgroundColor: secondaryColor,
    fontSize: "14px",
  },
  icon: {
    width: "32px",
  },
  tooltipStyle: {
    backgroundColor: primaryColor,
    border: `1px solid ${lightColor}`,
    fontSize: "16px",
  },
  botBubbleStyle: {
    backgroundColor: secondaryColor,
    fontSize: "16px",
  },
  userBubbleStyle: {
    backgroundColor: primaryColor,
    fontSize: "16px",
  },
  bodyStyle: {
    padding: "1.1em",
  },
};

export { settings, styles };
