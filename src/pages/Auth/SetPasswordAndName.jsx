import React from "react";
import AuthContainer from "./AuthContainer";

const SetPasswordAndName = () => (
    <AuthContainer>
        <form className="w-full max-w-md mx-auto bg-[#1B1E2D] rounded-2xl p-8 shadow-lg">
            <div className="text-2xl font-bold mb-2 text-center">Создайте аккаунт</div>
            <div className="text-gray-400 text-center mb-8">Для этого заполните все поля</div>
            {/* Имя */}
            <input
                type="text"
                placeholder="Имя"
                className="w-full px-4 py-2 mb-4 bg-[#23263A] border border-[#23263A] text-white rounded-xl focus:outline-none"
                required
            />
            {/* Пароль */}
            <input
                type="password"
                placeholder="Пароль"
                className="w-full px-4 py-2 mb-8 bg-[#23263A] border border-[#23263A] text-white rounded-xl focus:outline-none"
                required
            />
            <button
                type="submit"
                className="w-full py-3 rounded-xl bg-[#7b3ffb] font-semibold text-lg text-white hover:bg-[#8d5eff] transition mb-2"
            >
                Создать аккаунт
            </button>
            <div className="mt-4 text-center text-gray-400 text-sm">
                Уже зарегистрированы? <a href="#" className="text-[#b67cff] hover:underline">Войти</a>
            </div>
        </form>
    </AuthContainer>
);

export default SetPasswordAndName;
