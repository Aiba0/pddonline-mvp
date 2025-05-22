import React from "react";
import carImg from "../../assets/hero-man.png";

const Intro = () => (
    <section className="w-full flex justify-center items-center py-5 md:py-4 bg-gray-50">
        <div className="w-full max-w-8xl px-2 md:px-4">
            <div className="bg-[#1769E0] rounded-[32px] flex flex-col md:flex-row justify-between p-8 md:p-16 shadow-xl relative overflow-hidden gap-8 md:gap-0">

                {/* Навигация сверху */}
                <div className="absolute left-0 top-0 w-full flex items-center justify-between px-8 md:px-16 py-6 z-20">
                    <div className="flex items-center gap-8">
                        <nav className="hidden md:flex gap-7">
                            <a href="#whyus" className="text-white/90 hover:text-yellow-300 transition-colors text-base font-medium">Почему мы?</a>
                            <a href="#demo" className="text-white/90 hover:text-yellow-300 transition-colors text-base font-medium">Тестирование</a>
                            <a href="#pricing" className="text-white/90 hover:text-yellow-300 transition-colors text-base font-medium">Тарифы</a>
                            <a href="#faq" className="text-white/90 hover:text-yellow-300 transition-colors text-base font-medium">Вопросы и ответы</a>
                            <a href="#footer" className="text-white/90 hover:text-yellow-300 transition-colors text-base font-medium">Контакты</a>
                        </nav>
                    </div>
                    <a
                        href="/auth"
                        className="px-6 py-2 bg-white text-[#1769E0] rounded-xl font-semibold text-base shadow-none hover:bg-yellow-300 hover:text-gray-800 transition-colors duration-200"
                    >
                        Войти
                    </a>
                </div>

                {/* Основной контент */}
                <div className="flex-1 flex flex-col justify-between md:text-left text-white z-10 mt-24 md:mt-16">
                    <h1 className="text-3xl md:text-5xl font-black leading-tight mb-6 tracking-wide ">
                        PDD online <p className="text-xl md:text-2xl leading-tight tracking-wide font-medium">-
                        инновационная онлайн автошкола</p>
                    </h1>
                    <div>
                        <h1 className="text-3xl md:text-5xl font-black leading-tight mb-6 tracking-wide ">
                            Подготовься <br/> к экзамену ПДД <br/>
                            <span className="text-yellow-300 font-black">легко и быстро</span>
                        </h1>
                        <p className="text-base md:text-lg mb-6 opacity-90 ">
                            Видеоуроки, практика, тесты и поддержка — всё в одной платформе. <br/> Без очередей и
                            нервов.
                        </p>
                    </div>
                    <a href="/auth" className="w-80 inline-block bg-yellow-400 text-gray-800 px-8 py-4 text-center rounded-xl text-lg font-semibold shadow hover:bg-yellow-300 transition-transform duration-200 hover:scale-105 focus:scale-95 active:scale-95">
                        Зарегистрироваться
                    </a>
                </div>

                <div className="flex-1 flex justify-center mt-10 md:mt-0 z-10 w-full">
                    <img
                        src={carImg}
                        alt="Автомобиль"
                        className="
              object-contain
              w-full
              max-w-[480px]
              h-auto
              md:max-w-[680px]
              sm:max-w-[340px]
              drop-shadow-xl
              "
                        style={{ minWidth: 0 }}
                    />
                </div>
                <div className="absolute -right-24 -bottom-24 md:right-0 md:bottom-0 z-0 opacity-10 pointer-events-none select-none">
                    <svg width="400" height="400" viewBox="0 0 400 400">
                        <circle cx="200" cy="200" r="200" fill="white" />
                    </svg>
                </div>
            </div>
        </div>
    </section>
);

export default Intro;
