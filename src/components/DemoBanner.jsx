export default function DemoBanner() {
    return (
        <div className="bg-[#FFF2F2] border border-[#FFD4D4] text-sm text-[#333] p-4 rounded-lg flex items-center justify-between mb-6">
            {/* Левая часть — текст и иконка */}
            <div className="flex items-start gap-3">
                {/* Иконка ⚠️ */}
                <div className="text-red-600 text-xl mt-[2px]">⚠️</div>
                <div>
                    <p className="font-semibold">Вы используете демо-версию</p>
                    <p className="text-xs text-[#666] mt-1">
                        Чтобы использовать полную версию перейдите на раздел оплаты
                    </p>
                </div>
            </div>

            {/* Правая часть — кнопка */}
            <button className="bg-[#0057FF] hover:bg-[#0046d1] transition text-white text-sm font-semibold px-5 py-2 rounded-md">
                Оплатить
            </button>
        </div>
    );
}
