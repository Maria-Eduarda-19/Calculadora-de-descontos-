const CalculadoraDeDesconto = require('../src/CalculadoraDeDesconto');

describe('CalculadoraDeDesconto', () => {
  const calc = new CalculadoraDeDesconto();

  test('Sem desconto', () => {
    expect(calc.calcular(50)).toBe(50);
  });

  test('Valor exatamente 100', () => {
  expect(calc.calcular(100)).toBe(90);
});

  test('Desconto de 10%', () => {
    expect(calc.calcular(200)).toBe(180);
  });

  test('Desconto de 20%', () => {
    expect(calc.calcular(600)).toBe(480);
  });

  test('Cliente VIP', () => {
    expect(calc.calcular(200, true)).toBe(170);
  });
  
  test('Valor negativo', () => {
    expect(() => calc.calcular(-100)).toThrow();
  });
});