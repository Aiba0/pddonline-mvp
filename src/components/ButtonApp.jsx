import React from "react";

const ButtonApp = ({
                      children,
                      type = "button",
                      onClick,
                      disabled,
                      loading,
                      className = "",
                      iconLeft,
                      iconRight,
                      variant = "primary", // primary, secondary, danger, success, etc.
                      ...props
                  }) => {
    const variants = {
        primary:
            "bg-[#1769E0] hover:bg-blue-700 text-white",
        secondary:
            "bg-gray-100 hover:bg-gray-200 text-[#22223b]",
        danger:
            "bg-red-500 hover:bg-red-600 text-white",
        success:
            "bg-green-500 hover:bg-green-600 text-white",
    };

    return (
        <button
            type={type}
            className={`
        w-full h-10 font-semibold rounded-lg text-base transition flex items-center justify-center gap-2
        ${variants[variant] || variants.primary}
        ${disabled || loading ? "opacity-60 cursor-not-allowed" : ""}
        ${className}
      `}
            onClick={onClick}
            disabled={disabled || loading}
            {...props}
        >
            {loading && (
                <svg className="animate-spin h-5 w-5 text-white mr-2" fill="none" viewBox="0 0 24 24">
                    <circle className="opacity-20" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                    <path className="opacity-70" fill="currentColor" d="M4 12a8 8 0 018-8v4a4 4 0 00-4 4H4z" />
                </svg>
            )}
            {iconLeft && <span>{iconLeft}</span>}
            <span>{children}</span>
            {iconRight && <span>{iconRight}</span>}
        </button>
    );
};

export default ButtonApp;
