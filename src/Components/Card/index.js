import { View, Image } from 'react-native'
import React from 'react'

// Moment
import moment from 'moment'

// Styled-Component
import { Container, Text, Center, Left, Right } from './styles'

const Card = ({ expense, onPress, onPressRemove, styleContainer }) => {

  return (
    <Container
      style={styleContainer}
      onPress={onPress}
    >

      <Left>
        <Image source={require('../../Assets/Images/money.png')} style={{ alignSelf: 'center' }} resizeMode="contain" />


      </Left>

      <Center>
        <Text size={14} bold>Descrição:</Text>
        <Text size={14} marginBottom={10}>{expense.item}</Text>



        <Text size={14} bold>Data da despesa:</Text>
        <Text size={14} marginBottom={10}>
          {moment(expense.date).add(1, 'days').format('DD/MM/YYYY')}
        </Text>

        <Text size={14} bold>Valor:</Text>
        <Text size={14} marginBottom={10} >{expense.value.toLocaleString('pt-br', { style: 'currency', currency: 'BRL' })}</Text>
      </Center>

      <Right onPress={onPressRemove}>
        <Image source={require('../../Assets/Images/trash.png')} style={{ alignSelf: 'center' }} resizeMode="contain" />
      </Right>

    </Container>
  )
}

export default Card