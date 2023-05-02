import './App.css';
import Button from './components/Button';
import Screen from './components/Screen';
import ButtonClear from './components/ButtonClear';
import { useState } from 'react';
import { evaluate } from 'mathjs';

function App() {

  const [input, setInput] = useState('');

  const addInput = val => {
    const lastChar = input.slice(-1);
    if (val.match(/^[*/+-]$/) && input === "") {
      return;
    }
    if (val.match(/[+\-*/]/) && lastChar.match(/[+\-*/]/)) {
      setInput(input.slice(0, -1) + val);
    } else {
      setInput(input + val);
    }
  };

  const calculateResult = () => {
    if (!input) {
      alert("Ingrese valores para empezar el calculo");
      return;
    }
    try {
      const result = evaluate(input);
      setInput(result.toString());
    } catch (error) {
      alert("Ingrese una operación válida");
      setInput('');
    }
  };



  return (
    <div className="App">
      <h1 className='text-center mt-2 mb-2'>Calculadora Reactiva</h1>
      <div className="container">
        <form action="" name="calc" className="calculator">
          <Screen input={input} />
          <ButtonClear handleClick={() => setInput('')} >C</ButtonClear>
          <Button handleClick={addInput}>/</Button>
          <Button handleClick={addInput}>*</Button>
          <Button handleClick={addInput}>7</Button>
          <Button handleClick={addInput}>8</Button>
          <Button handleClick={addInput}>9</Button>
          <Button handleClick={addInput}>-</Button>
          <Button handleClick={addInput}>4</Button>
          <Button handleClick={addInput}>5</Button>
          <Button handleClick={addInput}>6</Button>
          <Button handleClick={addInput} addClass='plus'>+</Button>
          <Button handleClick={addInput}>1</Button>
          <Button handleClick={addInput}>2</Button>
          <Button handleClick={addInput}>3</Button>
          <Button handleClick={addInput}>0</Button>
          <Button handleClick={addInput}>00</Button>
          <Button handleClick={addInput}>.</Button>
          <Button handleClick={calculateResult} addClass='equal'>=</Button>
        </form>
      </div>
    </div>
  );
}

export default App;
