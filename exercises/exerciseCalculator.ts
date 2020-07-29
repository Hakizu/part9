
interface report { 
  periodLength: number,
  trainingDays: number,
  success: boolean,
  rating: number,
  ratingDescription: string,
  target: number,
  average: number, 
}


const calculateExercise = (x: Array<number>, y: number): report => {
  
  const trainedDays = 7 - x.filter(value => value === 0).length
  const dailyAverage = x.reduce((a,b) => a + b) / x.length
  const metricRating = Math.round(dailyAverage / y)
  
  const descripRating = () => {
    switch (metricRating) {
      case 1: 
      return 'Target not matched'

      case 2: 
      return 'Target matched'

      case 3: 
      return 'Amazing!'

      default:
        return 'No Rating'
    }
  }

  return {
    periodLength: x.length,
    trainingDays: trainedDays,
    target: y,
    average:  dailyAverage,    
    success: y < dailyAverage,
    rating: metricRating,
    ratingDescription: descripRating(),
  }
}



console.log(calculateExercise([3, 0, 2, 4.5, 0, 3, 1],2));
