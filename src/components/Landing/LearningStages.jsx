const stages = [
    {
        icon: "🎬",
        title: "Видеоуроки",
        desc: "Смотри короткие и наглядные видео, разбирай сложные темы ПДД.",
    },
    {
        icon: "📝",
        title: "Тестирование",
        desc: "Проходи тесты, закрепляй знания, отслеживай прогресс.",
    },
    {
        icon: "🚗",
        title: "Вождение",
        desc: "Посмотри уроки по автодрому и записывайся на практическое вождение в автодроме",
    },
    {
        icon: "🏆",
        title: "Экзамен",
        desc: "Будь готов к реальному экзамену с уверенными знаниями.",
    },
];

const LearningStages = () => (
    <section className="w-full flex justify-center py-16 bg-gray-50">
        <div className="max-w-6xl w-full px-4">
            <h2 className="text-3xl md:text-4xl font-bold mb-16 text-gray-800">Как проходит обучение?</h2>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-7">
                {stages.map((s, i) => (
                    <div
                        key={i}
                        className="relative bg-white rounded-2xl shadow-md flex flex-col items-center p-8 pt-12"
                    >
                        <div className="absolute -top-7 left-1/2 -translate-x-1/2 w-14 h-14 bg-blue-100 rounded-full flex items-center justify-center text-3xl shadow-md">{s.icon}</div>
                        <div className="font-semibold text-lg text-gray-900 mb-2 text-center mt-6">{s.title}</div>
                        <div className="text-gray-700 text-sm text-center opacity-80">{s.desc}</div>
                        <div className="absolute bottom-3 right-5 text-xs text-gray-300 font-bold">{i + 1}</div>
                    </div>
                ))}
            </div>
        </div>
    </section>
);
export default LearningStages;
