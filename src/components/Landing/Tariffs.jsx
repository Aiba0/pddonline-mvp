const tariffs = [
    {
        name: "Базовый",
        price: "Бесплатно",
        features: [
            "Доступ ко всем экзаменационным тестам",
            "Актуальные вопросы 2025 года",
            "Безлимитная практика",
        ],
        button: { text: "Начать бесплатно", href: "/exam" },
        popular: false,
    },
    {
        name: "Стандарт",
        price: "2 990 ₸ / месяц", // Пример, поменяй!
        features: [
            "Все из тарифа «Базовый»",
            "3D видеокурс по всем темам ПДД",
            "Пошаговые объяснения от инструкторов",
            "Учись с наглядными примерами",
        ],
        button: { text: "Перейти на Стандарт", href: "/register" },
        popular: true, // Ставим акцент
    },
    {
        name: "Премиум",
        price: "4 990 ₸ / месяц", // Пример, поменяй!
        features: [
            "Все из тарифа «Стандарт»",
            "ИИ-чат 24/7: ответы на любые вопросы",
            "Отслеживание личного прогресса",
            "Индивидуальная работа над ошибками",
            "Приоритетная поддержка",
        ],
        button: { text: "Выбрать Премиум", href: "/register" },
        popular: false,
    },
];

export default function Tariffs() {
    return (
        <section className="w-full flex justify-center py-20 bg-gray-50">
            <div className="max-w-7xl w-full px-4">
                <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-gray-900">
                    Тарифы для любого уровня
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {tariffs.map((tariff, idx) => (
                        <div
                            key={idx}
                            className={`flex flex-col items-center rounded-3xl shadow-xl p-8 bg-white transition hover:-translate-y-2 hover:shadow-2xl border-2 ${
                                tariff.popular
                                    ? "border-[#1769E0] scale-105 z-10"
                                    : "border-transparent"
                            }`}
                        >
                            {tariff.popular && (
                                <div className="absolute -top-5 left-1/2 -translate-x-1/2 bg-[#1769E0] text-white px-5 py-2 rounded-xl font-semibold text-xs shadow-lg">
                                    Рекомендуем
                                </div>
                            )}
                            <div className="text-2xl font-bold mb-2 text-[#1769E0]">{tariff.name}</div>
                            <div className="text-3xl font-extrabold mb-6">{tariff.price}</div>
                            <ul className="mb-8 w-full flex-1 flex flex-col gap-3">
                                {tariff.features.map((f, i) => (
                                    <li key={i} className="flex items-center gap-2 text-gray-800">
                                        <span className="w-5 h-5 flex items-center justify-center bg-blue-100 rounded-full text-[#1769E0] font-bold text-sm">✓</span>
                                        <span>{f}</span>
                                    </li>
                                ))}
                            </ul>
                            <a
                                href={tariff.button.href}
                                className={`w-full mt-auto py-3 rounded-xl font-semibold text-lg transition text-center ${
                                    tariff.popular
                                        ? "bg-[#1769E0] text-white hover:bg-blue-800"
                                        : "bg-gray-200 text-[#1769E0] hover:bg-gray-300"
                                }`}
                            >
                                {tariff.button.text}
                            </a>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
