import { styled, Heading, Text, Box } from '@ignite-ui/react'

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

export const Form = styled(Box, {
  display: 'flex',
  flexDirection: 'column',
  gap: '$4',
  marginTop: '$6',

  label: {
    display: 'flex',
    flexDirection: 'column',
    gap: '$2',
  },
})

export const ErrorMessage = styled(Text, {
  color: '#F75A68',
})
