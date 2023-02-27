import dotenv from 'dotenv';
import app from './src/rest/index';
dotenv.config();
const PORT = process.env.PORT;

app.listen(PORT, () => {
  console.log(`Weather App backend started on: ${PORT}`);
});
