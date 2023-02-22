import { globalCss } from '@ignite-ui/react'

export const bootCss = globalCss({
  '*': {
    padding: 0,
    boxSizing: 'border-box',
    margin: 0,
  },
  body: {
    backgroundColor: '$gray900',
    color: '$gray100',
    '-webkit-font-smoothing': 'antialiased',
  },
})
