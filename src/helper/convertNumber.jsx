const convertNumberToBinary = num => {
  const bit = 2;
  let 
    bit1,
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
    bitCalc7,
    bit8;

  bit1 = num % bit;
  bitCalc1 = parseInt((bitVal1 = num / bit));

  bit2 = bitCalc1 % bit;
  bitCalc2 = parseInt((bitVal2 = bitVal1 / bit));

  bit3 = bitCalc2 % bit;
  bitCalc3 = parseInt((bitVal3 = bitVal2 / bit));

  bit4 = bitCalc3 % bit;
  bitCalc4 = parseInt((bitVal4 = bitVal3 / bit));

  bit5 = bitCalc4 % bit;
  bitCalc5 = parseInt((bitVal5 = bitVal4 / bit));

  bit6 = bitCalc5 % bit;
  bitCalc6 = parseInt((bitVal6 = bitVal5 / bit));

  bit7 = bitCalc6 % bit;
  bitCalc7 = parseInt((bitVal6 / bit));

  bit8 = bitCalc7 % bit;

  const result = `${bit8}${bit7}${bit6}${bit5}${bit4}${bit3}${bit2}${bit1}`;

  return result;
};

export default convertNumberToBinary;
