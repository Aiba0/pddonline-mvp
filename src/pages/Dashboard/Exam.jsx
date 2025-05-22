import React from "react";
import { Link } from "react-router-dom";
import 'react-circular-progressbar/dist/styles.css';
import { FaFlag, FaGraduationCap, FaBolt, FaStar, FaRandom } from "react-icons/fa";
import {ProgressRing} from "../../components/Dashboard/ProgressRing.jsx";

export default function Exam() {
    return (
        <div className="p-6">
            <h1 className="text-2xl font-bold text-gray-800 mb-6">Тестирование</h1>

            {/* Блок "Узнайте свой уровень" */}
            <div className="bg-[#fff] flex justify-between items-center p-6 rounded-xl mb-8">
                <div>
                    <h2 className="text-lg font-semibold text-gray-800 mb-1">Узнайте свой уровень!</h2>
                    <p className="text-sm text-gray-600 mb-4">Пройдите пробное онлайн тестирование на знание ПДД!</p>
                    <Link to='/exam-session'
                        className="bg-[#007AFF] hover:bg-blue-700 text-white text-sm font-medium px-6 py-3 rounded mt-6 transition">
                        Начать тестирование
                    </Link>
                </div>
                <ProgressRing />
            </div>

            {/* Секция 2 карточки */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                <div className="bg-white rounded-xl shadow-sm p-5">
                    <div className="flex items-center gap-3 mb-3">
                        <div className="bg-[#E9F1FF] p-2 rounded-xl">
                            <FaFlag className="text-[#007AFF]" size={20}/>
                        </div>
                        <div className="font-semibold text-gray-800">Экзамен</div>
                    </div>
                    <p className="text-sm text-gray-500 mb-1">Успешные попытки</p>
                    <p className="text-[#007AFF] text-sm font-bold">0 / 0</p>
                </div>

                <div className="bg-white rounded-xl shadow-sm p-5">
                    <div className="flex items-center gap-3 mb-3">
                        <div className="bg-[#FFF3E4] p-2 rounded-xl">
                            <FaGraduationCap className="text-[#F7941E]" size={20} />
                        </div>
                        <div className="font-semibold text-gray-800">Тестирование по урокам</div>
                    </div>
                    <p className="text-sm text-gray-500 mb-1">Уроки</p>
                    <p className="text-[#F7941E] text-sm font-bold">0 / 19</p>
                </div>
            </div>

            {/* Секция 3 карточки */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="bg-white rounded-xl shadow-sm p-5">
                    <div className="flex items-center gap-3 mb-3">
                        <div className="bg-[#FFECEC] p-2 rounded-xl">
                            <FaBolt className="text-[#FF3B30]" size={20} />
                        </div>
                        <div className="font-semibold text-gray-800">Наиболее сложные вопросы</div>
                    </div>
                    <p className="text-sm text-gray-500">40 самых сложных вопросов по статистике наших учащихся</p>
                </div>

                <div className="bg-white rounded-xl shadow-sm p-5">
                    <div className="flex items-center gap-3 mb-3">
                        <div className="bg-[#E9FCEB] p-2 rounded-xl">
                            <FaStar className="text-[#30A943]" size={20} />
                        </div>
                        <div className="font-semibold text-gray-800">Наиболее простые вопросы</div>
                    </div>
                    <p className="text-sm text-gray-500">40 самых лёгких вопросов по статистике наших учащихся</p>
                </div>

                <div className="bg-white rounded-xl shadow-sm p-5">
                    <div className="flex items-center gap-3 mb-3">
                        <div className="bg-[#F3EDFF] p-2 rounded-xl">
                            <FaRandom className="text-[#8E44FF]" size={20} />
                        </div>
                        <div className="font-semibold text-gray-800">Случайные вопросы</div>
                    </div>
                    <p className="text-sm text-gray-500">40 случайных вопросов. В приоритете будут новые вопросы</p>
                </div>
            </div>
        </div>
    );
}
