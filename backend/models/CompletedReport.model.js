import mongoose from 'mongoose';
// scanId: {
    //   type: String,
    //   required: [true, 'Please enter your scanId'],
    // },
const CompletedReportSchema = new mongoose.Schema(
  {
    reporterName: {
      type: String,
      required: [true, 'Please enter your name'],
    },
    reporter_father_name: {
      type: String, // Corrected from `email` to `String`
      required: [true, 'Please enter your fathers name'],
    },
    reporterCNIC: {
      type: String, // Corrected from `password` to `String`
      required: [true, 'Please enter your CNIC'],
    },
    reporter_Phone: {
      type: String,
      required: [true, 'Please enter your phone numer'],
    },
    crime_type: {
      type: String,
      required: [true, 'Please enter the crime type'],
    },
    crime_date: {
      type: Date,
      required: [true, 'Please enter your crime date'],
    },
    crime_location: {
      type: String, // Corrected from `phone` to `String`
      required: [true, 'Please enter your crime location'],
    },
    suspect_description: {
      type: String,
      required: [true, 'Please describe your suspect'],
    },
    crime_description: {
      type: String,
      required: [true, 'Please describe your crime'],
    },
    CNIC_Front_Image: {
      type: String, // Assuming a file path or URL will be stored
      required: [false, 'Please provide the CNIC front image'],
    },
    ReporterImage: {
      type: String, // Assuming a file path or URL will be stored
      required: [false, 'Please provide your own image'],
    },
    ProofImage: {
      type: String, // Assuming a file path or URL will be stored
      required: [false, 'Please provide your proof'],
    },
  },
  {
    timestamps: true, // Adds `createdAt` and `updatedAt` fields
  }
);

const CompletedReport = mongoose.model('CompletedReport', CompletedReportSchema); // Create user model from schema // automatically pluralized by mongo for collection

export default CompletedReport;