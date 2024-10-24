import express from 'express';
import cors from 'cors';
import weatherRoutes from './routes/weather.route.js'
import dotenv from 'dotenv';
dotenv.config(); 

const app = express();
const port = 3001;


app.use(cors());

app.use('/',weatherRoutes)

app.listen(port,()=>{
    console.log('server running on http://localhost:3001');
    
})