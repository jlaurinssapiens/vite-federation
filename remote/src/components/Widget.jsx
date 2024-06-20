import "./Button.css";

import { useState, useEffect } from "react";
import rtl from "jss-rtl";
import { create } from "jss";
import {
  jssPreset,
  makeStyles,
  StylesProvider,
  MuiThemeProvider,
} from "@material-ui/core/styles";
import { Provider, useSelector, useDispatch } from "react-redux";
import reducer, { changeAppNameAction } from "../reducer";
import createGenerateClassName from "../theme/createGenerateClassName";
import emptyTheme from "../theme/emptyTheme";
import { getFormTheme } from "../theme/theme";
import CheckboxesGroup from "./mui-components/Checkbox";
import BasicTextFields from "./mui-components/Textfield";

const jss = create({ plugins: [...jssPreset().plugins, rtl()] });

const generateClassName = createGenerateClassName({
  productionPrefix: "jss",
  seed: "",
});

const remoteAppScope = "widget-client";

const RemoteAppWrapper = (props) => {
  const { store } = props;

  const theme = getFormTheme();

  useEffect(() => {
    store.injectReducer(remoteAppScope, reducer);
  }, []);

  return (
    <Provider store={store || {}}>
      <StylesProvider jss={jss} generateClassName={generateClassName}>
        <MuiThemeProvider theme={emptyTheme}>
          <MuiThemeProvider theme={() => theme}>
            <div className="border-2 border-red-600 p-4">
              THIS IS WIDGET
              <CheckboxesGroup />
              <BasicTextFields />
            </div>
          </MuiThemeProvider>
        </MuiThemeProvider>
      </StylesProvider>
    </Provider>
  );
};

export default RemoteAppWrapper;
