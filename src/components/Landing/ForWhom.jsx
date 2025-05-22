const ForWhom = () => (
    <section className="w-full flex justify-center py-16 bg-white">
        <div className="max-w-6xl w-full px-4">
            <h2 className="text-3xl md:text-4xl font-bold mb-10 text-gray-800">Кому подойдёт платформа?</h2>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-7">
                <div className="bg-[#f6faff] rounded-2xl shadow-md flex flex-col items-center p-8">
                    <span className="text-5xl mb-4">🎓</span>
                    <div className="font-semibold text-lg text-gray-900 mb-2 text-center">Школьникам и студентам</div>
                    <div className="text-gray-700 text-sm text-center opacity-80">
                        Удобно совмещать обучение с учёбой, экономить время и получать знания дистанционно.
                    </div>
                </div>
                <div className="bg-[#f6faff] rounded-2xl shadow-md flex flex-col items-center p-8">
                    <span className="text-5xl mb-4">💼</span>
                    <div className="font-semibold text-lg text-gray-900 mb-2 text-center">Взрослым с занятостью</div>
                    <div className="text-gray-700 text-sm text-center opacity-80">
                        Для тех, кто ценит своё время и хочет учиться в комфортном темпе — вечером или на выходных.
                    </div>
                </div>
                <div className="bg-[#f6faff] rounded-2xl shadow-md flex flex-col items-center p-8">
                    <span className="text-5xl mb-4">🚗</span>
                    <div className="font-semibold text-lg text-gray-900 mb-2 text-center">Тем, кто готовится к экзамену</div>
                    <div className="text-gray-700 text-sm text-center opacity-80">
                        Вся необходимая база для уверенного прохождения тестов и сдачи экзамена ПДД.
                    </div>
                </div>
                <div className="bg-[#f6faff] rounded-2xl shadow-md flex flex-col items-center p-8">
                    <span className="text-5xl mb-4">🌍</span>
                    <div className="font-semibold text-lg text-gray-900 mb-2 text-center">Жителям регионов</div>
                    <div className="text-gray-700 text-sm text-center opacity-80">
                        Онлайн-доступ из любой точки Казахстана — для тех, у кого нет автошкол поблизости.
                    </div>
                </div>
            </div>
        </div>
    </section>
);
export default ForWhom;
