import { makeStyles } from "@material-ui/core/styles";

export default makeStyles((theme) => ({
  mainContainer: {
    flexDirection: "column-reverse",
  },

  [theme.breakpoints.up("md")]: {
    mainContainer: {
      flexDirection: "row",
    },
  },
}));
