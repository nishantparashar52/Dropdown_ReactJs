import { useState } from 'react';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import './App.css';
const options = [
  {
    id: '',
    name: 'Select an Option',
    value: '',
  },
  {
    id: '1',
    name: 'Option 1',
    value: '1',
  },
  {
    id: '2',
    name: 'Option 2',
    value: '2',
  },
  {
    id: '3',
    name: 'Option 3',
    value: '3',
  },
];
function App({ selectCb }) {
  const [option, setOption] = useState('');
  const selectOption = (e) => {
    setOption(e.target.value);
    // cb();
  };

  return (
    <>
      <h1>Basic Dropdown </h1>
      <div className="dropdown-section">
        <label for="dropdown-select" className="dropwdown-label">
          <span className="block color-violet">Label </span>
          <span>{option}</span>
        </label>
        <select
          id="dropdown-select"
          name="dropdown"
          onChange={(e) => selectOption(e)}
        >
          {options.map((option, index) => {
            const { id, name, value } = option;
            return (
              <option value={value} key={id} className="option">
                {name}
              </option>
            );
          })}
        </select>
      </div>
    </>
  );
}

export default App;
