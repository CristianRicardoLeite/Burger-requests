import React from "react";
import { Container, UpperContainer, LowerContainer, LabelStyle, RequestSelect, Option, ClientInput } from "./styles";
import Titles from "../../components/Title";
import RequestButton from "../../components/Button";
import ContainerContent from "../../components/ContainerContent";
import MultiSelect from "../../components/Multiselect"
import Logo from "./assets/logo-burger-page1.svg" 

function Page1() {

  const Menu = [ 
    { Option: 'X-Burger' },
    { Option: 'X-Salada'},
    { Option: 'X-Picanha' },
    { Option: 'X-Calabresa' },
    { Option: 'X-Coração'},
    { Option: 'X-Bacon'},
    { Option: 'X-Tudo' },
    { Option: 'Batata-frita' },
    { Option: 'Polenta-frita' }
  ]

  return (
    <Container>
      <ContainerContent>
        <UpperContainer>
          <img alt="food-images" src={Logo} />
          <Titles> Faça seu pedido! </Titles>
        </UpperContainer>
        <LowerContainer>
          <LabelStyle> Pedido </LabelStyle>
          <MultiSelect />
          <LabelStyle> Nome do Cliente </LabelStyle>
          <ClientInput></ClientInput>
          <RequestButton RedBackground={true}> Novo Pedido</RequestButton>
        </LowerContainer>
      </ContainerContent>
    </Container>
  )
}

export default Page1;
