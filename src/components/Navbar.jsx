
"use client";

import Link from "next/link";
import { useState } from "react";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";
import { RiGraduationCapLine } from "react-icons/ri";
import { authClient } from "@/lib/auth-client";
import Image from "next/image";

const Navbar = () => {
  const { data } = authClient.useSession();
  const user = data?.user;

  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  const isActive = (path) => pathname === path;


  // const getValidImage = (img) => {
  //   if (!img) return "https://i.ibb.co/4pDNDk1/avatar.png";
  //   if (typeof img === "string" && img.startsWith("http")) return img;
  //   return "https://i.ibb.co/4pDNDk1/avatar.png";
  // };

  const profileImage = user?.image;

  const handleLogout = async () => {
    await authClient.signOut();
    window.location.href = "/signin";
  };

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

        
        <ul className="hidden md:flex items-center gap-6 text-sm font-medium">
          <li>
            <Link
              href="/"
              className={isActive("/") ? "text-purple-700 font-semibold" : ""}
            >
              Home
            </Link>
          </li>

          <li>
            <Link
              href="/courses"
              className={isActive("/courses") ? "text-purple-700 font-semibold" : ""}
            >
              Courses
            </Link>
          </li>

          <li>
            <Link
              href="/profile"
              className={isActive("/profile") ? "text-purple-700 font-semibold" : ""}
            >
              Profile
            </Link>
          </li>
        </ul>

       
        <div className="hidden md:flex items-center gap-4">

          {!user && (
            <>
              <Link
                href="/signin"
                className="px-5 py-1.5 rounded-md bg-gradient-to-r from-[#4e2ecf] to-[#a57aeb] text-white"
              >
                Login
              </Link>

              <Link
                href="/signup"
                className="px-5 py-1.5 rounded-md border border-[#664ada] text-[#664ada]"
              >
                Register
              </Link>
            </>
          )}

          {user && (
            <>
              <div className="flex items-center gap-2">
                <div className="relative w-8 h-8 rounded-full overflow-hidden">
                  <Image
                    src={profileImage}
                    alt="profile"
                    fill
                    className="object-cover"
                  />
                </div>

                <p className="font-medium">{user.name}</p>
              </div>

              <button
                onClick={handleLogout}
                className="px-5 py-1.5 rounded-md bg-gradient-to-r from-[#4e2ecf] to-[#a57aeb] text-white"
              >
                Logout
              </button>
            </>
          )}
        </div>

       
        <button onClick={() => setOpen(!open)} className="md:hidden">
          {open ? <X /> : <Menu />}
        </button>
      </nav>

     
      {open && (
        <div className="md:hidden bg-white border-t px-4 py-4 space-y-3">

          <Link
            href="/"
            onClick={() => setOpen(false)}
            className="block"
          >
            Home
          </Link>

          <Link
            href="/courses"
            onClick={() => setOpen(false)}
            className="block"
          >
            Courses
          </Link>

          <Link
            href="/profile"
            onClick={() => setOpen(false)}
            className="block"
          >
            Profile
          </Link>

          {!user && (
            <div className="flex flex-col gap-2 pt-2">
              <Link
                href="/signin"
                onClick={() => setOpen(false)}
                className="text-center px-4 py-2 rounded-md bg-gradient-to-r from-[#4e2ecf] to-[#a57aeb] text-white"
              >
                Login
              </Link>

              <Link
                href="/signup"
                onClick={() => setOpen(false)}
                className="text-center px-4 py-2 rounded-md border border-[#664ada]"
              >
                Register
              </Link>
            </div>
          )}

          {user && (
            <div className="flex flex-col gap-3 pt-2">

              <div className="flex items-center gap-2">
                <div className="relative w-8 h-8 rounded-full overflow-hidden">
                  <Image
                    src={profileImage}
                    alt="profile"
                    fill
                    className="object-cover"
                  />
                </div>
                <p>{user.name}</p>
              </div>

              <button
                onClick={handleLogout}
                className="px-4 py-2 rounded-md bg-gradient-to-r from-[#4e2ecf] to-[#a57aeb] text-white"
              >
                Logout
              </button>
            </div>
          )}

        </div>
      )}
    </div>
  );
};

export default Navbar;