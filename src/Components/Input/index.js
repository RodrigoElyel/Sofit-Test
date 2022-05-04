import { View, Text } from 'react-native'
import React from 'react'

// Styled-Component
import { Container, TextInput } from './styles'

const Input = ({icon, keybordType='default', onChange, placeholder, value='', backgroundColor='white', styleContainer}) => {
  return (
    <Container style={styleContainer}>
      {icon && icon}
      <TextInput 
        keybordType={keybordType}
        backgroundColor={backgroundColor}
        onChangeText={value => onChange(value)} 
        placeholder={placeholder}
        hasIcon={icon ? true : false}
      />
    </Container>
  )
}

export default Input