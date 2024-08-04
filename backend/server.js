import express from 'express';
import dotenv from 'dotenv'
import connectDB from './config/dbConnect.js';

//middleware
import cors from 'cors'
import morgan from 'morgan'

//load contend of .env files
dotenv.config()


// set up express app
const app = express()
const PORT = process.env.PORT || 8080

//import routes
import creatorRoutes from './routes/creatorRoutes.js'

//Configure middleware
app.use(
    cors({
        origin: 'http://localhost:3000',
        credentials: true
    })
)
app.use(morgan('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }))

// Error handling middleware
app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).json({ error: 'Something went wrong' });
  });

//mount routes
app.use('/api/creators',creatorRoutes);


const start = async () => {

    try {
        const mongoConnectionString = process.env.MONGO_URI;
        await connectDB(mongoConnectionString);
        const [_, connectionDetails] = mongoConnectionString.split('@');
        const [mongoConnectionIp, mongoConnectionName] = connectionDetails.split('/');
    
        console.log(
          `Connnected to MongoDb at ${mongoConnectionIp.replace(
            ':27017',
            ''
          )} on database ${mongoConnectionName}... ✅ `
        );
        app.listen(PORT, () => {
          console.log(`Server is listening on port ${PORT}...`, '✅');
          console.log(`Server is running  ${PORT}...`, '✅');
        });
      } catch (error) {
        console.log(error);
      }
}
start();
