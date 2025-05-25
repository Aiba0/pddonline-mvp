import { NavLink } from "react-router-dom";
import { FiHome, FiBookOpen, FiMessageCircle, FiUser, FiEdit } from "react-icons/fi";
import classNames from "classnames";

const TABS = [
  { to: "/dashboard", label: "Главная", icon: FiHome },
  { to: "/dashboard/exam", label: "Тесты", icon: FiEdit },
  { to: "/dashboard/courses", label: "Курсы", icon: FiBookOpen },
  { to: "/dashboard/chat", label: "ИИ-чат", icon: FiMessageCircle },
  { to: "/dashboard/profile", label: "Профиль", icon: FiUser },
];

export default function BottomTabNav() {
  return (
    <nav className="fixed z-40 bottom-0 left-0 w-full bg-white border-t border-gray-200 flex justify-between px-2 py-1 md:hidden shadow-lg">
      {TABS.map(({ to, label, icon: Icon }) => (
        <NavLink
          key={to}
          to={to}
          className={({ isActive }) =>
            classNames(
              "flex flex-col items-center justify-center flex-1 px-1 py-1 text-xs font-medium transition",
              isActive ? "text-[#1769E0]" : "text-gray-500"
            )
          }
        >
          <Icon size={22} />
          <span className="mt-0.5">{label}</span>
        </NavLink>
      ))}
    </nav>
  );
}
