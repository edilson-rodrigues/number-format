export function parseMoney(value: string): number {

  const number = value.replace(/[^\d]/g, '')

  const integerPart = number.slice(0, number.length - 2) || '0';

  const decimalPart = number.slice(-2) || '00';

  return parseFloat(`${integerPart}.${decimalPart}`);
}

/* const handleBlur = () => {
    const parsedValue = parseMoney(value);
    setValue(formatMoney(parsedValue.toFixed(2).toString()));
  };
 */