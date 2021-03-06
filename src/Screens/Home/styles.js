import styled from "styled-components/native";
import colors from '../../Styles/colors'

export const Container = styled.TouchableOpacity`
    height: 60px;
    min-width: 250px;
    padding: 12px;
    margin: 10px 0px;
    align-items: center;
    background-color: #fff;
    border-radius: 6px;
    border-width: 1px;
    border-color: ${() => colors.greenStrong};
    flex-direction: row;
    justify-content: space-evenly;

`

export const Header = styled.View`
    padding: 2px;
    border-radius: 8px;
    justify-content: center;
    align-items: center;
    background-color: ${() => colors.gray}
`

export const Body = styled.View`
    flex-direction: row;
    width: 100%;
    justify-content: space-around;
    align-items: center;
`

export const Text = styled.Text`
    margin: 20px 0px;
    align-self: center;
    color: ${() => colors.greenStrong};
    font-weight: ${({ bold }) => (bold ? 'bold' : 'normal')};
    font-size: ${({size}) => size ? `${size}px` : '18px'};
`