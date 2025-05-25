import { FiCheckCircle, FiXCircle } from "react-icons/fi";

const plans = [
    {
        name: "Демо-доступ",
        price: "Бесплатно",
        features: [
            { text: "Ограниченное количество уроков", included: true },
            { text: "Экзамен по ПДД", included: false },
            { text: "ИИ-чат с автоинструктором", included: false },
            { text: "Доступ к сертификату", included: false },
            { text: "Поддержка", included: false },
        ],
        isCurrent: true,
        disabled: true,
    },
    {
        name: "Полный доступ",
        price: "3 500 ₸ / месяц",
        features: [
            { text: "Все видеоуроки и модули", included: true },
            { text: "Неограниченные экзамены по ПДД", included: true },
            { text: "ИИ-чат с автоинструктором", included: true },
            { text: "Получение сертификата", included: true },
            { text: "Быстрая поддержка", included: true },
        ],
        isCurrent: false,
        disabled: false,
        best: true,
    }
];

export default function Tariffs() {
    return (
        <div className="min-h-screen bg-gray-50 py-10 px-2 flex flex-col items-center">
            {/* БАННЕР */}
            <div className="bg-yellow-100 border-l-4 border-yellow-400 rounded-xl p-4 mb-8 max-w-xl w-full flex items-center gap-3 shadow">
                <span className="text-2xl text-yellow-500">⚠️</span>
                <span className="font-semibold text-yellow-700">
          Сейчас вы используете <span className="underline">Демо-доступ</span>. Чтобы открыть все возможности платформы — выберите подходящий тариф.
        </span>
            </div>

            {/* ТАРИФЫ */}
            <div className="w-full max-w-4xl grid gap-6 md:grid-cols-2">
                {plans.map((plan, i) => (
                    <div
                        key={i}
                        className={`
              rounded-2xl shadow-lg bg-white p-7 flex flex-col items-center
              ${plan.best ? "border-2 border-[#1769E0] scale-105" : "border border-gray-200 opacity-80"}
              ${plan.disabled ? "opacity-60 pointer-events-none" : ""}
            `}
                    >
                        {plan.best && (
                            <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-[#1769E0] text-white px-5 py-1 rounded-full text-xs font-bold shadow">
                                Лучший выбор
                            </div>
                        )}
                        <div className="text-xl font-extrabold mb-1">{plan.name}</div>
                        <div className="text-2xl font-bold mb-3 text-[#1769E0]">{plan.price}</div>
                        <ul className="w-full mb-6 space-y-2">
                            {plan.features.map((f, j) => (
                                <li key={j} className={`flex items-center gap-2 text-sm ${f.included ? "text-gray-800" : "text-gray-400 line-through"}`}>
                                    {f.included
                                        ? <FiCheckCircle className="text-green-500" />
                                        : <FiXCircle className="text-gray-300" />}
                                    {f.text}
                                </li>
                            ))}
                        </ul>
                        <button
                            className={`w-full py-3 rounded-xl text-white font-bold text-base transition
                ${plan.disabled
                                ? "bg-gray-300 cursor-not-allowed"
                                : "bg-[#1769E0] hover:bg-blue-700 shadow-md"
                            }`}
                            disabled={plan.disabled}
                            onClick={() => {
                                if (!plan.disabled) alert("Переход к оплате (заглушка)");
                            }}
                        >
                            {plan.disabled ? "Активен" : "Выбрать тариф"}
                        </button>
                    </div>
                ))}
            </div>

            {/* ПРЕИМУЩЕСТВА (опционально) */}
            <div className="max-w-xl mt-10 text-center text-gray-500 text-sm">
                <div className="font-bold text-gray-700 mb-1">Почему стоит выбрать полный доступ?</div>
                <ul className="list-disc list-inside flex flex-col items-center gap-1">
                    <li>Готовьтесь к экзамену быстро и удобно</li>
                    <li>Исключайте ошибки с помощью ИИ-анализа</li>
                    <li>Учитесь в любое время, с любого устройства</li>
                </ul>
            </div>
        </div>
    );
}
