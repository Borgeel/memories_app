import { makeStyles } from "@material-ui/core/styles";

export default makeStyles({
  media: {
    height: 0,
    paddingTop: "80.25%",
    backgroundColor: "rgba(0, 0, 0, 0.5)",
    backgroundBlendMode: "darken",
  },
  border: {
    border: "solid",
  },
  fullHeightCard: {
    height: "100%",
  },
  card: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
    borderRadius: "15px",
    height: "100% ",
    position: "relative",
  },
  overlay: {
    position: "absolute",
    top: "20px",
    left: "20px",
    color: "#cfcfcf",
  },
  overlay2: {
    position: "absolute",
    top: "20px",
    right: "20px",
    color: "#cfcfcf",
  },
  grid: {
    display: "flex",
  },
  details: {
    margin: "0",
    display: "flex",
    justifyContent: "space-between",
    margin: "10px",
  },
  title: {
    margin: "0",
    padding: "0 10px",
  },
  cardActions: {
    padding: "0 10px 6px 10px",
    display: "flex",
    justifyContent: "space-between",
  },
  message: {
    margin: "0",
    display: "flex",
    textAlign: "center",
    flexWrap: "wrap",
    wordBreak: "break-all",
  },
});
