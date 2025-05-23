import React, { forwardRef, useState } from "react";
import { IMaskInput } from "react-imask";

const InputApp = forwardRef(
    (
        {
            label,
            type = "text",
            name,
            mask, // например: "+7 (700) 000-00-00"
            error,
            success,
            disabled,
            autoComplete,
            placeholder,
            icon,
            value,
            onChange,
            onBlur,
            rightIcon,
            className = "",
            ...props
        },
        ref
    ) => {
        const [showPassword, setShowPassword] = useState(false);

        // Тип для пароля
        const getType = () => {
            if (type === "password") return showPassword ? "text" : "password";
            return type;
        };

        // Стили для поля
        const inputClasses = `
      h-10 px-3 rounded-lg border text-base bg-white transition w-full
      ${error ? "border-red-400 focus:border-red-400" : "border-gray-200 focus:border-blue-600"}
      ${success ? "border-green-400 focus:border-green-400" : ""}
      ${disabled ? "bg-gray-100 opacity-60 pointer-events-none" : ""}
      ${className}
    `;

        // Логика onChange для IMaskInput
        const handleMaskChange = (val) => {
            if (onChange) {
                onChange({ target: { value: val } });
            }
        };

        // Само поле (маска или обычное)
        const inputField = mask ? (
            <IMaskInput
                mask={mask}
                value={value}
                unmask={false}
                inputRef={ref}
                onAccept={handleMaskChange}
                onBlur={onBlur}
                disabled={disabled}
                autoComplete={autoComplete}
                placeholder={placeholder}
                className={inputClasses}
                {...props}
            />
        ) : (
            <input
                type={getType()}
                name={name}
                value={value}
                onChange={onChange}
                onBlur={onBlur}
                disabled={disabled}
                autoComplete={autoComplete}
                placeholder={placeholder}
                className={inputClasses}
                ref={ref}
                {...props}
            />
        );

        return (
            <div className="mb-4 w-full">
                {label && (
                    <label
                        htmlFor={name}
                        className="block mb-1 text-gray-700 text-sm font-medium"
                    >
                        {label}
                    </label>
                )}
                <div className="relative flex items-center">
                    {/* Left icon */}
                    {icon && <span className="absolute left-2">{icon}</span>}
                    {inputField}
                    {/* Кнопка показать/скрыть пароль */}
                    {type === "password" && (
                        <button
                            type="button"
                            tabIndex={-1}
                            onClick={() => setShowPassword((v) => !v)}
                            className="absolute right-3 text-gray-400 hover:text-gray-700 focus:outline-none"
                            style={{ background: "none" }}
                        >
                            {showPassword ? "🙈" : "👁️"}
                        </button>
                    )}
                    {/* Universal right icon */}
                    {rightIcon && (
                        <span className="absolute right-3">{rightIcon}</span>
                    )}
                </div>
                {/* Error or success */}
                {error && (
                    <div className="text-red-500 text-xs mt-1">{error}</div>
                )}
                {success && !error && (
                    <div className="text-green-500 text-xs mt-1">{success}</div>
                )}
            </div>
        );
    }
);

export default InputApp;
