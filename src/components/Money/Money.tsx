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


  const showNumbers = () => {
    const number = value.replace(',', '.').replace('.', '');

    const numbers = {
      value: Number(number),
      formatted: value,
    }

    console.log(numbers);

    alert(`Value: ${numbers.value}\nFormatted: ${numbers.formatted}`);
  }

  return (
    <div>
      <label>
        Money:
        <input type="text" value={value} onChange={handleChange} />
      </label>
      <button onClick={showNumbers}>Show numbers</button>
    </div>
  );
}

export default Money;