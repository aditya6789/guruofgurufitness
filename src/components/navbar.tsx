// "use client";
// import React, { useEffect } from "react";
import ContainerWrapper from "../containerWrapper";

import { useState } from "react";


import CustomDropdown from "@/components/customDropdown";
import { FiMessageSquare } from "react-icons/fi";

import { AiOutlineSafetyCertificate } from "react-icons/ai";
import { FiDownloadCloud } from "react-icons/fi";

import { IoIosPhonePortrait } from "react-icons/io";
// import { isAuthenticated } from "@/utils/common";
import { useAuth } from "@/utils/AuthProvider";
// import { Button } from "@/components/ui/button"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
// import { getAllUsers, updateUser } from "@/utils/api";
import { Link } from "react-router-dom";
import { Button } from "./ui/button";
const NavbarLink = [
  {
    icon: <FiMessageSquare />,
    name: "Enquire Now",
    href: "query",
  },
  {
    icon: <AiOutlineSafetyCertificate />,
    name: "Certified",
    href: "certified",
  },
  {
    icon: <FiDownloadCloud />,
    name: "Download",
    href: "download",
  },
];

export const AboutUsSubLInk = [
  {
    name: "Mission & Vission",
    href: "mission-vission",
  },
  {
    name: "Our Professional",
    href: "professional",
  },
];

const academySubLInk = [
  {
    name: "Introduction",
    href: "intoduction",
  },
  {
    name: "Affiliations",
    href: "affiliations",
  },
  {
    name: "Schedule",
    href: "schedule",
  },
  {
    name: "Workshops",
    href: "workshops",
  },
];

const CertificationsSubLInk = [
  {
    name: "Certified Personal Trainer",
    href: "intoduction",
  },
  {
    name: "Certified Fitness Instructor",
    href: "affiliations",
  },
  {
    name: "Certified Nutrition Specialist",
    href: "schedule",
  },
  {
    name: "Functional Training Specialist",
    href: "workshops",
  },
  {
    name: "Certified Fitness Practitioner",
    href: "workshops",
  },
  {
    name: "Diploma In Personal Training And Nutrition",
    href: "workshops",
  },
  {
    name: "Asia Edu-Fit",
    href: "workshops",
  },
];

const NavbarComponent = () => {
  const [isOpen, setIsOpen] = useState(false);
  // const [name, setName] = useState("");
  // const [email, setEmail] = useState("");
  const { user, logout } = useAuth();

  // const handleNameChange = (e:any) => {
  //   setName(e.target.value);
  // };

  // const handleEmailChange = (e:any) => {
  //   setEmail(e.target.value);
  // };
  // const handleUpdateProfile = async () => {
  //   try {
  //     // await updateUser(user.); // Call the updateUser API function with the new name and email
  //     console.log("User profile updated successfully");
  //     // Optionally, you can update the user object in the context or state with the new name and email
  //   } catch (error:any) {
  //     console.error("Error updating user profile:", error.message);
  //   }
  // };


  const toggleNavbar = () => {
    setIsOpen(!isOpen);
  };
  return (
    <>
      <nav className="mb-5">
        <ContainerWrapper>
          <div className="flex justify-between items-center">
            <Link to={"/"}>
              <div className="text-[35px] font-bold uppercase  ">
                <span className="text-violet-600">Guru</span> Fitness
              </div>{" "}
            </Link>

            <div className="flex justify-end gap-5 items-center">
              <button className="block md:hidden" onClick={toggleNavbar}>
                <img src="/menu-icon.svg" alt="Menu" />
              </button>

              <div>
                <ul
                  className={`md:flex ${
                    isOpen ? "block" : "hidden"
                  } md:items-center md:gap-5`}
                >
                  {NavbarLink.map((link, index) => (
                    <Link
                      to={link.href}
                      key={index}
                      className="flex justify-start items-center gap-3 hover:stroke-violet-500 hover:text-violet-500"
                    >
                      {link.icon}
                      <li className=" cursor-pointer">{link.name}</li>
                    </Link>
                  ))}
                </ul>

                {/* <Button variant={'outline'}>Log In</Button> */}
              </div>
              {user ? (
                <Dialog>
                  <DialogTrigger asChild>
                    <Button variant="outline">Edit Profile</Button>
                  </DialogTrigger>
                  <DialogContent className="sm:max-w-[425px]">
                    <DialogHeader>
                      <DialogTitle>Edit profile</DialogTitle>
                      <DialogDescription>
                        Make changes to your profile here. Click save when
                        you're done.
                      </DialogDescription>
                    </DialogHeader>
                    <div className="grid gap-4 py-4">
                      <div className="grid grid-cols-4 items-center gap-4">
                        <Label htmlFor="name" className="text-right">
                          Name
                        </Label>
                        <Input
                          id="name"
                          value={user.full_name}
                          className="col-span-3"
                        />
                      </div>
                      <div className="grid grid-cols-4 items-center gap-4">
                        <Label htmlFor="username" className="text-right">
                          Username
                        </Label>
                        <Input
                          id="username"
                          value={"@" + user.email}
                          className="col-span-3"
                        />
                      </div>
                    </div>
                    <DialogFooter>
                      <Button type="submit">Save changes</Button>
                      <Button type="submit" variant="secondary" color="danger" onClick={logout}>
                        Log Out
                      </Button>
                    </DialogFooter>
                  </DialogContent>
                </Dialog>
              ) : (
                <div className="flex justify-evenly items-center gap-3">
                  <Link to={"/auth/login"}>
                    <Button color="primary" variant="default">
                      LogIn
                    </Button>
                  </Link>
                  <Link to={"/auth/register"}>
                    <Button variant={"secondary"}>SignUp</Button>
                  </Link>
                </div>
              )}
            </div>
          </div>

          <div className="flex justify-end  items-center ">
            <div className="flex justify-evenly items-center list-none">
              <CustomDropdown name="About Us" sublinks={AboutUsSubLInk} />
              <CustomDropdown name="Academy" sublinks={academySubLInk} />
              <CustomDropdown
                name="Certification"
                sublinks={CertificationsSubLInk}
              />
            </div>
            <div className="flex justify-evenly items-center gap-5">
              <p className="hover:text-violet-500 cursor-pointer">
                Testimonial
              </p>
              <p className="hover:text-violet-500 cursor-pointer">Blog</p>
              <Link
                to={"#"}
                className="flex justify-start items-center gap-3 hover:stroke-violet-500 hover:text-violet-500"
              >
                <IoIosPhonePortrait />
                <h3 className=" cursor-pointer">9198XXXXX</h3>
              </Link>
            </div>
          </div>
        </ContainerWrapper>
      </nav>
    </>
  );
};

export default NavbarComponent;
