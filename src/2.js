import React, { useState, useRef } from 'react';

const ControlledInput = () => {
  const [inputValue, setInputValue] = useState('');
  const [selectValue, setSelectValue] = useState('a');

  const handleInputChange = (event) => {
    setInputValue(event.target.value);
  };

  const handleSelectChange = (event) => {
    setSelectValue(event.target.value);
  };

  return (
    <div>
      <textarea
        value={inputValue}
        onChange={handleInputChange}
        placeholder="Введите текст"
      />
      <p>textarea: {inputValue}</p>

      <select value={selectValue} onChange={handleSelectChange}>
        <option value="a">a</option>
        <option value="b">b</option>
      </select>
      <p>Выбранно: {selectValue}</p>
    </div>
  );
  
  };
  const UncontrolledInput = () => {
    const textAreaRef = useRef(null);
    const selectRef = useRef(null);
  
    const handleButtonClick = () => {
      alert(`${textAreaRef.current.value}`);
      alert(`${selectRef.current.value}`);
    };
  
    return (
      <div>
        <textarea ref={textAreaRef} placeholder="Введите текст" />
        <select ref={selectRef}>
          <option value="a">a</option>
          <option value="b">b</option>
          <option value="c">c</option>
        </select>
        <button onClick={handleButtonClick}>Получить значения</button>
      </div>
    );
  };
  function App() {
    return (
      <div>
        <ControlledInput />
        <UncontrolledInput />
      </div>
    );
  }
  
  export default App;