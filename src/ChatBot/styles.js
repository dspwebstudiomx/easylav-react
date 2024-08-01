const PRIMARY_COLOR = "#42b0c5";
const SECONDARY_COLOR = "#491d8d";
const LIGHT_COLOR = "#FAFAFA";

export const styles = {
  headerStyle: {
    background: PRIMARY_COLOR,
    color: LIGHT_COLOR,
    letterSpacing: "1px",
    display: "flex",
    alignItems: "center",
    justifyContent: "between",
    fontSize: "21px",
  },
  chatWindowStyle: {
    backgroundColor: LIGHT_COLOR,
  },
  chatButtonStyle: {
    backgroundColor: SECONDARY_COLOR,
    fontSize: "14px",
  },
  icon: {
    width: "32px",
  },
  tooltipStyle: {
    backgroundColor: PRIMARY_COLOR,
    border: `1px solid ${LIGHT_COLOR}`,
  },
  botBubbleStyle: {
    backgroundColor: SECONDARY_COLOR,
    fontSize: "18px",
  },
  userBubbleStyle: {
    backgroundColor: PRIMARY_COLOR,
  },
  bodyStyle: {
    padding: "1.1em",
  },
};
