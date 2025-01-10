import axios from 'axios';
import styles from './Report_Form.module.css';
import React, { useState } from 'react';


function ReportACrime() {
  const [yourName, setYourName] = useState('');
  const [fathersName, setFathersName] = useState('');
  const [phone, setPhone] = useState('');
  const [cnic, setCnic] = useState('');
  const [crimeType, setCrimeType] = useState('');
  const [crimeDate, setCrimeDate] = useState('');
  const [crimeLocation, setCrimeLocation] = useState('');
  const [suspectDescription, setSuspectDescription] = useState('');
  const [crimeDescription, setCrimeDescription] = useState('');
  const [cnicPicture, setCnicPicture] = useState(null);
  const [userPicture, setUserPicture] = useState(null);
  const [additionalProof, setAdditionalProof] = useState(null);

  const handleSubmit = async (event) => {
    event.preventDefault();

    const ReportForm = new FormData();
    ReportForm.append('reporterName', yourName);
    ReportForm.append('reporter_father_name', fathersName);
    ReportForm.append('reporterCNIC', cnic);
    ReportForm.append('reporter_Phone', phone);
    ReportForm.append('crime_type', crimeType);
    ReportForm.append('crime_date', crimeDate);
    ReportForm.append('crime_location', crimeLocation);
    ReportForm.append('suspect_description', suspectDescription);
    ReportForm.append('crime_description', crimeDescription);
    ReportForm.append('CNIC_Front_Image', cnicPicture);
    ReportForm.append('ReporterImage', userPicture);
    ReportForm.append('ProofImage', additionalProof);

    try{
      console.log("Report Form : ", ReportForm);

      const request = axios.post("https://backend-two-henna-56.vercel.app/api/reports", ReportForm, {
        headers: {
          'Content-Type': 'multipart/form-data',
        }
      });

      alert("Crime Reported successfully!")
    }catch(error) {
      console.log("Error submitting form", error);
    }
  };

  return (
    <div>
    <div className={styles.content_area}>
      <div className={styles.crimeReportContainer}>
        <h2>Report a Crime</h2>
        <form onSubmit={handleSubmit}>
          <div className={styles.inlineGroup}>
            <div className={styles.formGroup}>
              <label>Your Name:</label>
              <input
                type="text"
                id="your-name"
                value={yourName}
                onChange={(e) => setYourName(e.target.value)}
              />
            </div>
            <div className={styles.formGroup}>
              <label>Father's Name:</label>
              <input
                type="text"
                id="fathers-name"
                value={fathersName}
                onChange={(e) => setFathersName(e.target.value)}
              />
            </div>
          </div>
          <div className={styles.inlineGroup}>
            <div className={styles.formGroup}>
              <label>CNIC Number:</label>
              <input
                type="text"
                id="cnic"
                value={cnic}
                maxLength={13}
                onChange={(e) => setCnic(e.target.value.replace(/[^0-9]/g, ''))}
              />
            </div>
            <div className={styles.formGroup}>
              <label>Phone:</label>
              <input
                type="text"
                id="phone"
                value={phone}
                maxLength={11}
                onChange={(e) => setPhone(e.target.value)}
              />
            </div>
          </div>
          <div className={styles.inlineGroup}>
            <div className={styles.formGroup}>
              <label>Crime Type:</label>
              <select
                id="crime-type"
                value={crimeType}
                onChange={(e) => setCrimeType(e.target.value)}
              >
                <option value="">Select Crime Type</option>
                <option value="hit-and-run">Hit and Run</option>
                <option value="robbery">Robbery</option>
                <option value="assault">Assault</option>
              </select>
            </div>
            <div className={styles.formGroup}>
              <label>Crime Date:</label>
              <input
                type="date"
                id="crime-date"
                value={crimeDate}
                onChange={(e) => setCrimeDate(e.target.value)}
              />
            </div>
          </div>
          <div className={styles.inlineGroup}>
            <div className={styles.formGroup}>
              <label>Crime Location:</label>
              <input
                type="text"
                id="crime-location"
                value={crimeLocation}
                onChange={(e) => setCrimeLocation(e.target.value)}
              />
            </div>
          </div>
          <div className={styles.inlineGroup}>
            <div className={styles.formGroup}>
              <label>Suspect Description:</label>
              <textarea
                id="suspect-description"
                value={suspectDescription}
                onChange={(e) => setSuspectDescription(e.target.value)}
              />
            </div>
          </div>
          <div className={styles.inlineGroup}>
            <div className={styles.formGroup}>
              <label>Crime Description:</label>
              <textarea
                id="crime-description"
                value={crimeDescription}
                onChange={(e) => setCrimeDescription(e.target.value)}
              />
            </div>
          </div>
          <div className={styles.inlineGroup}>
            <div className={styles.formGroup}>
              <label>CNIC Picture:</label>
              <input
                type="file"
                id="cnic-picture"
                onChange={(e) => setCnicPicture(e.target.files[0])}
              />
            </div>
            <div className={styles.formGroup}>
              <label>Your Picture:</label>
              <input
                type="file"
                id="user-picture"
                onChange={(e) => setUserPicture(e.target.files[0])}
              />
            </div>
          </div>
          <div className={styles.inlineGroup}>
            <div className={styles.formGroup}>
              <label>Additional Proof (Picture):</label>
              <input
                type="file"
                id="additional-proof"
                onChange={(e) => setAdditionalProof(e.target.files[0])}
              />
            </div>
          </div>
          <button type="submit">Submit</button>
        </form>
      </div>
    </div>
  </div>  
  );
}

export default ReportACrime;