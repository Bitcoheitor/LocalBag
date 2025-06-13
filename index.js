function luhnAlgorithm(numero) {
    const n = numero.replace(/\D/g, '');
    let soma = 0;
    let alternar = false;
    for (let i = n.length - 1; i >= 0; i--) {
        let digito = parseInt(n.charAt(i), 10);
        if (alternar) {
            digito *= 2;
            if (digito > 9) digito -= 9;
        }
        soma += digito;
        alternar = !alternar;
    }
    return soma % 10 === 0;
}

function getBandeira(numero) {
    const n = numero.replace(/\D/g, '');

    if (!luhnAlgorithm(n)) return 'Número inválido';

    if (/^4/.test(n)) return 'Visa';
    if (/^(5[1-5]|222[1-9]|22[3-9]\d|2[3-6]\d{2}|27[01]\d|2720)/.test(n)) return 'MasterCard';
    if (/^(4011|4312|4389)/.test(n)) return 'Elo';
    if (/^(34|37)/.test(n)) return 'American Express';
    if (/^(6011|65|64[4-9])/.test(n)) return 'Discover';
    if (/^6062/.test(n)) return 'Hipercard';
    if (/^(300|301|302|303|304|305|36|38|39)/.test(n)) return 'Diners Club';
    if (/^35(2[89]|[3-8][0-9])/.test(n)) return 'JCB';
    if (/^(2014|2149)/.test(n)) return 'enRoute';
    // Aura: não possui faixa exclusiva
    return 'Desconhecida';
}

function validateCreditCrd(cardNumber) {
    const bandeira = getBandeira(cardNumber);
    if (bandeira === 'Número inválido') {
        return bandeira;
    }
    return `O cartão é da bandeira: ${bandeira}`;
}

// Exemplo de uso:
const cardNumber = '4111111111111111'; // Substitua pelo número desejado
const result = validateCreditCrd(cardNumber);
console.log(result);