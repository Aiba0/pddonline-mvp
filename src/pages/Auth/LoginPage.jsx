import React from "react";
import logo from "../../assets/logo.png"

const LoginPage = () => (
    <div className="min-h-screen bg-[#f7f8fa] flex flex-col px-2">
        <div className="flex justify-center items-center mt-6 mb-2">
             <img src={logo} alt="PDD online" className="w-20 h-20 mb-4 mr-4" />
            <h1 className="text-4xl font-extrabold text-[#1769E0]">PDD online</h1>
        </div>

        <form className="max-w-md w-full mx-auto mt-2 bg-transparent flex flex-col items-stretch">
            <h2 className="text-2xl font-semibold text-center mb-1 mt-4">
                Вход
            </h2>

            {/* Телефон */}
            <label htmlFor="phone" className="mb-1 text-gray-700 text-sm font-medium">
                Номер телефона <span className="text-red-400">*</span>
            </label>
            <input
                id="phone"
                type="tel"
                placeholder=" "
                autoComplete="tel"
                className="mb-5 h-10 px-3 rounded-lg border border-gray-200 focus:outline-none focus:border-blue-600 text-base bg-white transition"
                required
            />

            {/* Пароль */}
            <label htmlFor="password" className="mb-1 text-gray-700 text-sm font-medium">
                Пароль <span className="text-red-400">*</span>
            </label>
            <input
                id="password"
                type="password"
                placeholder=" "
                autoComplete="current-password"
                className="mb-5 h-10 px-3 rounded-lg border border-gray-200 focus:outline-none focus:border-blue-600 text-base bg-white transition"
                required
            />

            {/* Ссылка "Забыли пароль" */}
            <div className="flex justify-end mb-4">
                <a href="#" className="text-[#1769E0] text-sm hover:underline">
                    Забыли пароль?
                </a>
            </div>

            {/* Кнопка */}
            <button
                type="submit"
                className="w-full h-10 bg-[#1769E0] hover:bg-blue-700 text-white font-semibold rounded-lg text-base mb-3 transition"
            >
                Войти
            </button>

            {/* Ссылка на регистрацию */}
            <div className="text-center text-gray-700 text-sm">
                Нет аккаунта?{" "}
                <a href="#" className="text-[#1769E0] hover:underline font-medium">
                    Зарегистрироваться
                </a>
            </div>
        </form>
    </div>
);

export default LoginPage;
