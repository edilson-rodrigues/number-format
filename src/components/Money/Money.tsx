import { ChangeEvent, useState } from 'react';
import { formatMoney } from '../../utils';


function Money() {
  const [value, setValue] = useState('1234567.8');

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    const newValue = formatMoney(event.target.value);
    setValue(newValue);
  };

  return (
    <div>
      <label>
        Money:
        <input type="text" value={value} onChange={handleChange} /* onBlur={handleBlur} */ />
      </label>
      <button onClick={() => console.log(value)}>Show console</button>
    </div>
  );
}

export default Money;