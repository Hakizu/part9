import express from 'express'
import { calcBMI } from './bmiCalculator'

const app = express()

app.get('/hello', (_req, res) => {
  res.send('Hello Fullstack');
});

app.get('/bmi', (req, res) => {
  const height: number = Number(req.query.height);
  const weight: number = Number(req.query.weight)

  res.send({
    weight: weight,
    height: height,
    bmi: calcBMI(height, weight)
  })
});

const PORT = 3003

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});