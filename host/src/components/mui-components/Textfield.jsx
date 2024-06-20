import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";

const useStyles = makeStyles((theme) => ({
  root: {
    "& > *": {
      margin: theme.spacing(1),
      width: "25ch",
    },
  },
}));

const useStylesBorder = makeStyles((theme) => ({
  root: {
    color: theme.palette.primary.main,
    border: `2px solid ${theme.palette.primary.dark}`,
    padding: "4px",
    width: "400px",
  },
}));

const PROD = import.meta.env.PROD;
const MESSAGE = `NODE_ENV IS ${PROD ? "PRODUCTION" : "DEVELOPMENT"}`;

export default function BasicTextFields() {
  const classes = useStyles();
  const testClasses = useStylesBorder();

  return (
    <form className={classes.root} noValidate autoComplete="off">
      <TextField id="standard-basic" label="Standard" />
      <TextField id="filled-basic" label="Filled" variant="filled" />
      <TextField id="outlined-basic" label="Outlined" variant="outlined" />
      <div className={testClasses.root}>{MESSAGE}</div>
    </form>
  );
}
