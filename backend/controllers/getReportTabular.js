import Crime from "../models/CrimeReport.model.js";
import CompletedReport from "../models/CompletedReport.model.js";

const getCrimesTabular = async (req, res) => {
    try {
        //use 1 or 0 to include/exclude fields
        const crimes = await Crime.find({}, { 
            _id: 1, 
            crime_type: 1, 
            crime_date: 1, 
            crime_location: 1 
        }).limit(15);

        if (!crimes || crimes.length === 0) {
            return res.status(404).json({ message: "No crimes found" });
        }

        console.log("Crime data in funct : ", crimes);
        res.status(200).json({crimes});
      } catch (error) {
        res.status(500).json({ message: error.message });
      }
};

const getCompletedReportsTabular = async (req, res) => {
  try {
      //use 1 or 0 to include/exclude fields
      const crimes = await CompletedReport.find({}, { 
          _id: 1, 
          crime_type: 1, 
          crime_date: 1, 
          crime_location: 1 
      }).limit(15);

      if (!crimes || crimes.length === 0) {
          console.log("No Completed Reports found");
          return res.status(404).json({ message: "No Completed Reports found" });
      }

      console.log("Crime data in funct : ", crimes);
      res.status(200).json({crimes});
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
};

export default {getCrimesTabular, getCompletedReportsTabular};