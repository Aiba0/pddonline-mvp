import { useState } from "react";
import { DayPicker } from "react-day-picker";
import "react-day-picker/dist/style.css";
import localData from "../../../db/citiesData.json";

export default function DrivingPractice() {
    const [city, setCity] = useState("");
    const [school, setSchool] = useState(null);
    const [selectedDate, setSelectedDate] = useState(null);
    const [submitted, setSubmitted] = useState(false);

    const parseDate = (dateStr) => new Date(dateStr + "T00:00:00");

    const handleSubmit = () => {
        if (city && school && selectedDate) {
            setSubmitted(true);
        }
    };

    const handleCancel = () => {
        setSubmitted(false);
        setSelectedDate(null);
        setCity('')
        setSchool(null)
    };

    const availableDates = school
        ? school.schedule.map(parseDate)
        : [];

    const isDateAvailable = (date) =>
        availableDates.some((d) => d.toDateString() === date.toDateString());

    const modifiers = {
        available: isDateAvailable
    };

    const modifiersStyles = {
        available: {
            backgroundColor: "#27AE60",
            color: "white",
            borderRadius: "9999px",
            border: 'none'
        },
        selected: {
            backgroundColor: "#0057FF",
            color: "white",
            borderRadius: "9999px",
            border: 'none'
        }
    };

    const whatsappLink = school
        ? `https://wa.me/${school.phone.replace("+", "")}?text=${encodeURIComponent(
            `Здравствуйте! Я записался(ась) на пробное вождение через PDDonline.kz.\nГород: ${city}\nАвтошкола: ${school.name}\nДата: ${selectedDate?.toLocaleDateString("ru-RU")}`
        )}`
        : "#";

    return (
        <div className="max-w-xl mx-auto p-6">
            <h1 className="text-2xl font-bold mb-6">Запись на пробное вождение</h1>

            {/* Город */}
            <div className="mb-4">
                <label className="block mb-1 font-medium">Город</label>
                <select
                    value={city}
                    disabled={submitted}
                    onChange={(e) => {
                        setCity(e.target.value);
                        setSchool(null);
                        setSelectedDate(null);
                        setSubmitted(false);
                    }}
                    className="w-full border px-4 py-2 rounded"
                >
                    <option value="">Выберите город</option>
                    {Object.keys(localData).map((city) => (
                        <option key={city}>{city}</option>
                    ))}
                </select>
            </div>

            {/* Автошкола */}
            <div className="mb-4">
                <label className={`block mb-1 font-medium ${!city ? 'text-neutral-400' : 'text-neutral-900'}`}>
                    Автошкола
                </label>

                <select
                    value={school?.id || ""}
                    disabled={!city || submitted}
                    onChange={(e) => {
                        const found = localData[city].find((s) => s.id === Number(e.target.value));
                        setSchool(found || null);
                        setSelectedDate(null);
                        setSubmitted(false);
                    }}
                    className="w-full border px-4 py-2 rounded"
                >
                    <option value="">Выберите автошколу</option>
                    {city &&
                        localData[city].map((s) => (
                            <option key={s.id} value={s.id}>{s.name}</option>
                        ))}
                </select>
            </div>

            {/* Календарь */}
            <div className="mb-4">
                <label className={`block mb-1 font-medium ${!school ? 'text-neutral-400' : 'text-neutral-900'}`}>
                    Выберите дату
                </label>
                <DayPicker
                    mode="single"
                    selected={selectedDate}
                    onSelect={(date) => {
                        if (isDateAvailable(date)) {
                            setSelectedDate(date);
                            setSubmitted(false);
                        }
                    }}
                    modifiers={modifiers}
                    modifiersStyles={modifiersStyles}
                    disabled={!(school && city) || submitted}
                />
            </div>

            {/* Кнопка записаться */}
            {!submitted && school && selectedDate && (
                <button
                    onClick={handleSubmit}
                    className="bg-[#007AFF] text-white px-6 py-2 rounded hover:bg-blue-700 transition"
                >
                    Записаться
                </button>
            )}

            {/* После записи */}
            {submitted && (
                <div className="mt-6 bg-green-100 border border-green-300 text-green-800 p-4 rounded space-y-4">
                    <p>✅ Вы успешно записались на пробное вождение!</p>
                    <div className="flex gap-3">
                        <a
                            href={whatsappLink}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700 transition"
                        >
                            Связаться через WhatsApp
                        </a>
                        <button
                            onClick={handleCancel}
                            className="px-4 py-2 rounded bg-gray-200 hover:bg-gray-300"
                        >
                            Отменить запись
                        </button>
                    </div>
                </div>
            )}
        </div>
    );
}
