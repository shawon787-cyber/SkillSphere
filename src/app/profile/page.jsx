import Image from "next/image";

const ProfilePage = () => {
    return (
        <div className=" flex items-center justify-center px-4 py-16 lg:py-20 relative overflow-hidden bg-[#f1f5f9]">
      
      {/* 🟣 Strong Violet (Top-left) */}
      <div className="absolute w-[650px] h-[650px] bg-[#7c3aed] opacity-60 rounded-full blur-[160px] top-[-250px] left-[-250px]"></div>

      {/* 🟠 Soft Orange (Right side) */}
      <div className="absolute w-[500px] h-[500px] bg-[#fbbf24] opacity-25 rounded-full blur-[140px] top-[80px] right-[-180px]"></div>

      {/* ⚪ White Fade (Bottom-right) */}
      <div className="absolute w-[500px] h-[500px] bg-white opacity-80 rounded-full blur-[160px] bottom-[-220px] right-[-150px]"></div>

      {/* Content */}
      <div className="relative w-full max-w-4xl space-y-6">
        
        {/* Profile Card */}
        <div className="bg-white/70 backdrop-blur-lg rounded-2xl shadow p-6 flex items-center gap-6">
          
          <div className="w-20 h-20 rounded-full overflow-hidden border">
            <Image
              src="/profile.jpg"
              alt="profile"
              width={80}
              height={80}
              className="object-cover"
            />
          </div>

          <div className="flex-1">
            <h2 className="text-xl font-semibold text-gray-800">
              Mohammad Shawon
            </h2>
            <p className="text-gray-500 text-sm">
              shawonmohammad787@gmail.com
            </p>

            <div className="mt-3 flex gap-3">
              <button className="h-10 rounded-md bg-gradient-to-r from-[#4e2ecf] to-[#a57aeb] text-white font-medium hover:scale-105 transition mt-2 cursor-pointer px-6">
                Update profile
              </button>
              <button className="h-10 rounded-md border border-gray-300 font-medium hover:scale-105 transition mt-2 cursor-pointer px-6">
                Browse courses
              </button>
              
            </div>
          </div>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          
          <div className="bg-white/70 backdrop-blur-lg rounded-xl p-5 shadow">
            <p className="text-xs text-gray-500 uppercase">Enrolled</p>
            <h3 className="text-2xl font-bold text-gray-800">0</h3>
            <p className="text-sm text-gray-400">Courses started</p>
          </div>

          <div className="bg-white/70 backdrop-blur-lg rounded-xl p-5 shadow">
            <p className="text-xs text-gray-500 uppercase">Completed</p>
            <h3 className="text-2xl font-bold text-gray-800">0</h3>
            <p className="text-sm text-gray-400">Keep going!</p>
          </div>

          <div className="bg-white/70 backdrop-blur-lg rounded-xl p-5 shadow">
            <p className="text-xs text-gray-500 uppercase">Streak</p>
            <h3 className="text-2xl font-bold text-gray-800">1d</h3>
            <p className="text-sm text-gray-400">Show up daily</p>
          </div>
        </div>

        {/* Account Section */}
        <div className="bg-white/70 backdrop-blur-lg rounded-xl p-6 shadow">
          <h3 className="font-semibold text-gray-800 mb-2">Account</h3>
          <p className="text-sm text-gray-500 mb-4">
            Manage your account and session.
          </p>

          <button className="px-4 py-2 border border-gray-300 rounded-lg text-sm hover:bg-gray-100 transition">
            Sign out
          </button>
        </div>
      </div>
    </div>
    );
};

export default ProfilePage;