import { ChangeEvent, useEffect, useState } from 'react';
import { formatMoney } from '../../utils';

function Money() {
  const [value, setValue] = useState('100000');

  useEffect(() => {
    if (value) {
      setValue(formatMoney(value))
    }
  }, [value]);

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    setValue(event.target.value);
  };

  return (
    <div>
      <label>
        Money:
        <input type="text" value={value} onChange={handleChange} />
      </label>
      <button onClick={() => console.log(value)}>Show console</button>
    </div>
  );
}

export default Money;