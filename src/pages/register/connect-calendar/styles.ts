import { styled, Heading, Text } from '@ignite-ui/react'

export const Container = styled('main', {
  maxWidth: 572,
  padding: '0 $4',
  margin: '$20 auto $4',
})

export const Header = styled('div', {
  padding: '0 $6',

  [`> ${Heading}`]: {
    lineHeight: '$base',
  },

  [`> ${Text}`]: {
    color: '$gray200',
    marginBottom: '$6',
  },

  '@media(max-width: 600px)': {
    padding: '$4',
    width: '100%',

    [`${Heading}`]: {
      display: 'block',
      fontSize: '$4xl',
      textAlign: 'center',
    },

    [`${Text}`]: {
      fontSize: '$xs',
      textAlign: 'center',
    },
  },
})
