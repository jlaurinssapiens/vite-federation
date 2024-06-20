import reactLogo from "./assets/react.svg";
import "./App.css";
import { store } from "./store";
import theme from "./theme/blueTheme";
import { create } from "jss";
import {
  MuiThemeProvider,
  StylesProvider,
  createGenerateClassName,
  jssPreset,
} from "@material-ui/core";
import CheckboxesGroup from "./components/mui-components/Checkbox";
import BasicTextFields from "./components/mui-components/Textfield";
import { Suspense } from "react";

const loadWidget = async () => {
  if (!import.meta.env.PROD) {
    // eslint-disable-next-line import/no-extraneous-dependencies
    const loadWidgetDev = () => import("@spnsdigital/widget");
    return (await loadWidgetDev()).default;
  }
  const loadWidgetProd = () => import("widget/Main");
  return (await loadWidgetProd()).default;
};
const Widget = await loadWidget();

const jss = create({
  ...jssPreset(),
  id: "studio",
});

const generateClassName = createGenerateClassName({
  productionPrefix: "s",
  seed: "s",
});

function App() {
  return (
    <div className="App border-4 border-green-600 p-24 gap-6 flex flex-col w-full h-full">
      <StylesProvider jss={jss} generateClassName={generateClassName}>
        <MuiThemeProvider key="studio" theme={theme}>
          <div id="scroll" className="text-xl text-green-600">
            This is Studio
          </div>
          <CheckboxesGroup />
          <BasicTextFields />
          <Suspense>
            <Widget store={store} />
          </Suspense>
        </MuiThemeProvider>
      </StylesProvider>
    </div>
  );
}

export default App;
