import { View } from 'react-native'
import React from 'react'

// Styled-Component
import { Container, Box, TextInput, Text } from './styles'

const Input = ({ icon, label, keybordType = 'default', onChange, placeholder, value = '', backgroundColor = 'white', styleContainer }) => {
  return (
    <Container style={styleContainer}>
      <Text size={16}>{label}</Text>
      <Box>
        {icon && icon}
        <TextInput
          keybordType={keybordType}
          backgroundColor={backgroundColor}
          onChangeText={value => onChange(value)}
          placeholder={placeholder}
          hasIcon={icon ? true : false}
        />
      </Box>
    </Container>

  )
}

export default Input