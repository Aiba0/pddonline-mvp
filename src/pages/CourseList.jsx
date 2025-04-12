import { useNavigate } from "react-router-dom";

export default function CourseList() {
    const navigate = useNavigate();

    const courses = [
        {
            id: "pdd",
            title: "Видеокурс по ПДД",
            description: "Подготовка к теоретической части экзамена",
            progress: 40,
        },
        {
            id: "autodrom",
            title: "Видеокурс по автодрому",
            description: "Подготовка к практической части экзамена",
            progress: 0,
        },
    ];

    return (
        <div className="p-6">
            <h2 className="text-xl font-bold mb-4">Ваши обучающие курсы</h2>

            <div className="grid gap-4 grid-cols-1 sm:grid-cols-2">
                {courses.map((course) => (
                    <div
                        key={course.id}
                        onClick={() => navigate(`/courses/${course.id}`)}
                        className="cursor-pointer bg-white rounded-xl shadow p-5 transition hover:shadow-md hover:scale-[1.01]"
                    >
                        <h3 className="text-lg font-semibold mb-1">{course.title}</h3>
                        <p className="text-sm text-gray-500 mb-4">{course.description}</p>

                        <div className="flex items-center justify-between">
                            <button className="bg-[#0057FF] text-white px-4 py-2 rounded text-sm hover:bg-blue-700 transition">
                                Открыть курс
                            </button>
                            <span className="text-sm text-gray-600">{course.progress}%</span>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}
