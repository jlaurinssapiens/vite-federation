
import "./Button.css"

import { useState, useEffect } from "react"
import rtl from 'jss-rtl'
import {
  create,
} from 'jss'
import {
  jssPreset,
  makeStyles,
  StylesProvider,
  MuiThemeProvider,
} from '@material-ui/core/styles'
import { Provider, useSelector, useDispatch } from 'react-redux';
import reducer, { changeAppNameAction } from '../reducer';
import createGenerateClassName from '../theme/createGenerateClassName'
import emptyTheme from '../theme/emptyTheme'
import { getFormTheme } from '../theme/theme'

const jss = create({ plugins: [...jssPreset().plugins, rtl()] })

const generateClassName = createGenerateClassName({
  productionPrefix: 'jss',
  seed: '',
})

const remoteAppScope = 'widget-client';

export const Button = () => {
  const [state, setState] = useState(0)
  const stage = useSelector(root => root?.studio.stage ?? 'production')
  // const root = useSelector(root => root)

  const scrollToElement = () => {
    const element = document.getElementById('scroll');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'center' });
    }
  };

  return (
    <div className="relative p-6 pt-12 flex items-start justify-start border-2 border-red-500 flex-col">
      <div className="text-red-500 pb-6">
        This is Widget
      </div>
      <div className="relative p-6">
        <div className={`absolute top-0 left-6 text-sm text-red-500`}>{stage}</div>
        <button id='click-btn' className='shared-btn' onClick={() => {
          scrollToElement()
          setState((s) => s + 1)
        }}>
          Click me: {state}
        </button>
      </div>
    </div>
  )
}

const RemoteAppWrapper = props => {
  const { store } = props;

  const theme = getFormTheme()

  useEffect(() => {
    store.injectReducer(remoteAppScope, reducer);
  }, []);

  return (
    <Provider store={store || {}}>
      <StylesProvider
        jss={jss}
        generateClassName={generateClassName}
      >
        <MuiThemeProvider theme={emptyTheme}>
          <MuiThemeProvider theme={() => theme}>
            <Button /> 
          </MuiThemeProvider>
        </MuiThemeProvider>
      </StylesProvider>
    </Provider>
  );
};

export default RemoteAppWrapper