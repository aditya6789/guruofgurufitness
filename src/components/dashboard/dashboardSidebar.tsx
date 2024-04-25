
import  { useState } from "react";
import { Link } from "react-router-dom";

const SidebarData = [
  {
    title: "Dashboard",
    href: "/admin/dashboard",
  },
  {
    title: "Users",
    href: "/admin/dashboard/user",
  },
  {
    title: "Courses",
    href: "/admin/dashboard/course",
  },
  {
    title: "Query",
    href: "/admin/dashboard/query",
  },
  {
    title: "Landing",
    href: "/admin/dashboard/landing",
  },
];

const SiderBar = () => {
  const [active, setActive] = useState("dashboard");
  return (
    <div className="flex flex-col h-screen bg-violet-800 p-10 sticky">
      <ul>
        {SidebarData.map((item, index) => (
          <Link to={`${item.href}`}>
            <li
              key={index}
              className={`mb-4 p-4 rounded-xl cursor-pointer w-full ${
                active === item.href
                  ? "bg-white text-black"
                  : "bg-violet-800 text-white"
              }`}
              onClick={() => setActive(item.href)}
            >
              {item.title}
            </li>
          </Link>
        ))}
      </ul>
    </div>
  );
};

export default SiderBar;
