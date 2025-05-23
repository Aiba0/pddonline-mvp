import React from "react";

const AuthLayout = ({ children }) => (
    <div className="min-h-screen bg-[#151722] flex flex-col text-white">
        {/* Верхняя полоса: крестик, лого, язык */}
        <header className="flex items-center justify-center px-6 py-4 max-w-xl mx-auto w-full">
            <div className="font-bold text-lg align-middle">PDD online</div>
            <button className="text-3xl opacity-60 hover:opacity-100 transition" aria-label="Закрыть">
                &times;
            </button>
        </header>
        <main className="flex flex-col flex-1 items-center justify-center">{children}</main>
    </div>
);

export default AuthLayout;
