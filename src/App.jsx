import { BrowserRouter as Router, Routes, Route, Navigate, Outlet, useLocation } from "react-router-dom";
import { isAuthenticated } from "./utils/Auth";

// Публичные страницы
import Landing from "./pages/Landing/Landing";
import LoginPage from "./pages/Auth/LoginPage";
import RegisterPage from "./pages/Auth/RegisterPage";
// import ResetPasswordPage from "./pages/Auth/ResetPasswordPage";

// Приватные страницы
import MainLayout from "./layout/MainLayout";
import HomePage from "./pages/Dashboard/HomePage";
import ChatPage from "./pages/Dashboard/ChatPage";
import CourseList from "./pages/Dashboard/CourseList";
import CourseDetail from "./pages/Dashboard/CourseDetail";
import Exam from "./pages/Dashboard/Exam";
import ExamSession from "./pages/Dashboard/ExamSession";
import DrivingBooking from "./pages/Dashboard/DrivingBooking";
import Favorites from "./pages/Dashboard/Favorites";
import Mistakes from "./pages/Dashboard/Mistakes";
import Profile from "./pages/Dashboard/Profile.jsx";
import Tariffs from "./pages/Dashboard/Taiffs.jsx";

function ProtectedRoute({ children }) {
    const location = useLocation();
    return isAuthenticated()
        ? children
        : <Navigate to="/auth/login" state={{ from: location }} replace />;
}

function App() {
    return (
        <Router>
            <Routes>
                <Route path="/" element={
                    isAuthenticated()
                        ? <Navigate to="/dashboard" replace />
                        : <Landing />
                } />

                <Route path="/auth/login" element={
                    isAuthenticated()
                        ? <Navigate to="/dashboard" replace />
                        : <LoginPage />
                } />

                <Route path="/auth/register" element={
                    isAuthenticated()
                        ? <Navigate to="/dashboard" replace />
                        : <RegisterPage />
                } />

                {/* Приватные роуты — только для авторизованных */}
                <Route path="/dashboard" element={
                    <ProtectedRoute>
                        <MainLayout />
                    </ProtectedRoute>
                }>
                    <Route index end element={<HomePage />} />
                    <Route path="chat" element={<ChatPage />} />
                    <Route path="exam" element={<Exam />} />
                    <Route path="courses" element={<CourseList />} />
                    <Route path="courses/:id" element={<CourseDetail />} />
                    <Route path="favorites" element={<Favorites />} />
                    <Route path="profile" element={<Profile />} />
                    <Route path="tariffs" element={<Tariffs />} />
                    <Route path="mistakes" element={<Mistakes />} />
                    <Route path="exam/exam-session" element={<ExamSession />} />
                    <Route path="driving-booking" element={<DrivingBooking />} />
                </Route>

                {/* Если роут не найден — редирект на главную */}
                <Route path="*" element={<Navigate to="/" replace />} />
            </Routes>
        </Router>
    );
}

export default App;