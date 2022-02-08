import React from 'react';
import { Text, View } from 'react-native';
import ButtonCalc from '../components/ButtonCalc';
import { styles } from '../theme/calulator.styles';
import { useCalculator } from '../hooks/useCalculator';

const CalculatorScreen = () => {
  const {
    number,
    prevNumber,
    clean,
    joinNumber,
    positiveNegative,
    btnDelete,
    btnDivide,
    btnMultiply,
    btnSubtract,
    btnAdd,
    calculate,
  } = useCalculator();

  return (
    <View style={styles.container}>
      {prevNumber !== '0' && (
        <Text style={styles.littleText}>{prevNumber}</Text>
      )}
      <Text style={styles.textResult} numberOfLines={1} adjustsFontSizeToFit>
        {number}
      </Text>

      <View style={styles.rowButtons}>
        <ButtonCalc text="C" color="#9B9B9B" action={clean} />
        <ButtonCalc text="+/-" color="#9B9B9B" action={positiveNegative} />
        <ButtonCalc text="del" color="#9B9B9B" action={btnDelete} />
        <ButtonCalc text="/" color="#FF9427" action={btnDivide} />
      </View>
      <View style={styles.rowButtons}>
        <ButtonCalc text="7" action={joinNumber} />
        <ButtonCalc text="8" action={joinNumber} />
        <ButtonCalc text="9" action={joinNumber} />
        <ButtonCalc text="X" color="#FF9427" action={btnMultiply} />
      </View>
      <View style={styles.rowButtons}>
        <ButtonCalc text="4" action={joinNumber} />
        <ButtonCalc text="5" action={joinNumber} />
        <ButtonCalc text="6" action={joinNumber} />
        <ButtonCalc text="-" color="#FF9427" action={btnSubtract} />
      </View>
      <View style={styles.rowButtons}>
        <ButtonCalc text="1" action={joinNumber} />
        <ButtonCalc text="2" action={joinNumber} />
        <ButtonCalc text="3" action={joinNumber} />
        <ButtonCalc text="+" color="#FF9427" action={btnAdd} />
      </View>
      <View style={styles.rowButtons}>
        <ButtonCalc text="0" large action={joinNumber} />
        <ButtonCalc text="." action={joinNumber} />
        <ButtonCalc text="=" color="#FF9427" action={calculate} />
      </View>
    </View>
  );
};
// #2D2D2D

export default CalculatorScreen;
