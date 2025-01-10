import React, { useState, useEffect } from 'react';
import table_style from "./Pending_Cases_Table.module.css";
import detailEye from "../../../assets/tables/eye icon.png";
import dustbin from "../../../assets/tables/trash icon.png";
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
  const role = localStorage.getItem('role');

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
              {(role === 'admin') && (
            <>
              <button 
                onClick={() => handleDelete(row._id)}
                className={table_style.action_button}
              >
                <img src={dustbin} alt="Delete" className={table_style.action_icon} />
              </button>
            </>
          )}
            </td>
          </tr>
        ))}
      </tbody>
      </table>
    </div>
  );
};

export default Pending_Cases_Table;