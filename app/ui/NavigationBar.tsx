"use client";

export default function NavigationBar() {
  return (
    <div className="flex justify-between items-center w-full h-12 px-4 bg-slate-100">
      <button>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="w-6 h-6"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
          />
        </svg>
      </button>
      <span>Apollonia Dental</span>
      <button className="bg-gray-400 py-1 px-4 rounded-sm text-black">
        Log Out
      </button>
    </div>
  );
}
