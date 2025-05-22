import { FiUser } from "react-icons/fi";
import classNames from "classnames";
import { NavLink } from "react-router-dom";
import logo from "../../assets/logo.png";

export default function Sidebar() {
    const menu = [
        { key: "dashboard", label: "Главная", path: "/" },
        { key: "courses", label: "Мое обучение", path: "/courses" },
        { key: "chat", label: "ИИ-чат", path: "/chat" },
        { key: "tests", label: "Тестирование", path: "/exam" },
        { key: "favorites", label: "Избранные вопросы", path: "/favorites" },
        { key: "mistakes", label: "Мои ошибки", path: "/mistakes" },
    ];

    return (
        <aside className="w-60 min-h-screen bg-white shadow px-6 py-4 flex flex-col overflow-y-auto">
            <div className="flex items-center mb-8">
                <img className="w-[40px] h-[40px] mr-2" src={logo} alt="logo" />
                <div className="text-[#007AFF] font-bold text-[18px] leading-none">
                    pdd2025.kz
                </div>
            </div>

            {/* Профиль */}
            <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 bg-gray-200 rounded-full flex items-center justify-center text-gray-600">
                    <FiUser size={20} />
                </div>
                <div>
                    <div className="font-semibold text-sm leading-tight">Арман Жолдасов</div>
                    <div className="text-xs text-gray-500">Ученик</div>
                </div>
            </div>

            {/* Меню */}
            <nav className="flex flex-col gap-2">
                {menu.map((item) => (
                    <NavLink
                        key={item.key}
                        to={item.path}
                        className={({ isActive }) =>
                            classNames(
                                "text-left text-sm px-4 py-2 rounded block transition",
                                isActive
                                    ? "bg-[#E4EEFD] text-[#0057FF] font-semibold shadow-inner"
                                    : "text-gray-700 hover:bg-gray-100"
                            )
                        }
                    >
                        {item.label}
                    </NavLink>
                ))}
            </nav>
        </aside>
    );
}
