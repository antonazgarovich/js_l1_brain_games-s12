import { getRandomNumber } from '../cartridgeUtils';

const getGCD = (number1, number2) =>
  (number2 === 0
    ? Math.abs(number1)
    : getGCD(number2, number1 % number2));

export default {
  description: 'Find the greatest common divisor of given numbers.',
  generatorProblem() {
    const number1 = getRandomNumber(1, 100);
    const number2 = getRandomNumber(1, 100);
    const gcd = getGCD(number1, number2);

    const question = `${number1} ${number2}`;
    const solution = gcd;

    return { question, solution };
  },
};
