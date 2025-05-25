import React from "react";

const Spinner = () => (
    <svg
        className="animate-spin h-5 w-5 text-white mr-2"
        fill="none"
        viewBox="0 0 24 24"
    >
        <circle
            className="opacity-20"
            cx="12"
            cy="12"
            r="10"
            stroke="currentColor"
            strokeWidth="4"
        />
        <path
            className="opacity-70"
            fill="currentColor"
            d="M4 12a8 8 0 018-8v4a4 4 0 00-4 4H4z"
        />
    </svg>
);

const BUTTON_STYLES = {
    primary:
        "bg-[#1769E0] hover:bg-blue-700 text-white",
    secondary:
        "bg-gray-100 hover:bg-gray-200 text-[#22223b]",
    danger:
        "bg-red-500 hover:bg-red-600 text-white",
    success:
        "bg-green-500 hover:bg-green-600 text-white",
    outline:
        "bg-transparent border border-[#1769E0] text-[#1769E0] hover:bg-[#1769E0]/10",
};

const ButtonApp = ({
                       children,
                       type = "button",
                       onClick,
                       disabled,
                       loading,
                       iconLeft,
                       iconRight,
                       variant = "primary", // "primary" | "secondary" | "danger" | "success" | "outline"
                       size = "md", // "sm" | "md" | "lg"
                       className = "",
                       ...props
                   }) => {
    const sizeClasses = {
        sm: "h-8 px-3 text-sm",
        md: "h-10 px-5 text-base",
        lg: "h-12 px-7 text-lg",
    };

    return (
        <button
            type={type}
            className={`
        w-full flex items-center justify-center my-4 gap-2 font-semibold rounded-lg transition
        ${BUTTON_STYLES[variant] || BUTTON_STYLES.primary}
        ${sizeClasses[size]}
        ${disabled || loading ? "opacity-60 cursor-not-allowed" : ""}
        ${className}
      `}
            onClick={onClick}
            disabled={disabled || loading}
            {...props}
        >
            {loading && <Spinner />}
            {iconLeft && <span className="mr-1">{iconLeft}</span>}
            {!loading && <span>{children}</span>}
            {iconRight && <span className="ml-1">{iconRight}</span>}
        </button>
    );
};

export default ButtonApp;


// <ButtonApp>Зарегистрироваться</ButtonApp>
//
// <ButtonApp loading>Отправка...</ButtonApp>
//
// <ButtonApp variant="secondary" iconLeft={<YourIcon />} size="sm">
//     Назад
// </ButtonApp>
//
// <ButtonApp variant="danger" iconRight={<DeleteIcon />}>
//     Удалить
// </ButtonApp>
//
// <ButtonApp variant="outline">Только текст</ButtonApp>

