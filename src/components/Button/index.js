import React from "react";
import {Button as RequestButton} from "./style";

export default function Button({children, RedBackground}){
    return <RequestButton RedBackground={RedBackground}>{children}</RequestButton>
}