import {Link} from "react-router-dom";

export default function ModulesList() {
    const modules = [
        {
            title: "Курс по ПДД РК",
            description: "Пройдите видеокурс по теории ПДД Республики Казахстан",
            button: "Начать курс",
            link: '/courses'
        },
        {
            title: "Экзамен по ПДД РК",
            description: "Проверьте свои знания в режиме экзамена",
            button: "Начать тестирование",
            link: '/exam'
        },
        {
            title: "Видеокурс по автодрому",
            description: "Ознакомьтесь с правилами прохождения автодрома",
            button: "Начать курс",
            link: '/courses'
        },
        {
            title: "Экзамен по автодрому",
            description: "Запишитесь на практическое вождение с инструктором",
            button: "Записаться",
            link: '/driving-booking'
        },
        {
            title: "Получить сертификат",
            description: "После успешного прохождения получите электронный сертификат",
            button: "Получить",
        },
    ];

    return (
        <div className="space-y-4">
            {modules.map((mod, i) => (
                <div key={i} className="bg-white px-6 py-8 rounded-xl shadow flex items-center justify-between">
                    {/* Левая часть */}
                    <div>
                        <h3 className="text-base font-bold mb-1">{i + 1}. {mod.title}</h3>
                        <p className="text-sm text-gray-500">{mod.description}</p>
                    </div>

                    {/* Правая часть */}
                    <div className="flex items-center gap-4">
                        <Link to={mod.link}>
                            <button
                                className="w-48 h-12 bg-[#27AE60] hover:bg-[#219653] transition text-white text-sm px-4 py-2 rounded-md">
                                {mod.button}
                            </button>
                        </Link>
                        <div
                            className="w-16 h-16 rounded-full border-4 border-gray-300 text-gray-600 text-xs font-bold flex items-center justify-center">
                            0%
                        </div>
                    </div>
                </div>
            ))}
        </div>
    );
}
