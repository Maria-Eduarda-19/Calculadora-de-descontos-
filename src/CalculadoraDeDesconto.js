class CalculadoraDeDesconto {
  calcular(valor, isVIP = false) {
    if (valor < 0) {
      throw new Error("Valor não pode ser negativo");
    }

    let desconto = 0;

    if (valor < 100) {
      desconto = 0;
    } else if (valor <= 500) {
      desconto = 0.10;
    } else {
      desconto = 0.20;
    }

    if (isVIP) {
      desconto += 0.05;
    }

    return Number((valor - valor * desconto).toFixed(2));
  }
}

// 👇 necessário pro Jest
if (typeof module !== "undefined") {
  module.exports = CalculadoraDeDesconto;
}