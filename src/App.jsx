import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ChatPage from "./pages/ChatPage";
import MainLayout from "./layout/MainLayout";
import HomePage from "./pages/HomePage.jsx";
import CourseList from "./pages/CourseList.jsx";
import CourseDetail from "./pages/CourseDetail.jsx";
import Exam from "./pages/Exam.jsx";
import ExamSession from "./pages/ExamSession.jsx";
import DrivingBooking from "./pages/DrivingBooking.jsx";

function App() {
    return (
        <Router>
            <Routes>
                <Route element={<MainLayout />}>
                    <Route path="/main" element={<HomePage />} />
                    <Route path="/chat" element={<ChatPage />} />
                    <Route path="/exam" element={<Exam />} />
                    <Route path="/courses" element={<CourseList />} />
                    <Route path="/exam-session" element={<ExamSession />} />
                    <Route path="/driving-booking" element={<DrivingBooking />} />
                    <Route path="/courses/:id" element={<CourseDetail />} />
                    {/* Добавляй другие страницы сюда */}
                </Route>
            </Routes>
        </Router>
    );
}

export default App;
