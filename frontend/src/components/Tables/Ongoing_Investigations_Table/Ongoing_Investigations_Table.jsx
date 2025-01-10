import React, { useState, useEffect } from 'react';
import table_style from "./Ongoing_Investigations_Table.module.css";
import detailEye from "../../../assets/tables/eye icon.png";
import trashIcon from "../../../assets/tables/trash icon.png";
import completeIcon from "../../../assets/tables/AdobeStock_747901278_Preview.png"
import axios from 'axios';
import useID from '../../contexts/idContext';
import { useNavigate } from 'react-router-dom';

const Pending_Cases_Table = ({ className }) => {
  const columns = ['ID', 'Request_Type', 'Location', 'Date', 'Actions'];
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);
  const{setID} = useID(); //custom context hook
  const navigate = useNavigate();

  useEffect(() => {
    const fetchData = async () => {
      try {
        setIsLoading(true);
        const response = await axios.get('https://backend-two-henna-56.vercel.app/api/reports/reportsTabular', {
          headers: {
            'Content-Type': 'application/json',
          },
        });
        
        console.log("fetched data:", response.data);
        // Access the crimes array from the response
        if (response.data && response.data.crimes) {
          setData(response.data.crimes);
        } else {
          throw new Error('Data format is incorrect');
        }
      } catch (error) {
        console.error("Error fetching user data:", error);
        setError(error.message);
      } finally {
        setIsLoading(false);
      }
    };

    fetchData();
  }, []);

  if (isLoading) {
    return (
      <div className={table_style.loading_container}>
        <div className={table_style.loading_spinner}>Loading...</div>
      </div>
    );
  }

  if (error) {
    return (
      <div className={table_style.error_container}>
        Error: {error}
      </div>
    );
  }

  const handleDelete = async (id) => {
    console.log('Delete item with ID:', id);
    try {
      await axios.delete(`https://backend-two-henna-56.vercel.app/api/reports/deleteReport/${id}`, {
        headers: {
          'Content-Type': 'application/json',
        },
      });
  
      // Remove the deleted item from the state
      setData((prevData) => prevData.filter((item) => item._id !== id));
      
    } catch (error) {
      console.error('Error deleting report:', error);
      alert('Error deleting report. Please try again.');
    }
  };

  const handleViewDetails = (id) => {
    console.log('View details for ID:', id);
    setID({id});
    navigate('/Report_View');
  };

  const handleComplete = async (id) => {
    try {
        console.log("inside handleComplete function, ID:", id);

        // Mark the report as complete
        const response = await axios.post(`https://backend-two-henna-56.vercel.app/api/reports/setComplete`, { id }, {
            headers: { 'Content-Type': 'application/json' },
        });

        console.log("Report marked as complete:", response.data);

        // Only delete the report after marking it as complete
        await handleDelete(id);
    } catch (error) {
        console.error("Error in handleComplete:", error.message);
    }
};

  return (
    <div className={`${table_style.table_container} ${className}`}>
      <table className={`${table_style.crime_reports_table} ${className}`}>
        <thead>
          <tr>
            {columns.map((column, index) => (
              <th key={column} className={`${table_style.table_header} ${className}`}>
                {column}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
        {Array.isArray(data) && data.map((row, index) => (
          <tr key={row._id || index} className={table_style.table_row}>
            <td className={`${table_style.table_cell} ${className}`}>{row._id}</td>
            <td className={`${table_style.table_cell} ${className}`}>{row.crime_type}</td>
            <td className={`${table_style.table_cell} ${className}`}>{row.crime_location}</td>
            <td className={`${table_style.table_cell} ${className}`}>{new Date(row.crime_date).toLocaleDateString()}</td>
            <td className={`${table_style.table_cell_centered} ${className}`}>
              <button 
                onClick={() => handleViewDetails(row._id)}
                className={table_style.action_button}
              >
                <img src={detailEye} alt="View Details" className={table_style.action_icon} />
              </button>
              <button 
                onClick={() => handleDelete(row._id)}
                className={table_style.action_button}
              >
                <img src={trashIcon} alt="Delete" className={table_style.action_icon} />
              </button>
              <button 
                onClick={() => handleComplete(row._id)}
                className={table_style.action_button}
              >
                <img src={completeIcon} alt="Complete" className={table_style.action_icon} />
              </button>
            </td>
          </tr>
        ))}
      </tbody>
      </table>
    </div>
  );
};

export default Pending_Cases_Table;