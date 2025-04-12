import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

// 🔧 Моковые данные (позже заменим на реальные)
const questions = [
    {
        id: 1,
        text: "Что означает этот дорожный знак?",
        image: "/img/example.png",
        options: ["Остановка запрещена", "Стоянка запрещена", "Главная дорога", "Уступи дорогу"],
        correct: 1,
    },
    {
        id: 2,
        text: "Какой сигнал рукой указывает поворот налево?",
        image: "",
        options: ["Правая рука вверх", "Левая рука в сторону", "Обе руки вверх", "Левая вниз"],
        correct: 1,
    },
];

export default function ExamSession() {
    const [index, setIndex] = useState(0);
    const [selected, setSelected] = useState(null);
    const [answers, setAnswers] = useState({});
    const [showResult, setShowResult] = useState(false);
    const [time, setTime] = useState(20 * 60); // 20 минут
    const navigate = useNavigate();

    const current = questions[index];

    useEffect(() => {
        const timer = setInterval(() => setTime((t) => t - 1), 1000);
        return () => clearInterval(timer);
    }, []);

    const formatTime = (sec) => {
        const m = Math.floor(sec / 60);
        const s = sec % 60;
        return `${m}:${s < 10 ? "0" : ""}${s}`;
    };

    const handleSelect = (i) => {
        if (selected !== null) return;
        setSelected(i);
        setAnswers((prev) => ({ ...prev, [current.id]: i }));
    };

    const handleNext = () => {
        if (index < questions.length - 1) {
            setIndex(index + 1);
            setSelected(null);
        } else {
            setShowResult(true);
        }
    };

    const countCorrect = () => {
        return questions.reduce((acc, q) => {
            return answers[q.id] === q.correct ? acc + 1 : acc;
        }, 0);
    };

    if (showResult) {
        return (
            <div className="p-6 text-center">
                <h1 className="text-2xl font-bold mb-4">Тест завершён</h1>
                <p className="text-lg">
                    Ваш результат: <span className="font-semibold">{countCorrect()}</span> из{" "}
                    {questions.length}
                </p>
                <button
                    onClick={() => navigate("/tests")}
                    className="mt-6 bg-[#007AFF] hover:bg-blue-700 text-white px-6 py-2 rounded"
                >
                    Вернуться к тестам
                </button>
            </div>
        );
    }

    return (
        <div className="max-w-2xl mx-auto px-4 py-6">
            {/* Верхняя панель */}
            <div className="flex justify-between items-center mb-6 text-sm text-gray-600">
                <div>Вопрос {index + 1} из {questions.length}</div>
                <div>Осталось: <span className="font-medium text-red-600">{formatTime(time)}</span></div>
                <button onClick={() => navigate("/tests")} className="text-[#007AFF] underline">
                    Завершить
                </button>
            </div>

            {/* Вопрос */}
            <div className="bg-white p-5 rounded-xl shadow mb-4">
                <h2 className="text-md font-semibold mb-4">{current.text}</h2>
                {current.image && (
                    <img
                        src={current.image}
                        alt="вопрос"
                        className="mb-4 w-full max-h-64 object-contain rounded"
                    />
                )}
                <ul className="space-y-3">
                    {current.options.map((opt, i) => {
                        const isCorrect = selected !== null && i === current.correct;
                        const isWrong = selected === i && i !== current.correct;

                        return (
                            <li
                                key={i}
                                onClick={() => handleSelect(i)}
                                className={`border rounded px-4 py-2 cursor-pointer transition 
                  ${selected === null ? "hover:bg-gray-50" : ""}
                  ${isCorrect ? "bg-green-100 border-green-500 text-green-800" : ""}
                  ${isWrong ? "bg-red-100 border-red-400 text-red-700" : ""}
                `}
                            >
                                {opt}
                            </li>
                        );
                    })}
                </ul>
            </div>

            {/* Кнопка Далее */}
            <div className="flex justify-end">
                <button
                    onClick={handleNext}
                    disabled={selected === null}
                    className="bg-[#007AFF] hover:bg-blue-700 text-white px-6 py-2 rounded disabled:opacity-40"
                >
                    {index < questions.length - 1 ? "Далее" : "Завершить"}
                </button>
            </div>
        </div>
    );
}
