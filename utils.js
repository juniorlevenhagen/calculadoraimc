export function getImageUrl(imageId, size = 's') {
  return (
    'https://i.imgur.com/' +
    imageId +
    size +
    '.jpg'
  );
}


// function Imc() {
//   const [altura, setAltura] = useState();
//   const [peso, setPeso] = useState();
//   const alt = altura * altura;

//   return (
//     <div className="container">
//       <form action="">
//         <input
//           type="number"
//           value={altura}
//           onChange={(e) => setAltura(e.target.value)}
//           name="name"
//           id="altura"
//           placeholder="Digite o seu altura"
//         />
//         <input
//           type="number"
//           value={peso}
//           onChange={(e) => setPeso(e.target.value)}
//           name="name"
//           id="peso"
//           placeholder="Digite o seu peso"
//         />
//         <h1>{peso / alt * 10000}</h1>

//         <h3>IMC - CLASSIFICAÇÃO:</h3>
//         <p>

// Menor que 18.5 - Abaixo do peso <br/>
// Entre 18.5 e 24.9 - Peso normal<br/>
// Entre 25.0 e 29.9 - Pré-obesidade<br/>
// Entre 30.0 e 34.9 - Obesidade Grau 1<br/>
// Entre 35.0 e 39.9 - Obesidade Grau 2<br/>
// Acima de 40 - Obesidade Grau 3</p>
//       </form>
//     </div>
//   );
// }
