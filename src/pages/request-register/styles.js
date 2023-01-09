import styled from "styled-components";

export const Container = styled.div`
    width: 100vw;
    height: 100vh;
    background: rgb(108,8,8);
    background: linear-gradient(0deg, rgba(108,8,8,1) 0%, rgba(227,36,7,0.9248074229691877) 74%);
    display: flex;
    justify-content: center;
    align-items: center;
`

export const UpperContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    gap: 10%;

`



export const LowerContainer = styled.div`
    padding: 36px;
`

export const LabelStyle = styled.label`
font-style: normal;
font-weight: 700;
font-size: 18px;
line-height: 22px;
display: flex;
align-items: center;
margin-left: 20px;
letter-spacing: -0.408px;
color: #EEEEEE;
`


export const RequestSelect = styled.select`
    width: 342px;
    height: 58px;
    background: rgba(255, 255, 255, 0.25);
    border-radius: 14px;
    border: none;
    margin-bottom: 46px;
    flex: none;
    order: 0;
    flex-grow: 0;
    cursor: pointer;
    outline: none;
    font-style: normal;
    font-weight: 300;
    font-size: 18px;
    line-height: 21px;
    color: #FFFFFF;
`

export const Option = styled.option`
    padding: 15px;
    background: rgba(255, 255, 255, 0.25);

`

export const ClientInput = styled.input`
    width: 342px;
    height: 58px;
    padding: 15px;
    background: rgba(255, 255, 255, 0.25);
    border-radius: 14px;
    border: none;
    margin-bottom: 76px;
    flex: none;
    order: 0;
    flex-grow: 0;
    cursor: pointer;
    outline: none;font-style: normal;
    font-weight: 300;
    font-size: 18px;
    line-height: 21px;
    color: #FFFFFF;
`



