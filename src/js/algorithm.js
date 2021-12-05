// from https://en.wikipedia.org/wiki/Luhn_algorithm
export default function luhnAlgorithm(value) {
  if (/[^0-9-\s]+/.test(value)) return false;
  value = value.replace(/\D/g, '');

  let nCheck = 0;
  let bEven = false;

  for (let n = value.length - 1; n >= 0; n -= 1) {
    let nDigit = parseInt(value.charAt(n), 10);

    if (bEven && (nDigit *= 2) > 9) {
      nDigit -= 9;
    }

    nCheck += nDigit;
    bEven = !bEven;
  }

  return (nCheck % 10) === 0;
}
