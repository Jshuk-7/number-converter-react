const convertNumber = num => {
  const bit = 2;
  let bit1,
    bitVal1,
    bitCalc1,
    bit2,
    bitVal2,
    bitCalc2,
    bit3,
    bitVal3,
    bitCalc3,
    bit4,
    bitVal4,
    bitCalc4,
    bit5,
    bitVal5,
    bitCalc5,
    bit6,
    bitVal6,
    bitCalc6,
    bit7,
    bitVal7,
    bitCalc7,
    bit8,
    bitVal8,
    bitCalc8;

  bit1 = num % bit;
  bitCalc1 = parseInt((bitVal1 = num / bit));

  bit2 = bitCalc1 % bit;
  bitCalc2 = parseInt((bitVal2 = num / bit));

  bit3 = bitCalc2 % bit;
  bitCalc3 = parseInt((bitVal3 = num / bit));

  bit4 = bitCalc3 % bit;
  bitCalc4 = parseInt((bitVal4 = num / bit));

  bit5 = bitCalc4 % bit;
  bitCalc5 = parseInt((bitVal5 = num / bit));

  bit6 = bitCalc5 % bit;
  bitCalc6 = parseInt((bitVal6 = num / bit));

  bit7 = bitCalc6 % bit;
  bitCalc7 = parseInt((bitVal7 = num / bit));

  bit8 = bitCalc7 % bit;
  bitCalc8 = parseInt((bitVal8 = num / bit));

  const result = `${bit1}${bit2}${bit3}${bit4}${bit5}${bit6}${bit7}${bit8}`;

  return result;
};

export default convertNumber;
