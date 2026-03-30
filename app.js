// 👇 copia a classe aqui (frontend não entende require)
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

// 👇 função do botão
function executarCalculo() {
  const valor = parseFloat(document.getElementById('valor').value);
  const isVIP = document.getElementById('vip').checked;

  const calculadora = new CalculadoraDeDesconto();

  try {
    const resultado = calculadora.calcular(valor, isVIP);

    document.getElementById('resultado').innerText =
      `Valor final: R$ ${resultado}`;
  } catch (erro) {
    document.getElementById('resultado').innerText =
      `Erro: ${erro.message}`;
  }
}