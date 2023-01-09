import styled from "styled-components";

export const Button = styled.button`
    width: 342px;
    height: 68px;
    border-radius:15px;
    border: none;
    font-style: normal;
    font-weight: 900;
    font-size: 17px;
    line-height: 2px;
    display: flex;
    cursor: pointer;
    justify-content: center;
    align-items: center;
    color: #FFFFFF;
    background: rgba(255, 255, 255, 0.14);
    margin: 0 auto;

    &&:hover{
        opacity: .8;
    }

    &&:active{
        opacity: .6;
    }

${props => props.RedBackground &&`
     
    background: rgb(108,8,8);
    background: linear-gradient(0deg, rgba(108,8,8,1) 0%, rgba(227,36,7,0.9248074229691877) 74%);
    `}
`