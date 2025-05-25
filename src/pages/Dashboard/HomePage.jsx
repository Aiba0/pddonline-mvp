import DemoBanner from "../../components/Dashboard/DemoBanner.jsx";
import StepsProgress from "../../components/Dashboard/StepsProgress.jsx";
import ModulesList from "../../components/Dashboard/ModulesList.jsx";

export default function HomePage() {
    const user = localStorage.getItem("pddonline")
    const userName = JSON.parse(user).name


    return (
        <div className="flex min-h-screen bg-gray-100">
            <main className="flex-1 w-full max-w-6xl py-10 px-6">
                <h1 className="text-3xl font-bold mb-3">
                    Добро пожаловать{userName ? ', ' + JSON.parse(user).name : ''}
                </h1>
                <DemoBanner />
                <StepsProgress />
                <ModulesList />
            </main>
        </div>
    );
}
