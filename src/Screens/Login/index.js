import { View, Text, StatusBar } from 'react-native'
import React from 'react'

// Components
import Input from '../../Components/Input'
import Screen from '../../Components/Screen'
import Button from '../../Components/Button'

// API
import { login } from '../../Api/Auth'

// ALERTS
import { showMessage, hideMessage } from "react-native-flash-message";

import colors from '../../Styles/colors'



const LoginScreen = () => {

  const [email, setEmail] = React.useState('')

  console.log(email)

  const autheticate = async () => {

    const response = await login(email)

    if (response) {
      showMessage({
        message: "Sucesso",
        description: "Login efetuado!",
        type: "success",
        statusBarHeight: StatusBar.currentHeight,
        floating: true,
      });

      await AsyncStorage.setItem('@storage:user', JSON.stringify(response))
    } else {
      showMessage({
        message: "Falha",
        description: "Não foi possível realizar o login. Verifique sua conexão!",
        type: "danger",
        statusBarHeight: StatusBar.currentHeight,
        floating: true,
      });
    }

  }

  const submit = () => {

    console.log(!email.length)

    if (!email.length) {
      showMessage({
        message: "Falha",
        description: "Insira um email válido!",
        type: "danger",
        statusBarHeight: StatusBar.currentHeight,
        floating: true,
      });
    } else {
      autheticate()
    }
    
  }

  return (
    <Screen style={{justifyContent: 'center'}}>
      <Input
        styleContainer={{ marginTop: 8, width: '90%', alignSelf: 'center' }}
        placeholder="email"
        value={email}
        onChange={value => setEmail(value)}
        keybordType="email-address"
      />
      <Button
        styleContainer={{ marginTop: 8, width: '90%', alignSelf: 'center', backgroundColor: colors.gold }}
        label="Entrar"
        onPress={() => submit()}
      />

    </Screen>
  )
}

export default LoginScreen