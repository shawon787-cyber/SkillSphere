"use client";

export default function Error({ error, reset }) {
  return (
    <div className="h-screen flex flex-col items-center justify-center text-center">
      <h1 className="text-3xl font-bold text-red-600">
        Something went wrong ❌
      </h1>

      <p className="text-gray-500 mt-2">
        {error?.message}
      </p>

      <button
        onClick={() => reset()}
        className="mt-4 px-4 py-2 bg-blue-600 text-white rounded"
      >
        Try Again
      </button>
    </div>
  );
}