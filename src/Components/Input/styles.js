import styled from "styled-components/native";

export const TextInput = styled.TextInput`
    color: #000;
    width: ${({hasIcon}) => (hasIcon ? "90%" : "100%")};
    font-size: 16px;
    padding: 12px;
    border-radius: 8px;
`

export const Container = styled.View`
    height: 50px;
    border-radius: 8px;
    flex-direction: row;
    background-color: #fff;
    border-width: 1px;
    border-color: #ced4da;
`