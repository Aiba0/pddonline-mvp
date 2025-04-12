import { Outlet } from "react-router-dom";
import Sidebar from "../components/Sidebar"; // путь к твоему сайдбару

export default function MainLayout() {
    return (
        <div className="flex min-h-screen">
            <Sidebar />
            <main className="flex-1 bg-gray-50 p-4 overflow-auto">
                <Outlet />
            </main>
        </div>
    );
}
