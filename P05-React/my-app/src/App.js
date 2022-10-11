import './App.css';
import React, {useState} from 'react'; //Biblioteca do React para gerenciamento de estados
import carrinho from './images/carrinho.png'

function App() {

  //Constante para armazenamento e mudança do estado
  const [count, setCount] = useState(0);

  //Função responsável por incrementar o contador
  function increment() {
    setCount(count + 1)
  };

  //Função para limpar o carrinho (zerar o contador)
  function clear() {
    setCount(0)
  }

  return (
    <div className="App">
      <img id="carrinho-img" src={carrinho} alt="imagem de um carrinho de compras"/>
      <div id="carrinho-text">Produtos: <strong>{count}</strong></div>
      <br/>
      {/*ao clicar no botão chamará a função de incrementação*/}
      <button onClick={increment}>Colocar no carrinho</button>
      <br/>
      <button onClick={clear}>Limpar carrinho</button>
    </div>
  );
}

export default App;
