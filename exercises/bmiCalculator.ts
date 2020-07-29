
const calcBMI = (a: number, b: number): string => {
  const height = a / 100  
  const BMI = b / Math.pow(height, 2)

  if ( BMI < 20 ) return 'Underweight'
  if ( BMI > 25 ) return 'Overweight'
  if ( BMI > 20 && BMI < 25 ) return 'Normal (Healthy weight)'
}

console.log(calcBMI(180,74));