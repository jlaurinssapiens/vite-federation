import mustacheRender from '../lib/mustache/mustache'

const customCssFileRef = document.createElement('style')
customCssFileRef.setAttribute('data-meta', 'custom-css-global')
document.head.appendChild(customCssFileRef)

const customCssStyleRef = document.createElement('style')
customCssStyleRef.setAttribute('data-meta', 'custom-css-global')
document.head.appendChild(customCssStyleRef)

export const addCustomCss = (customCss) => {
  customCssStyleRef.innerHTML = mustacheRender(customCss)
}

export const addCustomCssFile = (url) => {
  const code = `@import url("${url}")`
  customCssStyleRef.innerHTML = mustacheRender(code)
}
