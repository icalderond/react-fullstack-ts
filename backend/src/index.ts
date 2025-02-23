import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import sequelize from './config/config';
import userRouter from './routes/user.routes';

dotenv.config();
const app = express();
app.use(cors());
app.use(express.json());

app.use('/api/users', userRouter);

const PORT = process.env.PORT || 5000;
sequelize.sync({ alter: true, logging: false })
    .then(() => {
        app.listen(PORT, () => {
            console.log(`Server is running on port ${PORT}`);
        });
    }).catch((err) => {
        console.log(err);
    });