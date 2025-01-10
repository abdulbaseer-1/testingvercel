// workflow
//1. import express, mongoose, models, other dependencies
// initialize expes, and other hngs that need init
//2. make server , connect to db "sort of , look it up"
//3. build/use middleware
//4. makeyour APIs (routes enclosing controllers) "sort of"


//imports // using ES6 syntax
import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';    // for easily handling environment variables
import { fileURLToPath } from 'url';
import { dirname, resolve } from 'path';
import logger from './controllers/logger.js';
import userRoutes from './routes/user.routes.js';
import reportRoutes from './routes/report.routes.js';
import adminRoutes from './routes/admin.routes.js';
import cors from 'cors'; // cors library, look it up
import sessionMiddleware from './middleware/Session.js';
import https from 'https';
import fs from 'fs';
import path from 'path';


// Recreate __dirname for ES6 modules
const __filename = fileURLToPath(import.meta.url); //gives the filepath
const __dirname = dirname(__filename); //gives the root path

// Configure dotenv
dotenv.config({ path: resolve(__dirname, '../config/.env') }); // Path to env file

// Validate PORT
const PORT = process.env.PORT || 5000;
if (!PORT) {
  console.error('PORT is not defined. Check your .env file or dotenv configuration.');
  process.exit(1); // like system('exit');
}

// Initialize express
const app = express();

//satic folder for my uploads
app.use('/database/uploads', express.static(path.join(__dirname, '../database/uploads')));


//middleware
//allow requestd from following, to prevent CORS errors,  Allow all origins (for development, make sure to restrict this in production)
//frontend origin
//allowed methods
//allowed headers
app.use(cors({
  origin: 'https://front-b31o.vercel.app', 
  methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
  allowedHeaders: ['Content-Type', 'Authorization'],
  credentials: true,
}));

app.use(express.json()); // im going to use urlEncoded for my forms etc later.
app.use(express.urlencoded({extended: true}));

//session middleware
app.use(sessionMiddleware);

app.use(logger); // not inbuilt


//APIs
app.use('/api/users', userRoutes);
app.use('/api/reports', reportRoutes); // will rename but jugar here, both are api, so which to enter, just enter the first
app.use('/api/admins', adminRoutes);

//place root last
app.get('/', (req, res) => {
  res.send(`
    <h1>Crime Reporting System API</h1>
    <p>Status: Connection Successful</p>
  `);
});



// connect to DB and Start the server
mongoose.connect('mongodb+srv://abdulbaseers130:FMXC7lNF92zXK2ij@semesterproject.vdpil.mongodb.net/?retryWrites=true&w=majority&appName=SemesterProject')
    .then(() => {
        console.log('Connected to MongoDB');
        
        if (process.env.NODE_ENV === 'development') {
            // Use HTTPS for local development
            const server = https.createServer({
                key: fs.readFileSync(path.join(__dirname, '../config/certificates/key.pem')),
                cert: fs.readFileSync(path.join(__dirname, '../config/certificates/cert.pem')),
            }, app);

            server.listen(PORT, () => {
                console.log(`Development server is listening on port ${PORT}`);
            });
        } else {
            // For production (Vercel)
            app.listen(PORT, () => {
                console.log(`Production server is listening on port ${PORT}`);
            });
        }
    })
    .catch((error) => {
        console.error('Connection failed: ', error);
    });

export default app;