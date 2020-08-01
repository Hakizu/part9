
interface input {
  value1: number,
  value2: number,
}

const parseInput = (arg: Array <string>): input => {
  if (arg.length < 4) throw new Error('Not enough arguments');
  if (arg.length > 4) throw new Error('Too many arguments');

  if (!isNaN(Number(arg[2]))  && !isNaN(Number(arg[3]))) {
    return {
      value1: Number(arg[2]),
      value2: Number(arg[3])
    }
  } else {
    throw new Error('Inputs are not numbers!')
  }
}

export const calcBMI = (value1: number, value2: number): string => {
  const height = value1 / 100  
  const BMI = value2 / Math.pow(height, 2)
  console.log(BMI);

  if ( BMI < 20 )  return 'Underweight';
  if ( BMI > 25 ) return 'Overweight';
  if ( BMI > 20 && BMI < 25 ) return 'Normal (Healthy weight)';
  return 'Error no BMI calculated'
}

try {
  const { value1, value2 } = parseInput(process.argv);
  
  calcBMI(value1, value2)
} catch (e) {
  console.log('Error, something bad happened, message: ', e.message);
}