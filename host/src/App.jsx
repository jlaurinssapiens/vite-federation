import reactLogo from './assets/react.svg'
import './App.css'
import { store } from './store';
import { Test } from './Test';
import theme from './theme/blueTheme'
import { create } from 'jss'
import {
  MuiThemeProvider, StylesProvider, createGenerateClassName, jssPreset,
} from '@material-ui/core'

const loadWidget = async () => {
  if (!import.meta.env.PROD) {
    // eslint-disable-next-line import/no-extraneous-dependencies
    const loadWidgetDev = () => import('@spnsdigital/widget')
    return (await loadWidgetDev()).default
  }
  const loadWidgetProd = () => import('widget/Main')
  return (await loadWidgetProd()).default
}
const Widget = await loadWidget()

const jss = create({
  ...jssPreset(),
  id: 'studio',
})

const generateClassName = createGenerateClassName({
  productionPrefix: 's',
  seed: 's',
})

function App() {
  return (
    <div className="App border-4 border-green-600 p-24 gap-6 flex flex-col w-full h-full">
      <StylesProvider jss={jss} generateClassName={generateClassName}>
        <MuiThemeProvider key="studio" theme={theme}>
          <div id="scroll" className='text-xl text-green-600'>This is Studio</div>
          <div className='border-2 border-green-400 w-64 h-96'></div>
          <div className='border-2 border-green-400 w-64 h-96'></div>
          <Test bar='asdas' />
          <Widget store={store} />
        </MuiThemeProvider>
      </StylesProvider>
    </div>
  )
}

export default App