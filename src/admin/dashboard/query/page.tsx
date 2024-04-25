"use client"
import  { useEffect, useState } from 'react';
import axios from 'axios';
import DataTable, { TableColumn } from 'react-data-table-component';

const API_URL = "http://localhost:5000/api";

// Define the type for your user data
type QueryData = {
  _id: string;
  full_name: string;
  email: string;
  your_city: string;
  // Add more properties as needed
};


const QueryTable = () => {
  const [loading, setLoading] = useState(true);
  const [query, setQuery] = useState<QueryData[]>([]);

  useEffect(() => {
    async function fetchUsers() {
      try {
        const response = await axios.get<{ queries: QueryData[] }>(`${API_URL}/queries`);
        setQuery(response.data.queries);
        setLoading(false); 
        // console.log(response.data.queries)
      } catch (error:any) {
        console.error("Error fetching users:", error.message);
        setLoading(false); 
      }
    }

    fetchUsers();
  }, []);
  console.log(query)

  // Define the columns with correct types
  const columns: TableColumn<QueryData>[] = [
    {
      name: 'ID',
      selector: (row: QueryData) => row._id,
      sortable: true,
    },
    {
      name: 'Full Name',
      selector: (row: QueryData) => row.full_name,
      sortable: true,
    },
    {
      name: 'Email',
      selector: (row: QueryData) => row.email,
      sortable: true,
    },
    {
      name: 'City',
      selector: (row: QueryData) => row.your_city,
      sortable: true,
    },
    // Add more columns as needed
  ];
  
  return (
    <div className="min-h-screen w-screen flex flex-col justify-start items-start m-10">

      <div className="w-full max-w-screen-xl overflow-x-auto">
        <DataTable
          title="Query"
          columns={columns}
          data={query}
          pagination
          progressPending={loading}
        />
      </div>
    </div>
  );
};

export default QueryTable;
