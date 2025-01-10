import React, { useState } from 'react'; // Import React and the useState hook from React to handle state
import table_style from "./Local_Felonies_Table.module.css";
import detailEye from "../../../assets/tables/eye icon.png";
import dustbin from "../../../assets/tables/trash icon.png";

const Local_Felonies_Table = ({className}) => {
  console.log("Table component loaded");
  // Define table columns in an array. These are the headers that will appear at the top of the table.
  const columns = ['ID', 'Felony', 'Location', 'Date', 'Actions'];

  // Define the initial state for the data in the table. Use the useState hook to manage it.
  const [data, setData] = useState([
    { id: 1032, Felony: 'Crime 1', Location: 'location 1', date: '2023-09-09', Actions: {detailEye, dustbin}},
    { id: 2647, Felony: 'Crime 2', Location: 'location 2', date: '2024-11-08', Actions: {detailEye, dustbin}},
    { id: 3939, Felony: 'Crime 3', Location: 'location 3', date: '2024-02-07', Actions: {detailEye, dustbin}},
    { id: 4734, Felony: 'Crime 4', Location: 'location 4', date: '2024-12-06', Actions: {detailEye, dustbin}},
  ]);

  //details href to be generated from user clicked at backend.
  const link = "/Local_Felonies";

  // JSX structure for rendering the table and its contents
  return (
    <div className={`${table_style.table_container} ${className}`}>{/* Container to hold the table*/}
      <table className={`${table_style.crime_reports_table} ${className}`}>{/* Table element  */}
        <thead>{/* The table header contains column names */}
          <tr>{/* A single row for the header */}
            {/* Loop through the 'columns' array to create table headers */}
            {columns.map((column, index) => (
              <th key={index} className={`${table_style.table_header}  ${className}`}> {/* Each header has a key and class for styling */}
                {column} {/* The text displayed in the header is the column name */}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>   {/* Table body contains the actual data rows */}
                  {/* Loop through the 'data' array to create each row of data */}
          {data.map((row, index) => (
            <tr key={index}> {/* Each row has a unique key for React's reconciliation */}
              <td className={`${table_style.table_cell} ${className}`}>{row.id}</td> {/* Display the 'id' of each row in a table cell */}
              <td className={`${table_style.table_cell} ${className}`}>{row.Felony}</td> {/* Display the 'title' of each row */}
              <td className={`${table_style.table_cell} ${className}`}>{row.Location}</td> {/* Display the 'description' */}
              <td className={`${table_style.table_cell} ${className}`}>{row.date}</td> {/* Display the 'date' of the crime */}
              <td className={`${table_style.table_cell_centered} ${className}`}>
                <a href={link}><img src={row.Actions.detailEye} alt="Details Icon" ></img></a>
                <a href={link}><img src={row.Actions.dustbin} alt="dustbin Icon" ></img></a>
              </td> {/*image inside row dtails so do accordingly, look this up in detail */}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Local_Felonies_Table; 




// Detailed Comments:

// useState:

// We're using the useState hook to define data—the state of our table rows. useState is crucial because it allows the component to track and update the data dynamically (e.g., from an API later on).

// for example you can fetch data dynamically from an API (or database) later on and update your component's state using the useState hook.

// In React, to fetch data from an external source like an API or database, we typically use useEffect alongside useState.

// Here’s how it works:

// 1. useState Hook:
// We use useState to create a state variable (e.g., data) that will hold the data fetched from the API.

// 2. useEffect Hook:
// useEffect is used to run side effects like fetching data from an API. When the component renders, useEffect will run the code inside it. This makes it perfect for fetching data as soon as the component loads.



// In this example, data is initially hardcoded. You can later modify setData to fetch new data dynamically.

// columns:

// The columns array is simply a list of headers we want to display in the table (like 'ID', 'Title', etc.).
// These will be rendered at the top of the table. You could replace this with dynamic data, such as column names from a backend API.
// Mapping columns to <th>:

// columns.map((column, index) => ...) is used to loop over the column names and create a <th> (table header) for each one.
// The key is required in React to help with efficient rendering. React uses this key to identify each column element and update only the changed ones when the data changes.


// How index Works in map():
// In this case, map() takes a callback function as its argument. This callback is called for every item in the array, and it receives three parameters:

// currentValue (the current item in the array)
// index (the index of the current item in the array)
// array (the entire array being iterated over, which is optional and not used here)
// For example, in this line:


// column: This is the value of the current item in the columns array (e.g., 'ID', 'Title', etc.).
// index: This is the index of the current item in the columns array (e.g., 0 for 'ID', 1 for 'Title', etc.).
// The index automatically increases with each iteration, and you don't need to manually initialize it to 0. JavaScript handles that internally.
// Example Walkthrough:
// Let’s consider the columns array:

// When you call columns.map(), it processes each item in the columns array one by one. The map() function passes each item in the array to the callback function, along with its index in the array.

// First iteration (index 0):

// column = 'ID'
// index = 0
// React creates the <th> element with key={0}, and the column name 'ID'.
// Second iteration (index 1):

// column = 'Title'
// index = 1
// React creates the <th> element with key={1}, and the column name 'Title'.
// Third iteration (index 2):

// column = 'Description'
// index = 2
// React creates the <th> element with key={2}, and the column name 'Description'.
// Fourth iteration (index 3):

// column = 'Date'
// index = 3
// React creates the <th> element with key={3}, and the column name 'Date'.

// Mapping data to <td>:

// data.map((row, index) => ...) is used to loop through each row of data and generate a <tr> (table row) for every entry in the data array.
// Each td (table cell) inside the row displays specific attributes (like id, title, etc.) from each row object.