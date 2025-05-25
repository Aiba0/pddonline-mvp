import { useState } from "react";
import { FiUser, FiMenu, FiX, FiLogOut } from "react-icons/fi";
import classNames from "classnames";
import { NavLink, useNavigate, Link } from "react-router-dom";
import logo from "../../assets/logo.png";

export default function Sidebar() {
    const [open, setOpen] = useState(false);
    const navigate = useNavigate();

    const menu = [
        { key: "dashboard", label: "Главная", path: "/dashboard" },
        { key: "courses", label: "Мое обучение", path: "/dashboard/courses" },
        { key: "chat", label: "ИИ-чат", path: "/dashboard/chat" },
        { key: "tests", label: "Тестирование", path: "/dashboard/exam" },
        { key: "favorites", label: "Избранные вопросы", path: "/dashboard/favorites" },
        { key: "mistakes", label: "Мои ошибки", path: "/dashboard/mistakes" },
    ];

    const user = localStorage.getItem("pddonline")
    const userName = JSON.parse(user).name

    const handleLogout = () => {
        localStorage.removeItem("pddonline");
        navigate("/", { replace: true });
        window.location.reload(); // Иногда требуется для сброса стейта
    };

    return (
        <>
            {/* Бургер для мобилок */}
            <button
                className="fixed top-4 left-4 z-30 md:hidden bg-white p-2 rounded shadow"
                onClick={() => setOpen(true)}
                aria-label="Открыть меню"
            >
                <FiMenu size={28} />
            </button>

            {/* Заливка при открытом меню */}
            {open && (
                <div
                    className="fixed inset-0 z-20 bg-black bg-opacity-20 md:hidden"
                    onClick={() => setOpen(false)}
                />
            )}

            {/* Сайдбар */}
            <aside
                className={classNames(
                    "fixed top-0 left-0 z-30 h-full w-64 bg-white shadow px-6 py-4 flex flex-col transition-transform duration-300 md:static md:translate-x-0 md:w-60 md:min-h-screen",
                    open ? "translate-x-0" : "-translate-x-full md:translate-x-0"
                )}
            >
                {/* Закрыть (мобилка) */}
                <button
                    className="absolute top-4 right-4 md:hidden text-gray-600"
                    onClick={() => setOpen(false)}
                    aria-label="Закрыть меню"
                >
                    <FiX size={28} />
                </button>

                {/* Логотип */}
                <div className="flex items-center mb-8 mt-2">
                    <img className="w-[40px] h-[40px] mr-2" src={logo} alt="logo" />
                    <div className="text-[#007AFF] font-extrabold text-[24px] leading-none">
                        PDD online
                    </div>
                </div>

                {/* Профиль */}
                <NavLink to="/dashboard/profile">
                    <div className="flex items-center gap-3 mb-6">
                            <div
                                className="w-10 h-10 bg-gray-200 rounded-full flex items-center justify-center text-gray-600">
                                <FiUser size={24}/>
                            </div>
                            <div>
                                <div className="font-semibold text-sm leading-tight">{userName}</div>
                                <div className="text-xs text-gray-500">Ученик</div>
                            </div>
                    </div>
                </NavLink>


                {/* Меню */}
                <nav className="flex flex-col gap-2 flex-1">
                    {menu.map((item) => (
                        <NavLink
                            key={item.key}
                            to={item.path}
                            end
                            className={({isActive}) =>
                                classNames(
                                    "text-left text-sm px-4 py-2 rounded block transition",
                                    isActive
                                        ? "bg-[#E4EEFD] text-[#0057FF] font-semibold shadow-inner"
                                        : "text-gray-700 hover:bg-gray-100"
                                )
                            }
                            onClick={() => setOpen(false)} // закрыть на мобилке при переходе
                        >
                            {item.label}
                        </NavLink>
                    ))}
                </nav>

                {/* Выход */}
                <button
                    className="flex items-center gap-2 text-red-500 mt-8 mb-2 px-4 py-2 rounded hover:bg-red-50 transition text-sm font-semibold"
                    onClick={handleLogout}
                >
                    <FiLogOut size={18} />
                    Выйти
                </button>
            </aside>
        </>
    );
}
