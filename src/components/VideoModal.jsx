import React from "react";

export default function VideoModal({ isOpen, onClose, videoUrl }) {
    if (!isOpen) return null;

    return (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 px-4">
            <div className="bg-white rounded-lg w-full max-w-2xl p-4 relative">
                {/* Кнопка закрытия */}
                <button
                    onClick={onClose}
                    className="absolute top-3 right-3 text-gray-500 hover:text-gray-800 text-2xl font-bold"
                    aria-label="Закрыть"
                >
                    ✕
                </button>

                {/* Видео */}
                <div className="aspect-w-16 aspect-h-9">
                    <iframe
                        className="w-full h-full rounded"
                        src={videoUrl}
                        title="Урок"
                        frameBorder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                    />
                </div>

                {/* Кнопка закрытия снизу (альтернатива) */}
                <div className="mt-4 text-center">
                    <button
                        onClick={onClose}
                        className="text-sm text-white bg-gray-600 px-4 py-2 rounded hover:bg-gray-800 transition"
                    >
                        Закрыть видео
                    </button>
                </div>
            </div>
        </div>
    );
}
