import express from 'express';
import reportCrimeController from '../controllers/reportCrimeController.js';
import { upload } from '../middleware/reportMulter.js';
import getCrimesTabular from '../controllers/getReportTabular.js';

const reportRouter = express.Router();

//get all crime reports api
reportRouter.get('/', reportCrimeController.getCrimes);

//get reports tabular
reportRouter.get('/reportsTabular', async (req, res) => {
    console.log("inside reports tabular");

    await getCrimesTabular.getCrimesTabular(req, res);
});

//get all Completed crime reports api
reportRouter.get('/getCompletedReportsTabular', async (req, res) => {
    try {
        console.log("inside completed reports tabular");
        await getCrimesTabular.getCompletedReportsTabular(req, res);
    } catch (error) {
        console.error("Error in getCompletedReportsTabular route:", error);
        res.status(500).json({ message: "Internal server error" });
    }
});

//create crime report api
reportRouter.post('/', (req, res, next) => {
    console.log("inside create crime report route");

    upload(req, res, (err) => {
        if (err) {
            console.error('Multer error:', err);
            return res.status(400).send(err.message);
        }
        next();
    });
}, reportCrimeController.createCrime);

//set the crime as completed
reportRouter.post('/setComplete', reportCrimeController.setComplete);
//get one crime report api
reportRouter.get('/getCompletedReport/:id', (req, res) => {
    console.log("inside get completed comp");

    reportCrimeController.getCompletedCrime(req, res);
});

reportRouter.get('/getReport/:id', reportCrimeController.getCrime);

//delete a crime report
reportRouter.delete('/deleteReport/:id', reportCrimeController.deleteCrime);

export default reportRouter;