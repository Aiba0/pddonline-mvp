import DemoBanner from "../../components/Dashboard/DemoBanner.jsx";
import StepsProgress from "../../components/Dashboard/StepsProgress.jsx";
import ModulesList from "../../components/Dashboard/ModulesList.jsx";

export default function HomePage() {
    return (
        <div className="flex min-h-screen bg-gray-100">
            {/* Основной контент */}
            <main className="flex-1 p-6">
                {/* Приветствие */}
                <h1 className="text-lg font-bold mb-3">Добро пожаловать, Уйсинбаев Айбек</h1>

                {/* Демо баннер */}
                <DemoBanner />

                {/* Шаги обучения */}
                <StepsProgress />

                {/* Список модулей */}
                <ModulesList />
            </main>
        </div>
    );
}
