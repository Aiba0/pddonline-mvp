export default function StepsProgress() {
    const steps = [
        "Пройдите курс по ПДД",
        "Сдайте теоретический экзамен",
        "Пройдите курс по автодрому",
        "Сдайте практический пробный экзамен",
        "Получите сертификат",
    ];

    return (
        <div className="bg-white rounded-lg shadow p-5 mb-6">
            <h2 className="text-base font-semibold mb-4">Этапы обучения</h2>

            <div className="relative flex items-center justify-between">
                {/* Горизонтальная линия */}
                <div className="absolute top-[20px] left-0 right-0 h-px bg-gray-200 z-0" />

                {/* Шаги */}
                {steps.map((step, index) => (
                    <div key={index} className="z-10 flex flex-col items-center text-center w-1/5 ">
                        <div className="w-10 h-10 rounded-full border-2 border-[#007AFF] bg-white text-[#007AFF] flex items-center justify-center font-bold">
                            {index + 1 === 5 ? '✓' : index + 1}
                        </div>
                        <p className="text-[11px] text-[#555] mt-2 leading-tight">{step}</p>
                    </div>
                ))}
            </div>
        </div>
    );
}
