import styled from "styled-components/native";

export const TextInput = styled.TextInput`
    color: #000;
    width: ${({hasIcon}) => (hasIcon ? "90%" : "100%")};
    font-size: 16px;
    padding: 12px;
    border-radius: 8px;
`

export const Container = styled.View`
    border-radius: 8px;
    flex-direction: column;
`

export const Box = styled.View`
    height: 50px;
    border-radius: 8px;
    flex-direction: row;
    background-color: #fff;
    border-width: 1px;
    border-color: #ced4da;
`

export const Text = styled.Text`
    margin-bottom: 8px;
    font-size: ${({size}) => size ? `${size}px` : '18px'};
`