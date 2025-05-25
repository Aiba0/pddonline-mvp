import React, {forwardRef, useEffect, useState} from "react";
import { IMaskInput } from "react-imask";

const ERROR_MESSAGES = {
    required: "Это поле обязательно",
    phone: "Некорректный номер телефона",
    email: "Некорректный email",
    passwordShort: "Пароль слишком короткий (мин. 6 символов)",
    passwordWeak: "Пароль должен содержать буквы и цифры",
};

function validate({ type, value, required }) {
    if (required && !value) return ERROR_MESSAGES.required;

    if (type === "tel") {
        const digits = value.replace(/\D/g, "");
        if (digits.length < 11) return ERROR_MESSAGES.phone;
    }

    if (type === "email") {
        if (
            value &&
            !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(value.trim())
        ) {
            return ERROR_MESSAGES.email;
        }
    }

    if (type === "password") {
        if (value && value.length < 6) return ERROR_MESSAGES.passwordShort;
        if (value && !/^(?=.*[A-Za-z])(?=.*\d).+$/.test(value))
            return ERROR_MESSAGES.passwordWeak;
    }

    return "";
}

const InputApp = forwardRef(
    (
        {
            label,
            type = "text",
            name,
            mask, // напр: "+7 (700) 000-00-00"
            required,
            disabled,
            autoComplete,
            placeholder,
            icon,
            value = "",
            onChange,
            onBlur,
            rightIcon,
            className = "",
            externalError, // Ошибка снаружи (с сервера)
            onValidChange,
            ...props
        },
        ref
    ) => {
        const [touched, setTouched] = useState(false);
        const [internalError, setInternalError] = useState("");
        const [showPassword, setShowPassword] = useState(false);

        useEffect(() => {
            const err = validate({ type, value, required });
            setInternalError(touched ? err : "");
            // Сообщить родителю о валидности
            if (onValidChange) {
                onValidChange({ name, valid: !err, value });
            }
            // eslint-disable-next-line
        }, [value, touched, type, required]);

        // Валидация при каждом вводе или блюре
        const handleChange = (e) => {
            if (onChange) onChange(e);
            if (touched) {
                const err = validate({ type, value: e.target.value, required });
                setInternalError(err);
            }
        };

        const handleBlur = (e) => {
            setTouched(true);
            if (onBlur) onBlur(e);
            const err = validate({ type, value, required });
            setInternalError(err);
        };

        // Для пароля
        const getType = () => {
            if (type === "password") return showPassword ? "text" : "password";
            return type;
        };

        const inputClasses = `
      h-10 px-3 rounded-lg border text-base bg-white transition w-full
      ${internalError || externalError ? "border-red-400 focus:border-red-400" : "border-gray-200 focus:border-blue-600"}
      ${disabled ? "bg-gray-100 opacity-60 pointer-events-none" : ""}
      ${className}
    `;

        const showError = (touched || value) && (internalError || externalError);

        // input (маска или обычный)
        const inputField = mask ? (
            <IMaskInput
                mask={mask}
                value={value}
                inputRef={ref}
                unmask={false}
                onAccept={(val) => {
                    const fakeEvent = { target: { value: val, name } };
                    handleChange(fakeEvent);
                }}
                onBlur={handleBlur}
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
                onChange={handleChange}
                onBlur={handleBlur}
                disabled={disabled}
                autoComplete={autoComplete}
                placeholder={placeholder}
                className={inputClasses}
                ref={ref}
                {...props}
            />
        );

        return (
            <div className="mb-2 w-full">
                {label && (
                    <label
                        htmlFor={name}
                        className="block mb-1 text-gray-500 text-sm"
                    >
                        {label}
                        {required && <span className="text-red-400 ml-1">*</span>}
                    </label>
                )}
                <div className="relative flex items-center">
                    {icon && <span className="absolute left-2">{icon}</span>}
                    {inputField}
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
                    {rightIcon && <span className="absolute right-3">{rightIcon}</span>}
                </div>
                {showError && (
                    <div className="text-red-500 text-xs mt-1">
                        {externalError || internalError}
                    </div>
                )}
            </div>
        );
    }
);

export default InputApp;



// <InputApp
//     label="Телефон"
//     name="phone"
//     type="tel"
//     mask="+7 (700) 000-00-00"
//     value={phone}
//     onChange={e => setPhone(e.target.value)}
//     required
// />
//
// <InputApp
//     label="Email"
//     name="email"
//     type="email"
//     value={email}
//     onChange={e => setEmail(e.target.value)}
//     required
// />
//
// <InputApp
//     label="Пароль"
//     name="password"
//     type="password"
//     value={password}
//     onChange={e => setPassword(e.target.value)}
//     required
// />
//
