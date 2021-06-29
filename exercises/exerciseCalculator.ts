
interface report { 
  periodLength: number,
  trainingDays: number,
  success: boolean,
  rating: number,
  ratingDescription: string,
  target: number,
  average: number, 
}

interface arguments {
  x: Array<number>,
  y: number
}

const parseArguments = (arg: Array<string>): arguments => {
  const typedAgruments = arg.slice(2);

  if (typedAgruments.every(e => !isNaN(Number(e)))) {
    const reportData = typedAgruments.slice(1);
    return {
      x: reportData.map(e => Number(e)),
      y: Number(typedAgruments[0])
    };
  } else {
    throw new Error('Inputs are not numbers');
  }
};


const calculateExercise = (x: Array<number>, y: number): report => {
  
  const trainedDays = x.length - x.filter(value => value === 0).length;
  const dailyAverage = x.reduce((a,b) => a + b) / x.length;
  const metricRating = Math.round(dailyAverage / y);
  
  const descripRating = () => {
    switch (metricRating) {
      case 1: 
      return 'Target not matched';

      case 2: 
      return 'Target matched';

      case 3: 
      return 'Amazing!';

      default:
        return 'No Rating';
    }
  };

  return {
    periodLength: x.length,
    trainingDays: trainedDays,
    target: y,
    average:  dailyAverage,    
    success: y < dailyAverage,
    rating: metricRating,
    ratingDescription: descripRating(),
  };
};
// console.log(calculateExercise([3, 0, 2, 4.5, 0, 3, 1],2));

try {
  const { x , y } = parseArguments(process.argv);
  console.log(calculateExercise(x, y));
} catch (e) {
  // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access
  console.log('Error, something bad happened, message: ', e?.message);
  
}