import React from "react";
import Link from "next/link";
import { FiGithub } from "react-icons/fi";
import { FiTwitter } from "react-icons/fi";
import { BsWhatsapp } from "react-icons/bs";
import { RiGraduationCapLine } from "react-icons/ri";

const Footer = () => {
  return (
    <footer className="bg-slate-50 mt-20">
      <div className="max-w-7xl mx-auto px-6 py-16 grid grid-cols-1 md:grid-cols-4 gap-10">

        {/* Logo + Description */}
        <div>
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
          <p className="mt-4 text-sm text-gray-600 max-w-xs">
            Learn in-demand skills from industry experts. Anywhere, anytime, at your own pace.
          </p>
        </div>

        {/* Explore */}
        <div>
          <h3 className="font-semibold mb-4">Explore</h3>
          <ul className="space-y-2 text-sm text-gray-600">
            <li><Link href="/">Home</Link></li>
            <li><Link href="/courses">All Courses</Link></li>
            <li><Link href="/profile">My Profile</Link></li>
          </ul>
        </div>

        {/* Legal */}
        <div>
          <h3 className="font-semibold mb-4">Legal</h3>
          <ul className="space-y-2 text-sm text-gray-600">
            <li><Link href="#">Terms & Conditions</Link></li>
            <li><Link href="#">Privacy Policy</Link></li>
            <li><Link href="#">Cookie Policy</Link></li>
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h3 className="font-semibold mb-4">Contact</h3>

          <p className="text-sm text-gray-600 mb-4">
            📧 hello@skillsphere.app
          </p>

          {/* Social Icons */}
          <div className="flex gap-3">
            <div className="w-9 h-9 rounded-full border flex items-center justify-center hover:bg-gray-200 cursor-pointer">
              <FiGithub />
            </div>
            <div className="w-9 h-9 rounded-full border flex items-center justify-center hover:bg-gray-200 cursor-pointer">
              <FiTwitter />
            </div>
            <div className="w-9 h-9 rounded-full border flex items-center justify-center hover:bg-gray-200 cursor-pointer">
              <BsWhatsapp />
            </div>
          </div>
        </div>

      </div>

      {/* Bottom Bar */}
      <div className="border-t text-center py-5 text-sm text-gray-500">
        © 2026 SkillSphere. Crafted for curious minds.
      </div>
    </footer>
  );
};

export default Footer;