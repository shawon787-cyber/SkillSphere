"use client";

import Link from "next/link";
import { useState } from "react";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";
import { RiGraduationCapLine } from "react-icons/ri";
import { authClient } from "@/lib/auth-client";
import Image from "next/image";


const Navbar = () => {
  const { data: session } = authClient.useSession();
  const userData = authClient.useSession();
  const user = userData.data?.user;
  console.log(user)
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  const isActive = (path) => pathname === path;

  return (
    <div className="bg-white/70 backdrop-blur-md sticky top-0 z-50">
      <nav className="flex justify-between items-center py-4 max-w-7xl mx-auto w-full px-4">

       
        <div className="flex gap-2 items-center">
          <p className="bg-gradient-to-br from-[#4e2ecf] to-[#a57aeb] text-white p-2 rounded-full">
            <RiGraduationCapLine />
          </p>

          <h3 className="text-lg font-bold">
            Skill
            <span className="bg-gradient-to-r from-[#664ada] to-[#a571f7] bg-clip-text text-transparent">
              Sphere
            </span>
          </h3>
        </div>

        {/* Desktop Menu */}
        <ul className="hidden md:flex items-center gap-6 text-sm font-medium">

          <li>
            <Link
              href="/"
              className={`px-3 py-1.5 rounded-md transition ${
                isActive("/")
                  ? "bg-purple-100 text-purple-800"
                  : "hover:text-purple-500"
              }`}
            >
              Home
            </Link>
          </li>

          <li>
            <Link
              href="/courses"
              className={`px-3 py-1.5 rounded-md transition ${
                isActive("/courses")
                  ? "bg-purple-200 text-purple-800"
                  : "hover:text-purple-500"
              }`}
            >
              Courses
            </Link>
          </li>

          <li>
            <Link
              href="/profile"
              className={`px-3 py-1.5 rounded-md transition ${
                isActive("/profile")
                  ? "bg-purple-200 text-purple-800"
                  : "hover:text-purple-500"
              }`}
            >
              Profile
            </Link>
          </li>
        </ul>

        {/* Desktop Buttons */}
        <div>
          { !user &&
            <div className="hidden md:flex items-center gap-3 text-sm">

          <Link
            href={"/signin"}
            className="px-5 py-1.5 rounded-md bg-gradient-to-r from-[#4e2ecf] to-[#a57aeb] text-white hover:opacity-90 transition"
          >
            Login
          </Link>

          <Link
            href={"/signup"}
            className="px-5 py-1.5 rounded-md border border-[#664ada] text-[#664ada] hover:bg-gradient-to-r hover:from-[#664ada] hover:to-[#a571f7] hover:text-white transition"
          >
            Get Started
          </Link>
        </div>
          }
          <div className="hidden md:block">
            {
            user && 
              <div>
                <div className="avatar flex items-center gap-4 shadow p-2 pr-4 rounded-full w-fit">
                  <div className="relative w-8 h-8 rounded-full ring-2 ring-primary ring-offset-2 ring-offset-base-100 overflow-hidden">
                      <Image
                        src={user.image}
                        alt="profile"
                        fill
                        className="object-cover"
                      />
                    </div>
                  <p className="text-xl font-medium">{user.name}</p>
                </div>
              </div>
          }
          </div>
        </div>

        {/* Mobile Button */}
        <button
          onClick={() => setOpen(!open)}
          className="md:hidden p-2 border-purple-900 text-purple-900 rounded-md border"
        >
          {open ? <X size={20} /> : <Menu size={20} />}
        </button>
      </nav>

      {/* Mobile Menu */}
      {open && (
        <div className="md:hidden border-t bg-white px-4 py-3 space-y-3">

          <Link
            onClick={() => setOpen(false)}
            href={"/"}
            className={`block px-3 py-2 rounded-md ${
              isActive("/") ? "bg-purple-200 text-purple-800" : "hover:text-purple-500"
            }`}
          >
            Home
          </Link>

          <Link
            onClick={() => setOpen(false)}
            href={"/courses"}
            className={`block px-3 py-2 rounded-md ${
              isActive("/courses") ? "bg-purple-200 text-purple-800" : "hover:text-purple-500"
            }`}
          >
            Courses
          </Link>

          <Link
            onClick={() => setOpen(false)}
            href={"/profile"}
            className={`block px-3 py-2 rounded-md ${
              isActive("/profile") ? "bg-purple-200 text-purple-800" : "hover:text-purple-500"
            }`}
          >
            Profile
          </Link>

         <div>
          { !user && <div className="flex gap-2 pt-2">

            <Link
              href={"/signin"}
              onClick={() => setOpen(false)}
              className="flex-1 text-center px-3 py-2 rounded-md bg-gradient-to-r from-[#4e2ecf] to-[#a57aeb] text-white"
            >
              Login
            </Link>

            <Link
              href={"/signup"}
              onClick={() => setOpen(false)}
              className="flex-1 text-center px-3 py-2 rounded-md border border-[#664ada] text-[#664ada]"
            >
              Register
            </Link>

          </div>}
          {
            user && 
              <div>
                <div className="avatar flex items-center gap-4 shadow p-2 pr-4 rounded-full w-fit">
                    <div className="relative w-8 h-8 rounded-full ring-2 ring-primary ring-offset-2 ring-offset-base-100 overflow-hidden">
                      <Image
                        src={user.image}
                        alt="profile"
                        fill
                        className="object-cover"
                      />
                    </div>
                  <p className="text-xl font-medium">{user.name}</p>
                </div>
              </div>
          }
         </div>

        </div>
      )}
    </div>
  );
};

export default Navbar;