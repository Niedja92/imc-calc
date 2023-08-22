//calcular o IMC do usuário com as informações do usuário
import { data } from "./components/data/data";
import { useState } from "react";
import ImcCalc from "./components/ImcCalc";

import "./App.css"
import ImcTable from "./components/ImcTable";

function App() {
  //4º cria outra função para executar a condição, que precisa ser executada pelo compnente filho
  const calcImc = (e, height, weight) => {
    e.preventDefault()

    if (!weight || !height) return;

    //5º variáveis criadas para separar as vírgulas dos pontos
    const weightFloat = +weight.replace(",", ".");
    const heightFloat = +height.replace(",", ".");

    //6º variáve criada para calcular o imc
    const imcResult = (weightFloat / (heightFloat * heightFloat)).toFixed(1);

    setImc(imcResult);

    //7º fazendo o forEach para puxar as informações e aparecer as respectivas cores através das classes
    data.forEach((item) => {
      if (imcResult >= item.min && imcResult <= item.max) {
        setInfo(item.info);
        setInfoClass(item.infoClass);
      }
    });

    if (!info) return;
  }

  //8º resetar a calculadora
  const resetCalc = (e) => {
    e.preventDefault()

    setImc("")
    setInfo("")
    setInfoClass("")
  };

  //2º cria os useStates das do imc, informações e estado do paciente
  const [imc, setImc] = useState("");
  const [info, setInfo] = useState("");
  const [infoClass, setInfoClass] = useState("");

  //1º dentro da função global App, é adicionado os componentes

  //3º dentro dessa div, usando if ternário, é criado a condição para o cáculo do imc. "Se não tiver imc, vou fazer uma coisa, se tiver, vou fazer outra".
  return (
    <div className="container">
      {!imc ? (
        <ImcCalc calcImc={calcImc} />
      ) : (
        <ImcTable
          data={data}
          imc={imc}
          info={info}
          infoClass={infoClass}
          resetCalc={resetCalc}
        />
      )}
    </div>
  );
}

export default App
