"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { authClient } from "@/lib/auth-client";
import { useRouter } from "next/navigation";
import toast from "react-hot-toast";

const ProfilePage = () => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  const [showModal, setShowModal] = useState(false);
  const [name, setName] = useState("");
  const [preview, setPreview] = useState("");

  const router = useRouter();

 
  useEffect(() => {
    const getUser = async () => {
      const { data } = await authClient.getSession();

      if (!data?.user) {
        router.replace("/signin");
        return;
      }

      setUser(data.user);
      setName(data.user.name);
      setPreview(data.user.image);

      setLoading(false);
    };

    getUser();
  }, [router]);

 
  const handleImageChange = (e) => {
    const file = e.target.files[0];

    if (file) {
      const imageUrl = URL.createObjectURL(file);
      setPreview(imageUrl);
    }
  };

 
  const handleSave = async () => {
    try {
      setUser({
        ...user,
        name,
        image: preview,
      });

      setShowModal(false);
      toast.success("Profile updated ✅");
    } catch (err) {
      toast.error("Update failed ❌");
    }
  };


  if (loading) {
    return (
      <div className="flex items-center justify-center h-screen">
        <p>Loading...</p>
      </div>
    );
  }

  return (
    <div className="flex items-center justify-center px-4 py-16 lg:py-20 bg-[#f1f5f9]">

      <div className="w-full max-w-4xl space-y-6">

       
        <div className="bg-white/70 backdrop-blur-lg rounded-2xl shadow p-6 flex items-center gap-6">

          <div className="w-20 h-20 rounded-full overflow-hidden border">
            <Image
              src={user?.image || "/profile.jpg"}
              alt="profile"
              width={80}
              height={80}
              className="object-cover"
            />
          </div>

          <div className="flex-1">
            <h2 className="text-xl font-semibold text-gray-800">
              {user?.name}
            </h2>
            <p className="text-gray-500 text-sm">
              {user?.email}
            </p>

            <div className="mt-3 flex gap-3">
              <button
                onClick={() => setShowModal(true)}
                className="h-10 px-6 rounded-md bg-gradient-to-r from-[#4e2ecf] to-[#a57aeb] text-white font-medium hover:scale-105 transition"
              >
                Update profile
              </button>

              <button
                onClick={() => router.push("/courses")}
                className="h-10 px-6 rounded-md border border-gray-300 font-medium hover:scale-105 transition"
              >
                Browse courses
              </button>
            </div>
          </div>
        </div>

      
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="bg-white/70 backdrop-blur-lg rounded-xl p-5 shadow">
            <p className="text-xs text-gray-500 uppercase">Enrolled</p>
            <h3 className="text-2xl font-bold">0</h3>
            <p className="text-sm text-gray-400">Courses started</p>
          </div>

          <div className="bg-white/70 backdrop-blur-lg rounded-xl p-5 shadow">
            <p className="text-xs text-gray-500 uppercase">Completed</p>
            <h3 className="text-2xl font-bold">0</h3>
            <p className="text-sm text-gray-400">Keep going!</p>
          </div>

          <div className="bg-white/70 backdrop-blur-lg rounded-xl p-5 shadow">
            <p className="text-xs text-gray-500 uppercase">Streak</p>
            <h3 className="text-2xl font-bold">1d</h3>
            <p className="text-sm text-gray-400">Show up daily</p>
          </div>
        </div>

      
        <div className="bg-white/70 backdrop-blur-lg rounded-xl p-6 shadow">
          <h3 className="font-semibold text-gray-800 mb-2">Account</h3>

          <button
            onClick={async () => {
              await authClient.signOut();
              toast.success("Logged out 👋");
              router.replace("/signin");
            }}
            className="px-4 py-2 border border-gray-300 rounded-lg text-sm hover:bg-gray-100 transition"
          >
            Sign out
          </button>
        </div>
      </div>

      
      {showModal && (
        <div className="fixed inset-0 bg-black/40 backdrop-blur-sm flex items-center justify-center z-50">
          
          <div className="bg-white/80 backdrop-blur-lg rounded-2xl shadow-xl w-[350px] p-6 space-y-5">

            <h2 className="text-lg font-semibold text-center">
              Update Profile
            </h2>

           
            <div className="flex justify-center">
              <div className="relative w-24 h-24">
                <Image
                  src={preview || "/profile.jpg"}
                  alt="preview"
                  fill
                  className="rounded-full object-cover border"
                />
              </div>
            </div>

           
            <label className="block text-center cursor-pointer">
              <span className="text-sm text-purple-600 font-medium hover:underline">
                Change Photo
              </span>
              <input
                type="file"
                onChange={handleImageChange}
                className="hidden"
              />
            </label>

           
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="w-full px-4 py-2 rounded-lg border focus:outline-none focus:ring-2 focus:ring-purple-400"
              placeholder="Your name"
            />

           
            <div className="flex gap-3">
              <button
                onClick={handleSave}
                className="flex-1 py-2 rounded-lg bg-gradient-to-r from-[#4e2ecf] to-[#a57aeb] text-white font-medium hover:scale-105 transition"
              >
                Save
              </button>

              <button
                onClick={() => setShowModal(false)}
                className="flex-1 py-2 rounded-lg border border-gray-300 hover:bg-gray-100 transition"
              >
                Cancel
              </button>
            </div>

          </div>
        </div>
      )}
    </div>
  );
};

export default ProfilePage;