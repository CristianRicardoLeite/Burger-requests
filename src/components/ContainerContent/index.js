import React from "react";
import {ContainerContent as ContentContainer} from "./style";

 function ContainerContent(props){
    return <ContentContainer>{props.children}</ContentContainer>
}

export default ContainerContent;