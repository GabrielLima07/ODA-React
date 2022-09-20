import React, { useState, useEffect } from 'react';
import './App.css';
import logo from './logo.svg';

function App() {
  // O useState está definindo os padrões de números, operação e resultado
  // Também é responsável por mudar os estados conforme as entradas do usuário (set)
  const [num1, setNum1] = useState(0);
  const [num2, setNum2] = useState(0);
  const [resultado, setResultado] = useState(0);
  const [operacao, setOperacao] = useState("Somar");

  // Função de calcular que terá executará dada operação matemática dependendo da seleção do usuário
  // O parseFloat() permite que números reais sejam trabalhados
  const calcular = () => {
    if (operacao==="Somar")
      return parseFloat(num1) + parseFloat(num2);
    else if (operacao==="Subtrair")
      return parseFloat(num1) - parseFloat(num2);
    else if (operacao==="Multiplicar")
      return parseFloat(num1) * parseFloat(num2);
    else
      return parseFloat(num1) / parseFloat(num2);
  }

  // O useEffect faz alterações desses valores a partir dos que são fornecidos pelo usuário, caso os valores não sejam inseridos ele executará a função com os valores padrões da página
  // Executa a função calcular, definindo o novo resultado dado números e operação
  useEffect(()=>{
    setResultado(calcular());
  }, [num1, num2, operacao]); 

  useEffect(() => {
    document.title = 'P02-React'
  })

  // Variável que contém o nome, posteriormente utilizada para exibição na página
  let nome = "GABRIEL VINICIUS ARAUJO DE LIMA";

  // O onChange detectará quando novas entradas forem fornecidas
  return (
    <div class="App">      
      <h1 id="nome">{nome}</h1>
      <h1> CALCULADORA REACT</h1>
      <img src={logo} id="logo"/>
      
      <label>Primeiro número</label>
      <input 
      type="number"
      value={num1}
      onChange={(e) => setNum1(e.target.value)}>
      </input>

      <label>Segundo número</label>
      <input 
      type="number"
      value={num2}
      onChange={(e) => setNum2(e.target.value)}> 
      </input>

      <select onChange={(e) => setOperacao(e.target.value)}>
        <option>Somar</option>
        <option>Subtrair</option>
        <option>Multiplicar</option>
        <option>Dividir</option>
      </select>

      <label>Resultado {resultado}</label>
    </div>
  );
}

export default App;