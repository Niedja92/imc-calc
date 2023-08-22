//controlar altura e peso

import { useState } from "react";
import Button from "../components/Button"

import "./ImcCalc.css";

//1º criar um const ou function com as informações serão retornadas (return)
//7º essa props calcImc será executada no botão calcular através de uma action
const ImcCalc = ({ calcImc }) => {
    //definirndo os Hooks para manipulação de dados, que serão alterados/atualizados no valor onChange, dentro do retorno da função

    //3º criar o useState com estas constantes
    const [height, setHeight] = useState("");
    const [weight, setWeight] = useState("");

    //4º Limpar inputs
    const clearForm = (e) => {
        e.preventDefault() //usado para não executar o padrão (o submit do formulário)
        setWeight(""); //os setHeight e Weight ficam vazios, porque estão limpando os dados
        setHeight("");
    }

    //6º função criada para dígitos válidos, ou seja, se for número não aceita letras, vai de 0 a 9, incluindo a vírgula para separar as casas decimais.
    const validDigits = (text) => {
        return text.replace(/[^0-9,]/g, "");
    }

    //5º função criada para não aceitar caracteres inválidos nos inputs
    const handleHeightChange = (e) => {
        const updatedValue = validDigits(e.target.value);

        setHeight(updatedValue);
    }

    //5º função criada para não aceitar caracteres inválidos nos inputs
    const handleWeightChange = (e) => {
        const updatedValue = validDigits(e.target.value);

        setWeight(updatedValue);
    }

    //1º
    return <div id="calc-container">
        <h2>Calculadora de IMC</h2>
        <form id="imc-form">
            <div className="form-inputs">
                <div className="form-control">
                    <label htmlFor="height">Altura:</label>
                    <input
                        type="text"
                        name="height"
                        id="height"
                        placeholder="Exemplo 1,75"
                        //3º usar o atributo onChange para mapear a mudança quando o usuário digitar, nesse caso, a altura. O (e.target.value) é utilizado para capturar o que foi digitado em um campo
                        onChange={(e) => handleHeightChange(e)}
                        value={height}
                    >
                    </input>
                </div>
                <div className="form-control">
                    <label htmlFor="weight">Peso:</label>
                    <input
                        type="text"
                        name="weight"
                        id="weight"
                        placeholder="Exemplo 1,75"
                        //3º
                        onChange={(e) => handleWeightChange(e)}
                        value={weight}
                    >
                    </input>
                </div>
            </div>
            {/* 2º criar os componentes de Buttons em um outro arquivo */}
            <div className="action-control">
                <Button
                    id="calc-btn"
                    text="Calcular"
                    action={(e) => calcImc(e, height, weight)}
                />
                <Button id="clear-btn" text="Limpar" action={clearForm} />
                {/* a função action é incluída no componente Button, para que quando o mesmo for clicado, execute o comando desejado*/}
            </div>
        </form>
    </div>
}

export default ImcCalc