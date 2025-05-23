import React from "react";
import AuthContainer from "./AuthContainer";

const CodeConfirm = () => (
    <AuthContainer>
        <form className="w-full max-w-md mx-auto bg-[#1B1E2D] rounded-2xl p-8 shadow-lg">
            <div className="text-2xl font-bold mb-2 text-center">Введите код</div>
            <div className="text-gray-400 text-center mb-8">
                Введите 6-значный пароль, отправленный на указанный номер через WhatsApp/SMS.
            </div>
            <label className="block mb-2 font-semibold text-sm">
                Код верификации <span className="text-[#b67cff]">*</span>
            </label>
            <input
                type="text"
                maxLength={6}
                placeholder="______"
                className="w-full px-4 py-2 mb-6 bg-[#23263A] border border-[#23263A] text-white rounded-xl focus:outline-none tracking-widest text-center font-mono text-xl"
                required
            />
            <button
                type="submit"
                className="w-full py-3 rounded-xl bg-[#7b3ffb] font-semibold text-lg text-white hover:bg-[#8d5eff] transition mb-2"
            >
                ПОДТВЕРДИТЬ
            </button>
            <div className="mt-4 text-center text-gray-400 text-sm">
                Уже зарегистрированы? <a href="#" className="text-[#b67cff] hover:underline">Войти</a>
            </div>
        </form>
    </AuthContainer>
);

export default CodeConfirm;
