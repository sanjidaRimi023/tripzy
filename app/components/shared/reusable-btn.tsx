"use client";
import React from "react";
import { ReusableBtnProps } from "@/app/lib/types/button";

const ReusableBtn: React.FC<ReusableBtnProps> = ({
  text = "Click",
  className = "",
  onClick,
  type = "button",
}) => {
  const shimmerCSS = `
    @property --angle {
      syntax: '<angle>';
      initial-value: 0deg;
      inherits: false;
    }

    @keyframes shimmer-spin {
      to {
        --angle: 360deg;
      }
    }
  `;

  return (
    <div className="inline-flex">
      <style>{shimmerCSS}</style>

      <button
        type={type}
        onClick={onClick}
        className={`
          relative p-0.5 rounded-3xl overflow-hidden 
          ${className}
        `}
        style={{
          background:
            "conic-gradient(from var(--angle), transparent 20%, #8CE4FF, transparent 60%)",
          animation: "shimmer-spin 3.0s linear infinite",
        }}
      >
        {/* Inner button content */}
        <span
          className="relative z-10 block px-6 py-2 rounded-full bg-primary text-white text-xl
            hover:bg-secondary transition duration-300"
        >
          {text}
        </span>
      </button>
    </div>
  );
};

export default ReusableBtn;
