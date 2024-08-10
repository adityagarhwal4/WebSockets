import dotenv from 'dotenv';
import app from './app';

dotenv.config();

const port = process.env.PORT;
console.log("port testing: ", port);
app.listen(port, () => {
    console.log(`Server is running at http://localhost:${port}`);
});