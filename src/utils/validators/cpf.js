/* eslint-disable radix */
/* eslint-disable no-param-reassign */
/* eslint-disable no-confusing-arrow */
const isInvalid = (cpf, rest, pos) =>
  rest !== parseInt(cpf.substring(pos, pos + 1));

const sumDigit = (cpf, digit) =>
  11 -
  (cpf
    .substring(0, digit)
    .split("")
    .reduce((acc, curr, index) => {
      acc += parseInt(curr) * (digit + 1 - index);
      return acc;
    }, 0) %
    11);

const getRest = sum => (sum > 9 ? 0 : sum);

export default cpf => {
  cpf = cpf.replace(/[\D]/gi, "");

  // Elimina CPFs invalidos conhecidos
  if (
    cpf === "00000000000" ||
    cpf === "11111111111" ||
    cpf === "22222222222" ||
    cpf === "33333333333" ||
    cpf === "44444444444" ||
    cpf === "55555555555" ||
    cpf === "66666666666" ||
    cpf === "77777777777" ||
    cpf === "88888888888" ||
    cpf === "99999999999"
  ) {
    return false;
  }

  if (cpf.length < 11) return false;

  if (isInvalid(cpf, getRest(sumDigit(cpf, 9)), 9)) return false;

  if (isInvalid(cpf, getRest(sumDigit(cpf, 10)), 10)) return false;

  return true;
};
