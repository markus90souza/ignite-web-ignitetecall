import { styled, Heading, Text } from '@ignite-ui/react'

export const Container = styled('main', {
  display: 'flex',
  alignItems: 'center',
  gap: '$20',
  maxWidth: 'calc(100vw - (100vw - 1160px) / 2)',
  height: '100vh',
  marginLeft: 'auto',
})

export const Hero = styled('div', {
  maxWidth: 480,
  padding: '0 $10',

  [` > ${Heading}`]: {},

  [` > ${Text}`]: {
    marginTop: '$2',
    color: '$gray200',
  },

  '@media(max-width: 600px)': {
    padding: '$4',
    width: '100%',

    [`${Heading}`]: {
      fontSize: '$6xl',
      textAlign: 'center',
    },

    [`${Text}`]: {
      fontSize: '$sm',
      textAlign: 'center',
    },
  },
})

export const Preview = styled('div', {
  padding: '$8',

  '@media(max-width: 600px)': {
    display: 'none',
  },
})
