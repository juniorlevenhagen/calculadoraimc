import React, { useState } from "react";

export function MeuEvento() {
  const [peso, setPeso] = useState("");
  const [altura, setAltura] = useState("");
  const [result, SetResult] = useState(0);
  const [nivel, setNivel] = useState("");

  function limpar(e) {
    e.preventDefault();

    setPeso(0);
    setAltura(0);
    SetResult(0);
    setNivel("");
  }

  const handleKeyPress = (event) => {
    // Verifica se o caractere digitado é um caractere especial
    if (event.key === ",") {
      event.preventDefault();
    }
  };

  function calculaImc(e) {
    e.preventDefault();

    const imc = peso / (altura * altura);

    if (isNaN(imc)) return alert("Digite um número válido!");
    if (imc > 18.5 && imc < 24.99)
      setNivel(
        <div
          className="minha-div flex justify-center bg-green-200"
          height="12px"
        >
          Seu peso está normal
        </div>
      );
    if (imc > 25.0 && imc < 29.99)
      setNivel(
        <div
          className="minha-div1 flex justify-center bg-pink-200"
          height="12px"
        >
          Você está com sobrepeso
        </div>
      );
    if (imc > 30.0 && imc < 34.99)
      setNivel(
        <div
          className="minha-div3 flex justify-center bg-blue-400"
          height="12px"
        >
          {" "}
          Obesidade grau I
        </div>
      );
    if (imc > 35.0 && imc < 39.99)
      setNivel(
        <div
          className="minha-div3 flex justify-center bg-orange-300"
          height="12px"
        >
          {" "}
          Obesidade grau II
        </div>
      );
    if (imc > 40.0)
      setNivel(
        <div
          className="minha-div3 flex justify-center bg-red-600"
          height="12px"
        >
          {" "}
          Obesidade grau III
        </div>
      );
    SetResult(imc);
  }
  return (
    <div>
      <form className="p-4 py-2">
        <div className="p-3 py-2">
          <p className="text-white">Peso:</p>
          <input
            className="w-64 bg-blue-100 enabled:hover:border-gray-400 disabled:opacity-75 p-2 "
            type=""
            name="peso"
            id="peso"
            placeholder="Exemplo 70.5"
            value={peso}
            onKeyDown={handleKeyPress}
            onChange={(e) => setPeso(e.target.value)}
          />
        </div>
        <div className="p-3 py-1">
          <p className="text-white">Altura:</p>
          <input
            className="w-64 bg-blue-100 enabled:hover:border-gray-400 disabled:opacity-75 p-2 "
            type=""
            height="10px"
            name="altura"
            id="altura"
            placeholder="Exemplo 1.79"
            value={altura}
            onKeyDown={handleKeyPress}
            onChange={(e) => setAltura(e.target.value)}
          />
          <div className="flex space-x-1">
            <button
              className=" ml-6 border-blue-500 bg-blue-500 text-white font-bold py-2 px-4 rounded m-3"
              onClick={calculaImc}
            >
              Calcular
            </button>
            <button
              className=" ml-6 border-blue-500 bg-blue-500 text-white font-bold py-2 px-4 rounded m-3 "
              onClick={limpar}
            >
              Limpar
            </button>
          </div>
          <span>{nivel}</span>
        </div>
        <h1 className="text-3xl font-bold text-white">
          Seu IMC é de: {result.toFixed(2)}
        </h1>
      </form>
    </div>
  );
}

export default MeuEvento;
