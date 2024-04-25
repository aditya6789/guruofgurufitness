"use client"
import  { useEffect, useState } from 'react';
import axios from 'axios';
import DataTable, { TableColumn } from 'react-data-table-component';

const API_URL = "http://localhost:5000/api";

// Define the type for your user data
type UserData = {
  _id: string;
  full_name: string;
  email: string;
  role: string;
  // Add more properties as needed
};


const UsersTable = () => {
  const [loading, setLoading] = useState(true);
  const [users, setUsers] = useState<UserData[]>([]);

  useEffect(() => {
    async function fetchUsers() {
      try {
        const response = await axios.get<{ users: UserData[] }>(`${API_URL}/users`);
        setUsers(response.data.users);
        setLoading(false);
      } catch (error:any) {
        console.error("Error fetching users:", error.message);
      }
    }

    fetchUsers();
  }, []);

  // Define the columns with correct types
  const columns: TableColumn<UserData>[] = [
    {
      name: 'ID',
      selector: (row: UserData) => row._id,
      sortable: true,
    },
    {
      name: 'Full Name',
      selector: (row: UserData) => row.full_name,
      sortable: true,
    },
    {
      name: 'Email',
      selector: (row: UserData) => row.email,
      sortable: true,
    },
    {
      name: 'Role',
      selector: (row: UserData) => row.role,
      sortable: true,
    },
    // Add more columns as needed
  ];
  
  return (
    <div className="min-h-screen w-screen flex flex-col justify-start items-start m-10">

      <div className="w-full max-w-screen-xl overflow-x-auto">
        <DataTable
          title="Users"
          columns={columns}
          data={users}
          pagination
          progressPending={loading}
        />
      </div>
    </div>
  );
};

export default UsersTable;
