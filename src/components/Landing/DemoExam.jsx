import React, { useState } from "react";
import questionsDb from "../../../db/demotest.json";

const { questions } = questionsDb;
const LETTERS = ["A", "B", "C", "D", "E", "F"];

const DemoExam = () => {
    const [started, setStarted] = useState(false);
    const [current, setCurrent] = useState(0);
    const [selected, setSelected] = useState(null);
    const [showAnswer, setShowAnswer] = useState(false);
    const [finished, setFinished] = useState(false);
    const [score, setScore] = useState(0);

    const startTest = () => {
        setStarted(true);
        setCurrent(0);
        setSelected(null);
        setShowAnswer(false);
        setFinished(false);
        setScore(0);
    };

    const handleAnswer = (idx) => {
        if (showAnswer) return;
        setSelected(idx);
        setShowAnswer(true);

        // Подсчитываем баллы
        if (questions[current].answers[idx].isTrue) {
            setScore(score + 1);
        }
    };

    const nextQuestion = () => {
        if (current + 1 < questions.length) {
            setCurrent(current + 1);
            setSelected(null);
            setShowAnswer(false);
        } else {
            setFinished(true);
        }
    };

    const closeTest = () => {
        setStarted(false);
        setCurrent(0);
        setSelected(null);
        setShowAnswer(false);
        setFinished(false);
        setScore(0);
    };

    if (!started) {
        return (
            <div id="demo" className="w-full flex flex-col items-center justify-center py-12 bg-blue-50 rounded-2xl shadow-md mb-8">
                <h2 className="text-2xl md:text-3xl font-bold text-[#1769E0] mb-4 text-center">
                    Пройдите пробный онлайн тест по ПДД
                </h2>
                <p className="text-lg text-gray-700 mb-6 text-center max-w-xl">
                    Проверьте свои знания на 5 реальных вопросах с видео — бесплатно и без регистрации.
                </p>
                <button
                    className="bg-[#1769E0] text-white px-8 py-3 rounded-xl font-semibold text-lg hover:bg-blue-700 transition"
                    onClick={startTest}
                >
                    Пройти пробный тест
                </button>
            </div>
        );
    }

    if (finished) {
        // Продающий текст в зависимости от баллов
        let promoText = "Начните обучение с профессиональными видеокурсами и сдайте экзамен с первого раза!";
        if (score === questions.length) promoText = "Вы отлично подготовлены! Хотите быть уверены в результате — выберите полный курс!";
        else if (score >= questions.length - 1) promoText = "Остался всего один шаг до идеального результата. Прокачайте знания с нашими видеоуроками!";
        else if (score <= 2) promoText = "Попробуйте обучение в нашем курсе — всё будет понятно, даже если вы только начинаете!";

        return (
            <div className="w-full flex flex-col items-center justify-center py-12">
                <div className="text-2xl font-bold mb-4 text-[#1769E0]">
                    Вы набрали {score} из {questions.length} баллов
                </div>
                <div className="text-lg mb-6 text-center max-w-xl text-gray-800">
                    {promoText}
                </div>
                <a
                    href="#pricing"
                    className="bg-[#1769E0] text-white px-8 py-3 rounded-xl font-semibold text-lg hover:bg-blue-700 transition mb-2"
                >
                    Смотреть тарифы
                </a>
                <button
                    className="text-[#1769E0] underline mt-2"
                    onClick={closeTest}
                >
                    Пройти ещё раз
                </button>
            </div>
        );
    }

    const q = questions[current];

    return (
        <div id="demo" className="w-full flex py-12 px-4 md:px-16 mb-8 flex-col md:flex-row items-start">
            <div className="mr-0 md:mr-16 min-w-max flex flex-col items-start w-full md:w-auto">
                <div className="text-gray-700 font-semibold mb-8">
                    Вопрос {current + 1} из {questions.length}
                </div>
                <video
                    src={q.videoUrl}
                    controls
                    autoPlay
                    className="min-w-full rounded-lg mb-4 h-64 bg-black"
                    style={{aspectRatio: "16/9"}}
                />
            </div>
            <div className="w-full">
                <div className="text-lg font-bold mb-4">{q.question}</div>
                <div className="flex flex-col gap-3 w-full">
                    {q.answers.map((a, idx) => {
                        let className = "px-4 py-3 rounded-lg border transition text-left cursor-pointer flex items-center gap-3 ";
                        if (showAnswer) {
                            if (a.isTrue) className += "bg-green-100 border-green-500 text-green-800 font-semibold";
                            else if (selected === idx) className += "bg-red-100 border-red-500 text-red-800";
                            else className += "bg-gray-100 border-gray-200 text-gray-500";
                        } else {
                            className += "bg-gray-50 border-gray-300 hover:bg-blue-50";
                        }
                        return (
                            <button
                                key={idx}
                                className={className}
                                onClick={() => handleAnswer(idx)}
                                disabled={showAnswer}
                            >
                                <span
                                    className="w-7 h-7 flex items-center justify-center rounded-full bg-blue-100 text-blue-800 font-bold">
                                    {LETTERS[idx]}
                                </span>
                                <span>{a.text}</span>
                            </button>
                        );
                    })}
                </div>
                {showAnswer && (
                    <button
                        className="mt-6 bg-[#1769E0] text-white px-6 py-2 rounded-lg font-semibold hover:bg-blue-700 transition"
                        onClick={nextQuestion}
                    >
                        {current + 1 < questions.length ? "Следующий вопрос" : "Завершить"}
                    </button>
                )}
            </div>
        </div>
    );
};

export default DemoExam;
