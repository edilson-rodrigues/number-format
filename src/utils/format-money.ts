
export function formatMoney(value: string | number,): string {

  if (typeof value !== 'string' || value === '') return '';

  const onlyNumber = value.replace(/[^\d]/g, '');

  const number = Number(onlyNumber) / 100;

  const numberFormatted = new Intl.NumberFormat('pt-BR',
    {
      style: 'currency',
      currency: 'BRL'
    })
    .format(number)
    .replace(/[^0-9.,]+/g, '')

  return numberFormatted === '0,00' ? '' : numberFormatted;
}

/* const integerPart = number.slice(0, -2);

 const decimalPart = number.slice(-2) && `,${number.slice(-2)}`;

 const formattedIntegerPart = integerPart.replace(/(\d)(?=(\d{3})+$)/g, '$1.'); 

return `${formattedIntegerPart}${decimalPart}`;

*/
