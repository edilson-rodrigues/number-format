
import { formatMoney } from '../format-money';

describe('formatMoney', () => {

  it('should format a valid number string if you enter the correct value', () => {
    const format = formatMoney('1.000,00');
    expect(format).toBe('1.000,00');
  });

  it('should format a valid number string if you enter only numbers and comma', () => {
    const format = formatMoney('1000,00');
    expect(format).toBe('1.000,00');
  });

  it('should format a valid number string if you enter only numbers', () => {
    const format = formatMoney('1000');
    expect(format).toBe('10,00');
  });

  it('should format a valid number string if you enter letters and numbers', () => {
    const format = formatMoney('12Ed');
    expect(format).toBe('0,12');
  });

  it('should format a valid number string if input enter the value with prefix', () => {
    const format = formatMoney('R$ 1.000,00');
    expect(format).toBe('1.000,00');
  });

  it('should return an empty string if the input is a letter', () => {
    const format = formatMoney('a');
    expect(format).toBe('');
  });

  it('should format a valid number string with two decimal places', () => {
    const result = formatMoney('1234567.89');
    expect(result).toEqual('1.234.567,89');
  });

  it('should format a valid number string with no decimal places', () => {
    const result = formatMoney('1234567');
    expect(result).toEqual('12.345,67');
  });

  it('should return an empty string if the input is not a string', () => {
    const result = formatMoney(1234567.89);
    expect(result).toEqual('');
  });

  it('should return an empty string if the input is an empty string', () => {
    const result = formatMoney('');
    expect(result).toEqual('');
  });

  it('should format a valid number if you enter commas and incorrect points', () => {
    const result = formatMoney('12,34.567');
    expect(result).toEqual('12.345,67');
  });
});

