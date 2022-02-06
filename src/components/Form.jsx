import { useState } from 'react';
import convertNumberToBinary from '../helper/convertNumber';

const Form = () => {
  const [number, setNumber] = useState('');
  const [calculatedNumber, setCalculatedNumber] = useState('');
  const submitHandler = e =>
  {
    e.preventDefault();
  };
  const clearInputs = () =>
  {
    setNumber('');
    setCalculatedNumber('');
  };

  return (
    <div className="Form">
      <form onSubmit={submitHandler}>
        <label>Enter a Number</label>
        <input
          type="number"
          required
          value={number}
          onChange={e => setNumber(e.target.value)}
        />
        <div className="controls-container">
          <select required>
            <option value="">--Select an option--</option>
            <option value="Binary">Binary</option>
          </select>
          <button onClick={() => setCalculatedNumber(convertNumberToBinary(number))}>Convert</button>
          <button onClick={clearInputs}>Clear</button><br/>
          <input type="number" readOnly value={calculatedNumber} />
        </div>
      </form>
    </div>
  );
};

export default Form;
