import Link from "next/link";

export default function NotFound() {
  return (
    <div className="h-screen flex items-center justify-center bg-gradient-to-br from-[#f5f3ff] to-[#ede9fe]">
      
      <div className="text-center space-y-5 px-6">
        
        
        <h1 className="text-7xl font-extrabold text-[#664ada] drop-shadow">
          404
        </h1>

      
        <h2 className="text-2xl font-semibold text-gray-800">
          Oops! Page not found 😢
        </h2>

      
        <p className="text-gray-500 max-w-md mx-auto">
          The page you are looking for might have been removed, 
          had its name changed, or is temporarily unavailable.
        </p>

      
        <Link href="/">
          <button className="mt-4 px-6 py-2 rounded-full border border-[#664ada] text-[#664ada] font-medium transition-all duration-300 hover:bg-gradient-to-r hover:from-[#664ada] hover:to-[#8b5cf6] hover:text-white">
            Go Home
          </button>
        </Link>

      </div>
    </div>
  );
}