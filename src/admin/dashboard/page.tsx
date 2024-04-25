"use client";
import RevenueLineChart from "@/components/dashboard/revenueLineChart";
import UserDoughnutChart from "@/components/dashboard/userDoughnutChart";
// import { useAuth } from "@/utils/AuthProvider";
import axios from "axios";
// import { useRouter } from "next/navigation";
import { useState } from "react";
// import { useNavigation } from "react-router-dom";

const userData = [50, 30, 20, 40, 60]; // Replace with your actual data
const monthLabels = ["January", "February", "March", "April", "May"];
const revenueData = [1000, 1500, 1200, 2000, 1800];
// Replace with your actual data
type UserData = {
  _id: string;
  full_name: string;
  email: string;
  role: string;
  // Add more properties as needed
};
const API_URL = "http://localhost:5000/api";

const DashboardPage = () => {
  const [users, setUsers] = useState<UserData[]>([]);
const [loading, setLoading] = useState(true);
async function fetchUsers() {
  try {
    const response = await axios.get<{ users: UserData[] }>(`${API_URL}/users`);
    setUsers(response.data.users);
    console.log(response.data.users)
    setLoading(false);
  } catch (error:any) {
    console.error("Error fetching users:", error.message);
  }
}
fetchUsers();
  return (
    <section className="p-8 w-full">
            {loading ? <p>Loading...</p> : <p>Data loaded!</p>}
      <div className="flex justify-start gap-10 items-center">
        <div className="h-[70px] w-[130px] shadow-md bg-indigo-500  flex flex-col justify-center items-center text-white font-medium">
          Total User
          <h3 className="font-semibold text-white">{users.length}</h3>
        </div>
        <div className="h-[70px] w-[130px] shadow-md   flex flex-col justify-center items-center text-black font-medium">
          Total Revenue
          <h3 className="font-semibold text-black">₹778798</h3>
        </div>
        <div className="h-[70px] w-[130px] shadow-md bg-indigo-500  flex flex-col justify-center items-center text-white font-medium">
          Total Query
          <h3 className="font-semibold text-white">778798</h3>
        </div>
      </div>
      <div className="flex justify-start items-ceneter mt-20 gap-10">
        <div className="w-[400px] h-[300px] shadow-lg rounded-lg p-6">
          <h1 className="text-xl font-bold mb-4">Monthly User</h1>
          <UserDoughnutChart data={userData} labels={monthLabels} />
        </div>
        <div className="w-[400px] h-[300px] shadow-lg rounded-lg p-6">
          <h1 className="text-xl font-bold mb-4">Monthly Revenue</h1>
          <RevenueLineChart data={revenueData} labels={monthLabels} />
        </div>
      </div>
    </section>
  );
};

export default DashboardPage;
