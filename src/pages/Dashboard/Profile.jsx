import { FiUser, FiEdit2, FiLogOut, FiKey, FiMail, FiPhone, FiBarChart2, FiAward, FiCheckCircle } from "react-icons/fi";
import {ProgressRing} from "../../components/Dashboard/ProgressRing.jsx";

export default function Profile() {
    const user = {
        name: "Айбек Уйсинбаев",
        role: "Ученик",
        phone: "+7 700 000 00 00",
        email: "aibek@example.com",
        status: "Демо",
        tariff: "Демо-доступ",
        certificate: false,
        progress: 16,
        examsPassed: 2,
        mistakes: 8,
        favorites: 14,
    };

    return (
        <div className="max-w-3xl mx-auto pt-8 px-8 sm:px-0">
            {/* Header */}
            <div className="flex flex-col sm:flex-row items-center gap-6 mb-8">
                <div className="w-24 h-24 rounded-full bg-blue-100 flex items-center justify-center text-blue-600 text-5xl shadow">
                    <FiUser />
                </div>
                <div className="flex-1 w-full">
                    <div className="flex items-center gap-3">
                        <h2 className="text-2xl font-bold">{user.name} </h2>
                        <button className="text-blue-600 hover:underline flex items-center gap-1 text-sm">
                            <FiEdit2 size={16} />Редактировать
                        </button>
                    </div>
                    <div className="text-gray-500 mt-1">{user.role}</div>
                    <div className="flex gap-2 mt-2 flex-wrap">
                        <span className="bg-yellow-100 text-yellow-700 px-2 py-0.5 rounded text-xs font-semibold">{user.status} версия</span>
                        <span className="bg-blue-100 text-blue-700 px-2 py-0.5 rounded text-xs font-semibold">{user.tariff}</span>
                        {user.certificate && (
                            <span className="bg-green-100 text-green-700 px-2 py-0.5 rounded text-xs font-semibold flex items-center gap-1">
                                <FiAward /> Сертификат не получен
                            </span>
                        )}
                    </div>
                </div>
            </div>

            {/* Основная информация */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-10">
                <div className="space-y-2">
                    <div className="flex items-center gap-2 text-gray-600">
                        <FiPhone size={18} />
                        <span className="text-base">{user.phone}</span>
                    </div>
                    <div className="flex items-center gap-2 text-gray-600">
                        <FiMail size={18} />
                        <span className="text-base">{user.email}</span>
                    </div>
                </div>
                {/* Прогресс и статус */}
                <div className="flex flex-col items-center justify-center gap-3">
                    <div className="flex flex-col items-center">
                        <ProgressRing value={user.progress} title="Готовность"/>
                    </div>
                </div>
            </div>

            {/* Статистика */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-8">
                <StatCard
                    icon={<FiCheckCircle className="text-green-600" size={20} />}
                    label="Сдано экзаменов"
                    value={user.examsPassed}
                />
                <StatCard
                    icon={<FiBarChart2 className="text-yellow-500" size={20} />}
                    label="Ошибок"
                    value={user.mistakes}
                />
                <StatCard
                    icon={<FiAward className="text-blue-500" size={20} />}
                    label="Избранное"
                    value={user.favorites}
                />
                <StatCard
                    icon={<FiKey className="text-gray-500" size={20} />}
                    label="Пароль"
                    value="••••••••"
                />
            </div>

            {/* Действия */}
            <div className="flex flex-col sm:flex-row gap-3">
                <button className="flex-1 flex items-center gap-2 justify-center py-2 rounded bg-gray-100 hover:bg-gray-200 text-gray-700 font-semibold text-sm">
                    <FiKey /> Сменить пароль
                </button>
                <button className="flex-1 flex items-center gap-2 justify-center py-2 rounded bg-red-100 hover:bg-red-200 text-red-600 font-semibold text-sm">
                    <FiLogOut /> Выйти
                </button>
            </div>
        </div>
    );
}

// Статистика — мини-компонент
function StatCard({ icon, label, value }) {
    return (
        <div className="bg-white rounded-lg shadow p-4 flex flex-col items-center">
            <div className="mb-2">{icon}</div>
            <div className="text-lg font-bold">{value}</div>
            <div className="text-xs text-gray-500">{label}</div>
        </div>
    );
}
