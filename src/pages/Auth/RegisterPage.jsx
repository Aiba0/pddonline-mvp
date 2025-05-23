import React, { useState } from "react";
import logo from "../../assets/logo.png";
import InputApp from "../../components/InputApp.jsx";

const RegisterPage = () => {
    const [method, setMethod] = useState("whatsapp");
    const [phone, setPhone] = useState("");
    const [formError, setFormError] = useState({phone: 'Неправильный номер телефона'});

    return (
        <div className="min-h-screen bg-[#f7f8fa] flex flex-col px-2">
            <div className="flex justify-center items-center mt-6 mb-2">
                <img src={logo} alt="PDD online" className="w-20 h-20 mb-4 mr-4" />
                <h1 className="text-4xl font-extrabold text-[#1769E0]">PDD online</h1>
            </div>

            <form className="max-w-md w-full mx-auto mt-2 bg-transparent flex flex-col items-stretch">
                {/* Табы */}
                <div className="mb-8">
                    <div className="flex border-b border-gray-200">
                        <button
                            type="button"
                            className={`w-1/2 py-2 text-lg font-semibold transition-colors duration-200
                ${method === "whatsapp"
                                ? "text-[#1769E0] border-b-2 border-[#1769E0]"
                                : "text-[#22223b] border-b-2 border-transparent"}
              `}
                            onClick={() => setMethod("whatsapp")}
                        >
                            WhatsApp
                        </button>
                        <button
                            type="button"
                            className={`w-1/2 py-2 text-lg font-semibold transition-colors duration-200
                ${method === "sms"
                                ? "text-[#1769E0] border-b-2 border-[#1769E0]"
                                : "text-[#22223b] border-b-2 border-transparent"}
              `}
                            onClick={() => setMethod("sms")}
                        >
                            SMS
                        </button>
                    </div>
                </div>

                {/* Заголовок и подзаголовок */}
                <h2 className="text-3xl font-bold text-center mb-2 mt-1 text-[#22223b]">
                    Регистрация
                </h2>
                <p className="text-center text-gray-600 mb-7">
                    Введите номер телефона для регистрации
                </p>

                {/* Телефон */}
                <label htmlFor="phone" className="mb-1 text-gray-500 text-sm">
                    Номер телефона <span className="text-red-400">*</span>
                </label>
                {/*<input*/}
                {/*    id="phone"*/}
                {/*    type="tel"*/}
                {/*    placeholder=" "*/}
                {/*    autoComplete="tel"*/}
                {/*    className="mb-5 h-10 px-3 rounded-lg border border-gray-200 focus:outline-none focus:border-blue-600 text-base bg-white transition"*/}
                {/*    required*/}
                {/*/>*/}
                <InputApp
                    label="Телефон"
                    name="phone"
                    type="tel"
                    mask="+7 (000)-000-00-00"
                    value={phone}
                    onChange={e => setPhone(e.target.value)}
                    error={formError.phone}
                />



                {/* Чекбокс — соглашение с правилами */}
                <label className="flex items-center mb-5 text-gray-700 text-sm select-none">
                    <input
                        type="checkbox"
                        className="accent-[#1769E0] rounded mr-2"
                        required
                    />
                    Я соглашаюсь с <a href="#" className="ml-1 text-[#1769E0] hover:underline">правилами сервиса</a>
                </label>

                {/* Кнопка */}
                <button
                    type="submit"
                    className="w-full h-10 bg-[#1769E0] hover:bg-blue-700 text-white font-semibold rounded-lg text-base mb-3 transition"
                >
                    {method === "whatsapp" ? "Получить код по WhatsApp" : "Получить код по SMS"}
                </button>

                {/* Ссылка на вход */}
                <div className="text-center text-gray-700 text-sm">
                    Уже есть аккаунт?{" "}
                    <a href="#" className="text-[#1769E0] hover:underline font-medium">
                        Войти
                    </a>
                </div>
            </form>
        </div>
    );
};

export default RegisterPage;
