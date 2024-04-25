"use client";
// import SiderBar from "@/components/dashboard/dashboardSidebar";
import DashboardSlider from "@/components/dashboard/dashboardSidebar";
import { useAuth } from "@/utils/AuthProvider";
// import { isAdmin } from "@/utils/common";
import { useNavigate, Outlet } from "react-router-dom";
import { useEffect } from "react";

const layout = () => {
  const router = useNavigate();
  const { user, setUser } = useAuth();

  useEffect(() => {
    // Redirect to login page if user is not logged in
    // console.log(user)

    const token = localStorage.getItem("token");
    const storedUser = localStorage.getItem("user");

    if (token && storedUser) {
      setUser(JSON.parse(storedUser));
    } else {
      router("/auth/login");
    }

    // if (!user) {
    //   console.log(user);
    // }
  }, [router]);

  if (!user) {
    console.log(user);
    return <></>; // Render nothing until authentication status is determined
  }

  // Check if the user is logged in and has the 'admin' role

  return (
    <>
      <div className="flex justify-start ">
        <DashboardSlider />
        <main>
          <Outlet />
        </main>
      </div>
    </>
  );
};

export default layout;
