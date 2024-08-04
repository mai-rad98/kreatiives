import express from 'express';
import dotenv from 'dotenv'
import dbconnect from './config/dbconnect.js';


//load contend of .env files
dotenv.config()


// set up express app
const app = express()
const PORT = process.env.PORT || 8080


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
        app.listen(port, () => {
          console.log(`Server is listening on port ${port}...`, '✅');
          console.log(`Server is running  ${port}...`, '✅');
        });
      } catch (error) {
        console.log(error);
      }
}
start();
