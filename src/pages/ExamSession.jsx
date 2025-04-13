import { useState, useEffect } from "react";
import questionsData from "../../db/questions-min.json";
import {Link} from "react-router-dom";

export default function ExamSession() {
    const total = questionsData.questions.length;
    const [index, setIndex] = useState(() => Number(localStorage.getItem("exam_index") || 0));
    const [answers, setAnswers] = useState(() => JSON.parse(localStorage.getItem("exam_answers") || "{}"));
    const [selected, setSelected] = useState(answers[questionsData.questions[index]?.id] || null);
    const [confirmed, setConfirmed] = useState(false);
    const [showResult, setShowResult] = useState(false);
    const [time, setTime] = useState(() => Number(localStorage.getItem("exam_time") || 1200));
    const [confirmModal, setConfirmModal] = useState(false);
    const [expired, setExpired] = useState(false);

    const current = questionsData.questions[index];

    useEffect(() => {
        const timer = setInterval(() => {
            setTime((prev) => {
                const updated = prev - 1;
                localStorage.setItem("exam_time", updated);
                if (updated <= 0) {
                    clearInterval(timer);
                    setShowResult(true);
                    setExpired(true);
                }
                return updated;
            });
        }, 1000);
        return () => clearInterval(timer);
    }, []);

    useEffect(() => {
        localStorage.setItem("exam_index", index);
        localStorage.setItem("exam_answers", JSON.stringify(answers));
    }, [index, answers]);

    const formatTime = (sec) => {
        const m = Math.floor(sec / 60);
        const s = sec % 60;
        return `${m}:${s < 10 ? "0" : ""}${s}`;
    };

    const handleAnswer = (id) => {
        if (confirmed) return;
        setSelected(id);
    };

    const confirmAnswer = () => {
        if (selected == null) return;
        const updated = { ...answers, [current.id]: selected };
        setAnswers(updated);
        setConfirmed(true);
    };

    const next = () => {
        if (index < total - 1) {
            setIndex(index + 1);
            const nextQ = questionsData.questions[index + 1];
            setSelected(answers[nextQ.id] || null);
            setConfirmed(!!answers[nextQ.id]);
        } else {
            setShowResult(true);
        }
    };

    const back = () => {
        if (index > 0) {
            setIndex(index - 1);
            const prevQ = questionsData.questions[index - 1];
            setSelected(answers[prevQ.id] || null);
            setConfirmed(!!answers[prevQ.id]);
        }
    };

    const skip = () => {
        next();
    };

    const resetAll = () => {
        localStorage.removeItem("exam_index");
        localStorage.removeItem("exam_answers");
        localStorage.removeItem("exam_time");
        setIndex(0);
        setAnswers({});
        setSelected(null);
        setConfirmed(false);
        setTime(1200);
        setShowResult(false);
        setExpired(false);
        setConfirmModal(false);
    };

    const correctAnswersCount = questionsData.questions.filter((q) => {
        const answer = answers[q.id];
        const isCorrect = q.answers.find((a) => a.id === answer)?.is_correct;
        return isCorrect;
    }).length;

    const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("");

    if (showResult) {
        return (
            <div className="max-w-3xl mx-auto p-6">
                <h1 className="text-2xl font-bold mb-4">Результат</h1>
                {expired && <p className="text-red-600 mb-2 font-medium">⏰ Время истекло</p>}
                <p className="text-lg mb-6">
                    Вы правильно ответили на{" "}
                    <span className="font-bold text-green-600">{correctAnswersCount}</span> из{" "}
                    <span className="font-bold">{total}</span> вопросов.
                </p>

                <h2 className="text-xl font-semibold mb-2">Разбор</h2>
                <ul className="space-y-4">
                    {questionsData.questions.map((q, i) => {
                        const userAnswer = answers[q.id];
                        const correct = q.answers.find((a) => a.is_correct);
                        const isCorrect = userAnswer === correct?.id;
                        return (
                            <li key={q.id} className={`p-4 rounded shadow ${isCorrect ? "bg-green-50" : "bg-red-50"}`}>
                                <p className="font-medium">{i + 1}. {q.question.ru}</p>
                                <p className="text-sm mt-1">
                                    Ваш ответ:{" "}
                                    <span className={isCorrect ? "text-green-600" : "text-red-600"}>
                    {q.answers.find((a) => a.id === userAnswer)?.title.ru || "—"}
                  </span>
                                </p>
                                {!isCorrect && (
                                    <p className="text-sm text-green-600">Правильный: {correct?.title.ru}</p>
                                )}
                            </li>
                        );
                    })}
                </ul>

                <div className="flex items-center gap-4 mt-10">
                    <button onClick={resetAll} className="bg-[#007AFF] text-white px-6 py-3.5 rounded-md">
                        Пройти заново
                    </button>
                    <Link to="/exam">
                        <button
                            className="w-[200px] h-[50px] border border-[#007AFF] text-[#007AFF] transition text-sm rounded-md flex items-center justify-center">
                            Перейти на главную страницу
                        </button>
                    </Link>
                </div>
            </div>
        );
    }

    return (
        <div className="max-w-3xl mx-auto p-6">
            {/* Верх */}
            <div className="flex justify-between items-center text-sm text-gray-600 mb-4">
                <div>Вопрос {index + 1} из {total}</div>
                <div>Осталось: <span className="text-red-500 font-medium">{formatTime(time)}</span></div>
                <button onClick={() => setConfirmModal(true)} className="text-blue-600 underline">Завершить</button>
            </div>

            {/*/!* Прогресс бар *!/*/}
            {/*<div className="w-full bg-gray-200 h-2 rounded mb-6">*/}
            {/*    <div className="bg-[#007AFF] h-2 rounded" style={{ width: `${((index + 1) / total) * 100}%` }} />*/}
            {/*</div>*/}

            {/* Нумерация вопросов */}
            <div className="flex flex-wrap gap-2 mb-6 bg-gray-100 p-2 rounded-xl">
                {questionsData.questions.map((q, i) => {
                    const userAnswer = answers[q.id];
                    const correct = q.answers.find((a) => a.is_correct);
                    const isCorrect = userAnswer === correct?.id;
                    const isSelected = i === index;

                    let bg = "bg-white text-gray-500 border";
                    if (isSelected) bg = "bg-[#007AFF] text-white border-[#007AFF]";
                    else if (userAnswer != null && isCorrect) bg = "bg-green-100 text-green-500 border-green-500";
                    else if (userAnswer != null && !isCorrect) bg = "bg-red-100 text-red-500 border-red-500";
                    else bg = "bg-white text-gray-500 border-gray-200";

                    return (
                        <button
                            key={i}
                            onClick={() => {
                                setIndex(i);
                                const q = questionsData.questions[i];
                                setSelected(answers[q.id] || null);
                                setConfirmed(!!answers[q.id]);
                            }}
                            className={`w-8 h-8 rounded border font-medium transition hover:bg-blue-100 ${bg}`}
                        >
                            {i + 1}
                        </button>
                    );
                })}
            </div>

            {/* Вопрос */}
            <div className="bg-white rounded-xl shadow p-5 mb-6">
                <h2 className="text-md font-semibold mb-4">{current.question.ru}</h2>

                {current.question_file && (
                    <video
                        // src={current.question_file}
                        src="https://kulager-auto.kz/storage/questions/video/KaEXJTq1A1pRzpkS8JM5GNAXJaydMpB3HELHedPu.mp4"
                        autoPlay
                        loop
                        muted
                        className="mb-4 w-full rounded max-h-[280px] object-contain"
                    />
                )}

                <ul className="space-y-3">
                    {current.answers.map((ans, i) => {
                        const isSelected = selected === ans.id;
                        const isCorrect = ans.is_correct;
                        const isUserCorrect = confirmed && isSelected && isCorrect;
                        const isUserWrong = confirmed && isSelected && !isCorrect;
                        const showAsCorrect = confirmed && isCorrect;

                        return (
                            <li
                                key={ans.id}
                                onClick={() => handleAnswer(ans.id)}
                                className={`border px-4 py-2 rounded cursor-pointer transition text-sm flex gap-2
                  ${isUserCorrect ? "bg-green-100 border-green-400 text-green-800" : ""}
                  ${isUserWrong ? "bg-red-100 border-red-400 text-red-700" : ""}
                  ${!confirmed && isSelected ? "border-blue-400 bg-blue-50" : ""}
                  ${showAsCorrect && !isSelected ? "bg-green-50 border-green-200" : ""}
                  ${!confirmed && !isSelected ? "hover:bg-gray-50" : ""}
                `}
                            >
                                <span className="font-semibold">{letters[i]}.</span> {ans.title.ru}
                            </li>
                        );
                    })}
                </ul>
            </div>

            {/* Кнопки */}
            <div className="flex justify-between">
                <button onClick={back} disabled={index === 0} className="text-sm bg-gray-200 text-gray-700 px-4 py-2 rounded disabled:opacity-40">
                    Назад
                </button>

                {!confirmed ? (
                    <button onClick={confirmAnswer} disabled={selected == null} className="text-sm bg-[#007AFF] text-white px-6 py-2 rounded disabled:opacity-40">
                        Подтвердить
                    </button>
                ) : (
                    <button onClick={next} className="text-sm bg-[#30A943] text-white px-6 py-2 rounded">
                        Далее
                    </button>
                )}

                <button onClick={skip} className="text-sm bg-orange-100 text-orange-700 px-4 py-2 rounded">
                    Пропустить
                </button>
            </div>

            {/* Модалка подтверждения */}
            {confirmModal && (
                <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
                    <div className="bg-white p-6 rounded-xl w-full max-w-sm shadow">
                        <h2 className="text-lg font-semibold mb-4">Вы действительно хотите завершить тест?</h2>
                        <div className="flex justify-end gap-3">
                            <button onClick={() => setConfirmModal(false)} className="bg-gray-200 px-4 py-2 rounded">
                                Нет
                            </button>
                            <button onClick={() => {
                                setConfirmModal(false);
                                setShowResult(true);
                            }} className="bg-[#ff6565] text-white px-4 py-2 rounded">
                                Да, завершить
                            </button>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
}
