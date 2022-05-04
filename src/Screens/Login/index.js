import { View, Text } from 'react-native'
import React from 'react'

// Components
import Input from '../../Components/Input'
import Screen from '../../Components/Screen'



const LoginScreen = () => {

  const [email, setEmail] = React.useState('');

  console.log(email)


  return (
    <View>
      <Input
        styleContainer={{ marginTop: 8 }}
        placeholder="email"
        value={email}
        onChange={value => setEmail(value)}
      />
    </View>
  )
}

export default LoginScreen