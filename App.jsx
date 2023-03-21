import React, { useState } from "react";

export function MeuEvento() {
  const [peso, setPeso] = useState(0);
  const [altura, setAltura] = useState(0);
  const [result, SetResult] = useState(0);



  function calculaImc(e) {
    e.preventDefault();
    const imc = peso / (altura * altura);
    SetResult(imc);
  }
  return (
    <div className="container">
      <form action="">
        <div>
          <p>Peso:</p>
          <input
            type="number"
            name="peso"
            id="peso"
            placeholder="Peso"
            value={peso}
            onChange={(e) => setPeso(e.target.value)}
          />
        </div>
        <div>
          <p>Altura:</p>
          <input
            type="number"
            name="altura"
            id="altura"
            placeholder="Altura"
            value={altura}
            onChange={(e) => setAltura(e.target.value)}
          />
          <button onClick={calculaImc}>Calcular</button>
        </div>
        <h1>Seu IMC é de: {result.toFixed(2)}</h1>
      </form>
    </div>
  );
}

export default MeuEvento;
