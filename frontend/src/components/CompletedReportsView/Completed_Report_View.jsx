import React, { useState, useEffect } from 'react';
import axios from 'axios';
import styles from './Completed_Report_View.module.css';
import useID from '../contexts/idContext';

const CriminalProfile = () => {
  const [report, setReport] = useState(null); // State for the report data
  const [error, setError] = useState(null); // State for handling errors
  const {ID} = useID();

  useEffect(() => {
    const fetchReportData = async () => {
      try {
        console.log("id here :", ID.id);
        const response = await axios.get(`https://backend-two-henna-56.vercel.app/api/reports/getCompletedReport/${ID.id}`);
        console.log('Report data fetched from backend:', response.data);
        setReport(response.data); 
      } catch (err) {
        setError('Error fetching report data');
        console.error('Error fetching report data:', err);
      }
    };

    fetchReportData();
  }, []); // Runs once when the component mounts

  if (error) {
    return <div>{error}</div>; // Display error message if there's an error
  }

  if (!report) {
    return <div>Loading...</div>; // Display loading state while fetching data
  }

  return (
    <div className={styles.container}>
      <h1 className={styles.heading}>Crime Report</h1>
      <div className={styles.profile}>
        <div className={styles.details}>
          <p><strong>Reporter Name:</strong> {report.reporterName}</p>
          <p><strong>Father's Name:</strong> {report.reporter_father_name}</p>
          <p><strong>CNIC:</strong> {report.reporterCNIC}</p>
          <p><strong>Phone Number:</strong> {report.reporter_Phone}</p>
          <p><strong>Crime Type:</strong> {report.crime_type}</p>
          <p><strong>Crime Date:</strong> {new Date(report.crime_date).toDateString()}</p>
          <p><strong>Crime Location:</strong> {report.crime_location}</p>
          <p><strong>Suspect Description:</strong> {report.suspect_description}</p>
          <p><strong>Crime Description:</strong> {report.crime_description}</p>
        </div>

        <div className={styles.images}>
          {report.ReporterImage && (
            <img
              src={`https://backend-two-henna-56.vercel.app/database/uploads/${report.ReporterImage}`}
              alt="Reporter"
              className={styles.image}
            />
          )}
          {report.CNIC_Front_Image && (
            <img
              src={`https://backend-two-henna-56.vercel.app/database/uploads/${report.CNIC_Front_Image}`}
              alt="CNIC Front"
              className={styles.image}
            />
          )}
          {report.ProofImage && (
            <img
              src={`https://backend-two-henna-56.vercel.app/database/uploads/${report.ProofImage}`}
              alt="Proof"
              className={styles.image}
            />
          )}
        </div>
      </div>
    </div>
  );
};

export default CriminalProfile;
