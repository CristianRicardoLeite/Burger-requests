import React from "react";
import Select from "react-select";
import "./styles.css";

function MultipleSelect() {

    const Menu = [
        { value: "R$ 25", label: "X-Burger" },
        { value: "X-Salada", label: "X-Salada" },
        { value: "X-Picanha", label: "X-Picanha" },
        { value: "R$ 25", label: "X-Calabresa" },
        { value: "X-Coração", label: "X-Coração" },
        { value: "X-Bacon", label: "X-Bacon" },
        { value: "X-Tudo", label: "X-Tudo" },
        { value: "Batata-frita", label: "Batata-frita" },
        { value: "Polenta-frita", label: "Polenta-frita" },
    ]

    console.log(Menu)

    return (

        <>
            <Select
                isMulti
                options={Menu}
            />
        </>
    )
}

export default MultipleSelect