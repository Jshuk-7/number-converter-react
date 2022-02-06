import { useState } from "react";

const Form = () =>
{
  const [number, setNumber] = useState(null);
  return (
    <div className="Form">
      <form>
        <label>Enter a Number</label>
        <input
          type="number"
          required
          value={number}
          onChange={(e) => setNumber(e.target.value)}
        />
        
      </form>
    </div>
  );
}

export default Form;