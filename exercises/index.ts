import express from 'express';
import { calcBMI } from './bmiCalculator';

const app = express();

app.get('/hello', (_req, res) => {
  res.send('Hello Fullstack');
});

app.get('/bmi', (req, res) => {
  const height = Number(req.query.height);
  const weight = Number(req.query.weight);

  if ( isNaN(height) || isNaN(weight)) {
    res.send('Wrong data type as input');

  } else if (height === 0 || weight ===0) {
    res.send('Height or weight is set to 0 - one input is likely missing');

  } else {
    res.send({
      weight: weight,
      height: height,
      bmi: calcBMI(height, weight)
    });
  }
});

const PORT = 3003;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});