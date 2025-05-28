"use client";
import React from "react";

type AppButtonProps = {
  label?: string;
  onClick: () => void;
  disabled?: boolean;
  loading?: boolean;
  className?: string;
};

const AppButton: React.FC<AppButtonProps> = ({
  label = "Click Me",
  onClick,
  disabled = false,
  loading = false,
  className = "",
}) => {
  return (
    <div>
      <button
        disabled={disabled}
        onClick={onClick}
        className={`w-full bg-[#BE5103] hover:bg-amber-900 text-lg text-white font-semibold py-2 px-4 rounded-md cursor-pointer flex items-center justify-center gap-2 ${className}`}
      >
        {loading && (
          <svg
            className="animate-spin h-5 w-5 text-white"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
          >
            <circle
              className="opacity-25"
              cx="12"
              cy="12"
              r="10"
              stroke="currentColor"
              strokeWidth="4"
            />
            <path
              className="opacity-75"
              fill="currentColor"
              d="M4 12a8 8 0 018-8v4l3-3-3-3v4a8 8 0 100 16v-4l-3 3 3 3v-4a8 8 0 01-8-8z"
            />
          </svg>
        )}
        {label}
      </button>
    </div>
  );
};

export default AppButton;
