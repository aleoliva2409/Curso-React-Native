import { useState, useRef } from 'react';

enum Operations {
  add,
  subtract,
  multiply,
  divide,
}

export const useCalculator = () => {
  const [prevNumber, setPrevNumber] = useState('0');
  const [number, setNumber] = useState('0');
  const lastOperation = useRef<Operations>();

  const clean = () => {
    setNumber('0');
    setPrevNumber('0');
  };

  const joinNumber = (textNumber: string) => {
    // ? No aceptar doble punto
    if (number.includes('.') && textNumber === '.') return;
    if (number[0] === '0' || number[0] === '-0') {
      // if (number.startsWith('0') || number.startsWith('-0')) { // ? otra manera de hacerlo
      // ? Punto decimal
      if (textNumber === '.') {
        setNumber(number + textNumber);

        // ? Evaluar si es otro cero y hay un punto
      } else if (textNumber === '0' && number.includes('.')) {
        setNumber(number + textNumber);

        // ? Evaluar si es diferente de cero y no tiene un punto
      } else if (textNumber !== '0' && !number.includes('.')) {
        setNumber(textNumber);

        // ? Evitar 0000.000
      } else if (textNumber === '0' && !number.includes('.')) {
        setNumber(number);
      } else {
        setNumber(number + textNumber);
      }
    } else {
      setNumber(number + textNumber);
    }
  };

  const positiveNegative = () => {
    if (number.includes('-')) setNumber(number.replace('-', ''));
    else setNumber('-' + number);
  };

  const btnDelete = () => {
    if (number.length === 2 && number.includes('-')) return setNumber('0');
    if (number.length === 1) return setNumber('0');
    const newNumber = number.slice(0, -1);

    setNumber(newNumber);
  };

  // const btnDelete = () => {
  //   let negative = ''
  //   let numberTemp = number

  //   if(number.includes('-')) {
  //     negative = '-'
  //     numberTemp = number.substring(1)
  //   }

  //   if(numberTemp.length > 1) {
  //     setNumber(negative + numberTemp.slice(0, -1))
  //   } else {
  //     setNumber('0')
  //   }
  // };

  const changeNumberPositon = () => {
    if (number.endsWith('.')) {
      setPrevNumber(number.slice(0, -1));
    } else {
      setPrevNumber(number);
    }

    setNumber('0');
  };

  const btnAdd = () => {
    changeNumberPositon();
    lastOperation.current = Operations.add;
  };

  const btnSubtract = () => {
    changeNumberPositon();
    lastOperation.current = Operations.subtract;
  };

  const btnMultiply = () => {
    changeNumberPositon();
    lastOperation.current = Operations.multiply;
  };

  const btnDivide = () => {
    changeNumberPositon();
    lastOperation.current = Operations.divide;
  };

  const calculate = () => {
    const num1 = Number(prevNumber);
    const num2 = Number(number);

    switch (lastOperation.current) {
      case Operations.add:
        setNumber(`${num1 + num2}`);
        break;
      case Operations.subtract:
        setNumber(`${num1 - num2}`);
        break;
      case Operations.multiply:
        setNumber(`${num1 * num2}`);
        break;
      case Operations.divide:
        setNumber(`${num1 / num2}`);
        break;

      default:
        break;
    }

    setPrevNumber('0');
  };

  return {
    number,
    prevNumber,
    clean,
    joinNumber,
    positiveNegative,
    btnDelete,
    btnAdd,
    btnSubtract,
    btnMultiply,
    btnDivide,
    calculate,
  };
};
