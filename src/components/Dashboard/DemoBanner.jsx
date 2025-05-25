import {Link} from "react-router-dom";

export default function DemoBanner() {
    return (
        <div className="bg-[#FFF2F2] border border-[#FFD4D4] text-sm text-[#333] p-3 sm:p-4 rounded-lg flex flex-col sm:flex-row items-start sm:items-center justify-between mb-6 gap-3">
            {/* Левая часть — текст и иконка */}
            <div className="flex items-start gap-2 sm:gap-3 w-full sm:w-auto">
                <div className="text-red-600 text-xl mt-[2px]">⚠️</div>
                <div>
                    <p className="font-semibold text-sm">Вы используете демо-версию</p>
                    <p className="text-xs text-[#666] mt-1">
                        Чтобы использовать полную версию перейдите на раздел оплаты
                    </p>
                </div>
            </div>
            {/* Кнопка всегда на всю ширину на мобиле */}
            <Link to="tariffs" className="bg-[#0057FF] hover:bg-[#0046d1] transition text-white text-xs sm:text-sm font-semibold px-3 py-2 rounded-md w-full sm:w-auto">
                Получить полную версию
            </Link>
        </div>
    );
}
