import React, { useState, useRef, useEffect } from "react";

const faqs = [
    {
        q: "Можно ли пройти обучение полностью онлайн?",
        a: "Да, вы можете готовиться к экзамену по ПДД в удобном для вас темпе, не выходя из дома.",
    },
    {
        q: "Ваши тесты соответствуют реальному экзамену в СпецЦОН?",
        a: "Да, база вопросов постоянно обновляется и полностью совпадает с официальными экзаменами.",
    },
    {
        q: "Что такое 3D-видеокурс?",
        a: "Это серия видеоуроков с наглядными 3D-анимациями, которые делают изучение ПДД простым и понятным.",
    },
    {
        q: "Как работает ИИ-чат?",
        a: "Это виртуальный помощник, который отвечает на любые вопросы по ПДД и помогает решать задачи 24/7.",
    },
    {
        q: "Как быстро я могу начать обучение?",
        a: "Сразу после регистрации! Вам будет открыт доступ ко всем материалам выбранного тарифа.",
    },
    {
        q: "Можно ли вернуть деньги, если не подошло?",
        a: "Да, если сервис вам не подойдёт — мы вернём деньги в течение 7 дней.",
    },
];

function AccordionItem({ item, isOpen, onClick }) {
    const ref = useRef(null);
    const [height, setHeight] = useState(0);

    useEffect(() => {
        if (isOpen && ref.current) {
            setHeight(ref.current.scrollHeight);
        } else {
            setHeight(0);
        }
    }, [isOpen]);

    return (
        <div className="bg-white rounded-2xl shadow-sm overflow-hidden border border-gray-100">
            <button
                onClick={onClick}
                className="flex w-full items-center justify-between px-6 py-5 md:text-xl font-medium text-left rounded-2xl bg-white transition hover:bg-blue-50 focus:outline-none"
            >
                <span className="text-gray-700">{item.q}</span>
                <span
                    className={`ml-4 transform transition-transform duration-300 text-2xl select-none ${
                        isOpen ? "rotate-45 text-yellow-400" : "rotate-0 text-gray-300"
                    }`}
                >
          +
        </span>
            </button>
            <div
                style={{
                    height,
                    transition: "height 0.4s cubic-bezier(.4,0,.2,1)",
                }}
                className="px-6 bg-white"
            >
                <div
                    ref={ref}
                    className={`py-4 text-gray-800 text-base md:text-lg transition-opacity duration-300 ${
                        isOpen ? "opacity-100" : "opacity-0"
                    }`}
                >
                    {item.a}
                </div>
            </div>
        </div>
    );
}

export default function FAQBlock() {
    const [open, setOpen] = useState(null);

    const toggle = (idx) => setOpen(open === idx ? null : idx);

    return (
        <section
            id="faq"
            className="w-full py-20 bg-gradient-to-b from-blue-50 to-white flex justify-center"
        >
            <div className="max-w-4xl w-full px-4">
                <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-gray-800">
                    Часто задаваемые вопросы
                </h2>
                <div className="space-y-4">
                    {faqs.map((item, idx) => (
                        <AccordionItem
                            key={idx}
                            item={item}
                            isOpen={open === idx}
                            onClick={() => toggle(idx)}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
}
