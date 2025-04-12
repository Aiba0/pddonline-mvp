import ChatBot from "../components/ChatBot";

export default function ChatPage() {
    return (
        <div className="min-h-screen bg-gray-50 p-4">
            <div className="max-w-xl mx-auto text-center mb-6">
                <h1 className="text-2xl font-bold text-blue-700">💬Виртуальный ИИ-автоинструктор</h1>
                <p className="text-gray-600 mt-1 text-sm">
                    Задай вопрос по правилам дорожного движения РК — и получи чёткий ответ.
                </p>
            </div>
            <ChatBot />
        </div>
    );
}
