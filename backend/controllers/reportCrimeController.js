import Crime from "../models/CrimeReport.model.js";
import CompletedReport from "../models/CompletedReport.model.js";
import mongoose from "mongoose";
const { ObjectId } = mongoose.Types;

const getCrimes = async (req, res) => {
    try {
        const crimes = await Crime.find({});
        res.status(200).json({crimes});
      } catch (error) {
        res.status(500).json({ message: error.message });
      }
};

//check this , get this to forward report data. this will be used to forward a single criminals data
const getCrime = async (req, res) => {
    try{
        console.log("inside get crime");
        const id = req.params.id; //extract value from parameters as string

        console.log("report id", id);
        
        const crime = await Crime.findById(id);

        console.log("report : " ,crime);

        if(!crime) {
            return res.status(404).json({message:"Error User not found"});
        }
        
        res.status(200).json(crime);
    }catch (error) {
        res.status(500).json({message: error.message}); // check out express demo to find out more about error.msg
    }
};

const getCompletedCrime = async (req, res) => {
    try{
        console.log("inside get crime");
        const id = req.params.id; //extract value from parameters as string

        console.log("report id", id);
        
        const crime = await CompletedReport.findById(id);

        console.log("report : " ,crime);

        if(!crime) {
            return res.status(404).json({message:"Error User not found"});
        }
        
        res.status(200).json(crime);
    }catch (error) {
        res.status(500).json({message: error.message}); // check out express demo to find out more about error.msg
    }
};

const createCrime = async (req, res) => {
    try{
        console.log('inside createcrime try block');

        const CNIC_Front_Image = req.files?.CNIC_Front_Image ? req.files.CNIC_Front_Image[0].filename : null;
        const ReporterImage = req.files?.ReporterImage ? req.files.ReporterImage[0].filename : null;
        const ProofImage = req.files?.ProofImage ? req.files.ProofImage[0].filename : null;


        const crime = await Crime.create({
            reporterName: req.body.reporterName,
            reporter_father_name: req.body.reporter_father_name,
            reporterCNIC: req.body.reporterCNIC,
            reporter_Phone: req.body.reporter_Phone,
            crime_type: req.body.crime_type,
            crime_date: req.body.crime_date,
            crime_location: req.body.crime_location,
            suspect_description: req.body.suspect_description,
            crime_description: req.body.crime_description,
            CNIC_Front_Image: CNIC_Front_Image,
            ReporterImage: ReporterImage,
            ProofImage:ProofImage
        });

        res.status(201).json({message: "Crime Reported", crime});
        
    }catch (error) {
        console.error("Error occurred while reporting crime: ", error); 
        res.status(500).json({message: error.message}); // check out express demo to find out more about error.msg
    }
};


const deleteCrime = async (req, res) => {
    try{
        const id = req.params.id;
        console.log("id :", id);
        await Crime.findByIdAndDelete(id);

        res.status(200).json(`User deleted at id : ${id}`);
    }catch (error) {
        res.status(500).json({message: error.message}); // check out express demo to find out more about error.msg
    }
};

const setComplete = async (req, res) => {
    try {
        const id = req.body.id;
        console.log("id in complete : ", id);

        const report = await Crime.findById(id);

        console.log("report in complete : ", report);

        const manualId = new ObjectId(); // Generate a new manual ObjectId

// scanId: id,
        const crime = await CompletedReport.create({
            _id: manualId,
            reporterName: report.reporterName,
            reporter_father_name: report.reporter_father_name,
            reporterCNIC: report.reporterCNIC,
            reporter_Phone: report.reporter_Phone,
            crime_type: report.crime_type,
            crime_date: report.crime_date,
            crime_location: report.crime_location,
            suspect_description: report.suspect_description,
            crime_description: report.crime_description,
            CNIC_Front_Image: report.CNIC_Front_Image,
            ReporterImage: report.ReporterImage,
            ProofImage:report.ProofImage
        });

        res.status(201).json({message: "Crime Report set as completed", crime});
    } catch (error) {
        res.status(500).json({ message: "Error setting crime as complete" });
    }
}
export default { getCrimes, getCrime, createCrime, deleteCrime, setComplete, getCompletedCrime };