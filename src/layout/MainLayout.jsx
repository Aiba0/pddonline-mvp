import { Outlet } from "react-router-dom";
import Sidebar from "../components/Dashboard/Sidebar.jsx";
import BottomTabNav from "../components/Dashboard/BottomTabNav.jsx";

export default function MainLayout() {
    return (
        <div className="flex h-screen">
            <aside className="hidden md:block">
                <Sidebar />
            </aside>
            <main className="flex-1 overflow-auto pb-16 md:pb-0">
                <Outlet />
            </main>
            <BottomTabNav />
        </div>
    );
}
