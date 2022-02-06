import { useState } from 'react';
import convertNumber from '../helper/convertNumber';

const Form = () => {
  const [number, setNumber] = useState(null);
  const [calculatedNumber, setCalculatedNumber] = useState(null);

  return (
    <div className="Form">
      <form>
        <label>Enter a Number</label>
        <input
          type="number"
          required
          value={number}
          onChange={e => setNumber(e.target.value)}
        />
        <div className="controls-container">
          <select>
            <option value="">--Select an option--</option>
            <option value="Binary">Binary</option>
          </select>
          <button onClick={() => convertNumber(number)}>Convert</button>
          <button onClick={() => setNumber(null)}>Clear</button>
          <input type="number" readOnly value={calculatedNumber} />
        </div>
      </form>
    </div>
  );
};

export default Form;
