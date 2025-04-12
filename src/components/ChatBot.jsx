import { useState, useEffect, useRef } from "react";
import { askInstructor } from "../api/chatApi";
import ReactMarkdown from "react-markdown";
import { motion, AnimatePresence } from "framer-motion";


import avatar_ai from "../assets/avatar_ai.png"
import avatar_user from "../assets/avatar-user.svg"

export default function ChatBot() {
    const [input, setInput] = useState("");
    const [chat, setChat] = useState([]);
    const [loading, setLoading] = useState(false);
    const chatEndRef = useRef(null);

    // Загружаем историю из localStorage
    useEffect(() => {
        const saved = localStorage.getItem("chat_history");
        if (saved) {
            setChat(JSON.parse(saved));
        }
    }, []);

    // Сохраняем в localStorage
    useEffect(() => {
        localStorage.setItem("chat_history", JSON.stringify(chat));
    }, [chat]);

    // Прокрутка вниз
    useEffect(() => {
        chatEndRef.current?.scrollIntoView({ behavior: "smooth" });
    }, [chat]);

    const handleSend = async () => {
        if (!input.trim() || loading) return;

        const userMessage = { role: "user", content: input };
        setChat((prev) => [...prev, userMessage]);
        setInput("");
        setLoading(true);

        const response = await askInstructor(input);
        const aiMessage = { role: "assistant", content: response };

        setChat((prev) => [...prev, aiMessage]);
        setLoading(false);
    };

    return (
        <div className="w-full h-[calc(100vh-120px)] px-4">
            <div className="max-w-5xl mx-auto h-full flex flex-col bg-white shadow rounded-xl overflow-hidden">
                {/* Сообщения */}
                <div className="flex-1 overflow-y-auto px-4 py-2">
                    <AnimatePresence initial={false}>
                        {chat.map((msg, index) => (
                            <motion.div
                                key={index}
                                className={`mb-3 flex items-start gap-2 ${
                                    msg.role === "user" ? "justify-end" : "justify-start"
                                }`}
                                initial={{ opacity: 0, y: 10 }}
                                animate={{ opacity: 1, y: 0 }}
                                exit={{ opacity: 0, y: -10 }}
                                transition={{ duration: 0.3 }}
                            >
                                {msg.role === "assistant" && (
                                    <img
                                        src={avatar_ai}
                                        alt="Инструктор"
                                        className="w-8 h-8 rounded-full object-cover"
                                    />
                                )}

                                <div
                                    className={`inline-block px-3 py-2 rounded-lg max-w-[80%] whitespace-pre-wrap text-sm md:text-base ${
                                        msg.role === "user"
                                            ? "bg-blue-500 text-white"
                                            : "bg-gray-200 text-black"
                                    }`}
                                >
                                    {msg.role === "assistant" ? (
                                        <ReactMarkdown>{msg.content}</ReactMarkdown>
                                    ) : (
                                        msg.content
                                    )}
                                </div>

                                {msg.role === "user" && (
                                    <img
                                        src={avatar_user}
                                        alt="Вы"
                                        className="w-8 h-8 rounded-full object-cover"
                                    />
                                )}
                            </motion.div>
                        ))}
                    </AnimatePresence>

                    {/* Анимация "..." при загрузке */}
                    {loading && (
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            className="mb-3 flex items-start gap-2"
                        >
                            <img
                                src={avatar_ai}
                                alt="Инструктор"
                                className="w-8 h-8 rounded-full object-cover"
                            />
                            <div className="inline-flex items-center gap-1 px-3 py-2 bg-gray-200 text-black rounded-lg">
                                <motion.span
                                    className="w-2 h-2 bg-gray-500 rounded-full"
                                    animate={{ opacity: [0.3, 1, 0.3] }}
                                    transition={{ duration: 1, repeat: Infinity, delay: 0 }}
                                />
                                <motion.span
                                    className="w-2 h-2 bg-gray-500 rounded-full"
                                    animate={{ opacity: [0.3, 1, 0.3] }}
                                    transition={{ duration: 1, repeat: Infinity, delay: 0.2 }}
                                />
                                <motion.span
                                    className="w-2 h-2 bg-gray-500 rounded-full"
                                    animate={{ opacity: [0.3, 1, 0.3] }}
                                    transition={{ duration: 1, repeat: Infinity, delay: 0.4 }}
                                />
                            </div>
                        </motion.div>
                    )}

                    <div ref={chatEndRef} />
                </div>

                {/* Инпут и кнопка */}
                <div className="p-4 border-t flex gap-2">
                    <input
                        value={input}
                        onChange={(e) => setInput(e.target.value)}
                        onKeyDown={(e) => {
                            if (e.key === "Enter" && !e.shiftKey && !loading) {
                                e.preventDefault();
                                handleSend();
                            }
                        }}
                        placeholder="Задай вопрос автоинструктору..."
                        className="flex-1 border border-gray-200 px-3 py-2 rounded-lg text-sm md:text-base outline-none focus:border-[#007AFF] focus:ring-1 focus:ring-[#007AFF]/10 transition-all duration-200"
                    />

                    <button
                        onClick={handleSend}
                        className="bg-blue-600 text-white px-4 py-2 rounded disabled:opacity-50"
                        disabled={loading}
                    >
                        Отправить
                    </button>
                </div>
            </div>
        </div>
    );
}