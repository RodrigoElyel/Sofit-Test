import { View, TouchableOpacity, StatusBar } from 'react-native'
import React from 'react'
import { Container, Text } from './styles'

// API
import { expensesByID } from '../../Api/Expenses'

// Components
import Screen from '../../Components/Screen'
import Button from '../../Components/Button'

// Moment
import moment from 'moment'

// Styles
import colors from '../../Styles/colors'

// ALERTS
import { showMessage, hideMessage } from "react-native-flash-message";



const DetailsScreen = ({ route, navigation }) => {


    const expense = route.params.expense
    const user = route.params.user

    // Em casos que a busca geral não traz todas as informações e é preciso usar uma buscar por ID como na função getExpense
    // Como as informações que são resgatas e passadas por PROPS são as mesma, não é necessário!
    const getExpense = async () => {

        const response = await expensesByID(expense._id, user.token)

        if (response) {
            console.log(response, 'expense')
        } else {
            showMessage({
                message: "Falha",
                description: "Não foi possível recupear a despesa. Verifique sua conexão!",
                type: "danger",
                statusBarHeight: StatusBar.currentHeight,
                floating: true,
            });
        }

    }

    React.useEffect(() => {
        // getExpense()
    }, [])


    return (
        <Screen>
            <Container>
                <Text>Dia: {moment(expense.data).format('DD.MM.YYYY')}</Text>
                <Text>Despesa: {expense.item}</Text>
                <Text>Valor: {expense.value}</Text>
                <Text>Informações adicionais: {expense.value}</Text>
            </Container>

            <Button
                styleContainer={{ marginTop: 8, alignSelf: 'center', backgroundColor: colors.gold }}
                label="Editar"
                onPress={() => submit()}
            />
            <Button
                styleContainer={{ marginTop: 16, alignSelf: 'center', backgroundColor: colors.laranja }}
                label="Excluir"
                onPress={() => submit()}
            />
        </Screen>
    )
}

export default DetailsScreen