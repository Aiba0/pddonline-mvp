import { Link } from "react-router-dom";
import {ProgressRing} from "./ProgressRing.jsx";

export default function ModulesList() {
    const modules = [
        {
            title: "Курс по ПДД РК",
            description: "Пройдите видеокурс по теории ПДД Республики Казахстан",
            button: "Начать курс",
            link: 'courses',
            progress: 100,
        },
        {
            title: "Экзамен по ПДД РК",
            description: "Проверьте свои знания в режиме экзамена",
            button: "Начать тестирование",
            link: 'exam',
            progress: 74,
        },
        {
            title: "Видеокурс по автодрому",
            description: "Ознакомьтесь с правилами прохождения автодрома",
            button: "Начать курс",
            link: 'courses',
            progress: 37,
        },
        {
            title: "Экзамен по автодрому",
            description: "Запишитесь на практическое вождение с инструктором",
            button: "Записаться",
            link: 'driving-booking',
            progress: 0,
        },
        {
            title: "Получить сертификат",
            description: "После успешного прохождения получите электронный сертификат",
            button: "Получить сертификат",
            link: '/',
            progress: 0,
        },
    ];

    return (
        <div className="space-y-4">
            {modules.map((mod, i) => (
                <div
                    key={i}
                    className="bg-white px-3 py-4 sm:px-6 sm:py-8 rounded-xl shadow flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-4"
                >
                    <div className="flex-1 min-w-0">
                        <h3 className="text-base font-bold text-gray-800 mb-1 break-words">{i + 1}. {mod.title}</h3>
                        <p className="text-xs mb-8 sm:text-sm text-gray-500 break-words">{mod.description}</p>
                        <div
                            className="flex flex-row sm:flex-col items-center gap-3 sm:gap-4 mt-3 sm:mt-0 min-w-[110px]">
                            {mod.link && (
                                <Link to={mod.link} className="w-full">
                                    <button className={`
                                                w-full sm:w-60 h-10 sm:h-12
                                                ${mod.progress === 100 ? 'bg-green-600' : mod.progress ? 'bg-blue-600' : 'bg-gray-400'}
                                                hover:bg-opacity-80
                                                transition text-white text-xs sm:text-sm px-2 py-2 rounded-md
                                            `}
                                    >
                                         {mod.progress === 100 ? 'Пройдено' : mod.progress ? 'Продолжить' : mod.button}
                                    </button>
                                </Link>
                            )}
                        </div>
                    </div>

                    <ProgressRing value={mod.progress} />

                </div>
            ))}
        </div>
    );
}
