/**
 * @see https://github.com/mui/material-ui/blob/v4.x/packages/material-ui-styles/src/createGenerateClassName/createGenerateClassName.js
 */

/**
 * This is the list of the style rule name we use as drop in replacement for the built-in
 * pseudo classes (:checked, :disabled, :focused, etc.).
 *
 * Why do they exist in the first place?
 * These classes are used at a specificity of 2.
 * It allows them to override previously definied styles as well as
 * being untouched by simple user overrides.
 */
const pseudoClasses = [
  'checked',
  'disabled',
  'error',
  'focused',
  'focusVisible',
  'required',
  'expanded',
  'selected',
]

// Returns a function which generates unique class names based on counters.
// When new generator function is created, rule counter is reset.
// We need to reset the rule counter for SSR for each request.
//
// It's inspired by
// https://github.com/cssinjs/jss/blob/4e6a05dd3f7b6572fdd3ab216861d9e446c20331/src/utils/createGenerateClassName.js
export default function createGenerateClassName(options = {}) {
  const {
    disableGlobal = false, productionPrefix = 'jss', seed = '',
  } = options
  const seedPrefix = seed === '' ? '' : `${seed}-`
  let ruleCounter = 0

  const getNextCounterId = () => {
    ruleCounter += 1
    if (process.env.NODE_ENV !== 'production') {
      if (ruleCounter >= 1e10) {
        // eslint-disable-next-line no-console
        console.warn(
          [
            'Material-UI: You might have a memory leak.',
            'The ruleCounter is not supposed to grow that much.',
          ].join(''),
        )
      }
    }
    return ruleCounter
  }

  return (rule, styleSheet) => {
    const { name } = styleSheet.options

    // Is a global static MUI style?
    if (name && name.indexOf('Mui') === 0 && !styleSheet.options.link && !disableGlobal) {
      // We can use a shorthand class name, we never use the keys to style the components.
      if (pseudoClasses.indexOf(rule.key) !== -1) {
        return `Mui-${rule.key}` // Supposed to return here
      }

      const prefix = `${seedPrefix}${name}-${rule.key}`

      return prefix // Supposed to return here
    }

    // if (process.env.NODE_ENV === 'production') {
    //   return `${seedPrefix}${productionPrefix}${getNextCounterId()}`
    // }

    const suffix = `${rule.key}-${getNextCounterId()}`

    // Help with debuggability.
    if (styleSheet.options.classNamePrefix) {
      return `${seedPrefix}${styleSheet.options.classNamePrefix}-${suffix}` // Supposed to return here
    }
    // eslint-disable-next-line no-console
    console.error('Material UI in widget is not supposed to reach this. If it does, Open a ticket and resolve it 35429-MUI-CSS')

    return `${seedPrefix}${suffix}`
  }
}
