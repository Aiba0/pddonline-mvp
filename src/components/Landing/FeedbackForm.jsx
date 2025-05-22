import React, { useRef } from "react";

const FeedbackForm = () => {
    const nameRef = useRef();
    const phoneRef = useRef();
    const messageRef = useRef();

    const handleSubmit = (e) => {
        e.preventDefault();

        const name = nameRef.current.value;
        const phone = phoneRef.current.value;
        const message = messageRef.current.value;

        const waPhone = "87083390161";

        const text =
            `Имя: ${name}%0A` +
            `Телефон: ${phone}%0A` +
            `Сообщение: ${message}`;

        // Генерируем ссылку
        const whatsappUrl = `https://wa.me/${waPhone}?text=${text}`;

        // Открываем WhatsApp
        window.open(whatsappUrl, "_blank");
    };

    return (
        <section className="w-full flex justify-center py-16 bg-white">
            <div className="max-w-lg w-full px-4">
                <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center text-[#1769E0]">
                    Остались вопросы?
                </h2>
                <form
                    className="bg-[#f6faff] rounded-2xl shadow-md p-8 flex flex-col gap-5"
                    onSubmit={handleSubmit}
                >
                    <input
                        type="text"
                        ref={nameRef}
                        placeholder="Ваше имя"
                        className="border border-gray-200 rounded-xl px-4 py-3"
                        required
                    />
                    <input
                        type="tel"
                        ref={phoneRef}
                        placeholder="Ваш номер телефона"
                        className="border border-gray-200 rounded-xl px-4 py-3"
                        required
                    />
                    <textarea
                        ref={messageRef}
                        placeholder="Ваш вопрос или сообщение"
                        rows={4}
                        className="border border-gray-200 rounded-xl px-4 py-3"
                        required
                    />
                    <button
                        type="submit"
                        className="bg-[#1769E0] text-white py-3 rounded-xl font-semibold hover:bg-[#1456b5] transition-colors text-lg shadow"
                    >
                        Отправить в WhatsApp
                    </button>
                </form>
                <div className="mt-6 text-center text-gray-400 text-sm">
                    * После отправки откроется WhatsApp — просто нажмите "Отправить"
                </div>
            </div>
        </section>
    );
};

export default FeedbackForm;
