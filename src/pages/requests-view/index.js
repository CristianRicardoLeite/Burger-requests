import React from "react";
import { Container, UpperContainer, LowerContainer } from "./styles";
import Titles from "../../components/Title";
import RequestButton from "../../components/Button";
import ContainerContent from "../../components/ContainerContent";
import Foodbag from "./assets/burgerbag-requestspage.svg"

function PageUsers() {


  return (
    <Container>
      <ContainerContent>
        <UpperContainer>
          <img alt="foodbag" src={Foodbag} />
          <Titles> Faça seu pedido! </Titles>
        </UpperContainer>
        <LowerContainer>
          <RequestButton>Voltar</RequestButton>
        </LowerContainer>
      </ContainerContent>
    </Container>
  )
}

export default PageUsers;