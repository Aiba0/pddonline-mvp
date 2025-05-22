import { useParams } from "react-router-dom";
import { useState } from "react";
import VideoModal from "../../components/Dashboard/VideoModal.jsx";

export default function CourseDetail() {
    const { id } = useParams(); // 'pdd' или 'autodrom'
    const [openModule, setOpenModule] = useState(null);
    const [modalOpen, setModalOpen] = useState(false);
    const [selectedVideoUrl, setSelectedVideoUrl] = useState("");

    const courseTitle =
        id === "pdd" ? "Видеокурс по ПДД" : "Видеокурс по автодрому";

    const [completedLessons, setCompletedLessons] = useState(() => {
        const saved = localStorage.getItem(`completed_${id}`);
        return saved ? JSON.parse(saved) : {};
    });

    const modules =
        id === "pdd"
            ? [
                {
                    title: "1. Общие положения ПДД РК 2025",
                    lessons: [
                        "Что такое ПДД?",
                        "Обязанности участников",
                        "Структура правил",
                    ],
                },
                {
                    title: "2. Основы управления ТС и безопасность движения",
                    lessons: [
                        "Посадка и управление",
                        "Скоростной режим",
                        "Маневрирование",
                    ],
                },
                {
                    title: "3. Первая медицинская помощь",
                    lessons: [
                        "Алгоритм действий",
                        "Позиция восстановления",
                        "Остановка кровотечений",
                    ],
                },
                {
                    title: "4. Дорожные знаки и разметка",
                    lessons: ["Знаки приоритета", "Запрещающие знаки", "Разметка"],
                },
                {
                    title: "5. Устройство и обслуживание автомобиля",
                    lessons: [
                        "Основные системы",
                        "ТО перед выездом",
                        "Что проверять в дороге",
                    ],
                },
            ]
            : [
                {
                    title: "1. Видеоуроки по автодрому",
                    lessons: [
                        "Габаритный дворик",
                        "Змейка",
                        "Эстакада",
                        "Повороты и развороты",
                    ],
                },
            ];

    const countCompleted = (moduleIndex) => {
        const mod = modules[moduleIndex];
        const total = mod.lessons.length;
        let done = 0;

        mod.lessons.forEach((_, i) => {
            const key = `${id}_mod${moduleIndex}_lesson${i}`;
            if (completedLessons[key]) done++;
        });

        return Math.round((done / total) * 100);
    };

    return (
        <div className="p-6">
            <h2 className="text-2xl font-bold mb-6 text-[#1F2937]">{courseTitle}</h2>

            <div className="space-y-6">
                {modules.map((mod, index) => {
                    const progress = countCompleted(index);
                    const isOpen = openModule === index;

                    return (
                        <div key={index} className="bg-white shadow-sm rounded-xl overflow-hidden">
                            {/* Заголовок модуля */}
                            <button
                                onClick={() => setOpenModule(isOpen ? null : index)}
                                className="w-full flex items-center justify-between px-5 py-4 text-left hover:bg-gray-50 transition"
                            >
                                <div className="text-lg font-semibold text-[#333]">
                                    {mod.title}
                                </div>

                                <div className="flex items-center gap-4 text-sm text-gray-500">
                                    <span>Прогресс: {progress}%</span>
                                    <span>{isOpen ? "▲" : "▼"}</span>
                                </div>
                            </button>

                            {/* Уроки */}
                            {isOpen && (
                                <ul className="border-t border-gray-200 px-6 py-4 space-y-3">
                                    {mod.lessons.map((lesson, i) => {
                                        const key = `${id}_mod${index}_lesson${i}`;
                                        const completed = completedLessons[key];

                                        return (
                                            <li
                                                key={i}
                                                className="flex justify-between items-center bg-gray-50 hover:bg-gray-100 px-4 py-2 rounded transition"
                                            >
                                                <div className="flex items-center gap-2">
                                                    {completed && (
                                                        <span className="text-green-500 font-bold text-lg">✓</span>
                                                    )}
                                                    <span className="text-gray-800 text-sm">{lesson}</span>
                                                </div>

                                                <button
                                                    onClick={() => {
                                                        const updated = {
                                                            ...completedLessons,
                                                            [key]: true,
                                                        };
                                                        setCompletedLessons(updated);
                                                        localStorage.setItem(
                                                            `completed_${id}`,
                                                            JSON.stringify(updated)
                                                        );
                                                        setSelectedVideoUrl("https://www.youtube.com/embed/dQw4w9WgXcQ");
                                                        setModalOpen(true);
                                                    }}
                                                    className={`text-white text-xs font-medium px-4 py-2 rounded transition ${completed ? "bg-[#30A943] hover:bg-green-700" : "bg-[#007AFF] hover:bg-blue-700"}`}
                                                >
                                                    {completed ? 'Просмотрено' : 'Смотреть'}
                                                </button>
                                            </li>
                                        );
                                    })}
                                </ul>
                            )}
                        </div>
                    );
                })}
            </div>

            <VideoModal
                isOpen={modalOpen}
                videoUrl={selectedVideoUrl}
                onClose={() => setModalOpen(false)}
            />
        </div>
    );
}
