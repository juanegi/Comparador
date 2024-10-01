import React, { useState } from 'react';
import './App.css';  // Importar el archivo CSS

const ComparadorNumeros = () => {
  const [numero1, setNumero1] = useState('');
  const [numero2, setNumero2] = useState('');
  const [numero3, setNumero3] = useState('');
  const [resultado, setResultado] = useState('');

  const compararNumeros = () => {
    const n1 = parseFloat(numero1);
    const n2 = parseFloat(numero2);
    const n3 = parseFloat(numero3);
    const mayor = Math.max(n1, n2, n3);

    if (n1 === n2 && n2 === n3) {
      setResultado(`Todos los números son iguales. El mayor es: ${mayor}`);
    } else if (n1 === n2 || n1 === n3 || n2 === n3) {
      setResultado(`Dos de los números son iguales. El mayor es: ${mayor}`);
    } else {
      setResultado(`Los números son diferentes. El mayor es: ${mayor}`);
    }
  };

  return (
    <div className="container">
      <h1>Comparador de Números</h1>
      <div className="input-group">
        <label>
          Número 1:
          <input
            type="number"
            value={numero1}
            onChange={(e) => setNumero1(e.target.value)}
          />
        </label>
      </div>
      <div className="input-group">
        <label>
          Número 2:
          <input
            type="number"
            value={numero2}
            onChange={(e) => setNumero2(e.target.value)}
          />
        </label>
      </div>
      <div className="input-group">
        <label>
          Número 3:
          <input
            type="number"
            value={numero3}
            onChange={(e) => setNumero3(e.target.value)}
          />
        </label>
      </div>
      <button className="compare-button" onClick={compararNumeros}>Comparar</button>
      {resultado && <h2>Resultado: {resultado}</h2>}
    </div>
  );
};

export default ComparadorNumeros;
