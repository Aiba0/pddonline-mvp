import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ChatPage from "./pages/Dashboard/ChatPage.jsx";
import MainLayout from "./layout/MainLayout";
import HomePage from "./pages/Dashboard/HomePage.jsx";
import CourseList from "./pages/Dashboard/CourseList.jsx";
import CourseDetail from "./pages/Dashboard/CourseDetail.jsx";
import Exam from "./pages/Dashboard/Exam.jsx";
import ExamSession from "./pages/Dashboard/ExamSession.jsx";
import DrivingBooking from "./pages/Dashboard/DrivingBooking.jsx";
import Landing from "./pages/Landing/Landing.jsx";
import {isAuthenticated} from "./utils/Auth.js";
import RegisterPage from "./pages/Auth/RegisterPage.jsx";
import Favorites from "./pages/Dashboard/Favorites.jsx";
import Mistakes from "./pages/Dashboard/Mistakes.jsx";

const isAuth = isAuthenticated()

function App() {
    return (

        <RegisterPage />
        // <Router>
        //     <Routes>
        //         <Route element={<MainLayout />}>
        //             <Route path="/" element={<HomePage />} />
        //             <Route path="/chat" element={<ChatPage />} />
        //             <Route path="/exam" element={<Exam />} />
        //             <Route path="/courses" element={<CourseList />} />
        //             <Route path="/favorites" element={<Favorites />} />
        //             <Route path="/mistakes" element={<Mistakes />} />
        //             <Route path="/exam-session" element={<ExamSession />} />
        //             <Route path="/driving-booking" element={<DrivingBooking />} />
        //             <Route path="/courses/:id" element={<CourseDetail />} />
        //             <Route path="/login" element={<Login />} />
        //         </Route>
        //     </Routes>
        // </Router>
    )
}

export default App;
