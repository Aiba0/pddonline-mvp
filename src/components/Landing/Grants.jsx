const Grants = () => (
    <section className="w-full flex justify-center py-16 bg-gray-50">
        <div className="max-w-5xl w-full px-4">
            <h2 className="text-3xl md:text-4xl font-bold mb-8">Гранты и поддержка</h2>
            <div className="bg-white rounded-2xl shadow-md p-8 flex flex-col gap-4 md:gap-6 items-center">
                <div className="text-5xl mb-2">🎁</div>
                <p className="text-lg font-semibold text-gray-800 text-center mb-2">
                    Бесплатное или льготное обучение для социально уязвимых групп:
                </p>
                <ul className="grid grid-cols-1 md:grid-cols-2 gap-2 w-full md:w-auto text-gray-700 mb-2">
                    <li className="flex items-center gap-2"><span>👩‍👧‍👦</span> Многодетные семьи</li>
                    <li className="flex items-center gap-2"><span>🧑‍🦽</span> Люди с инвалидностью</li>
                    <li className="flex items-center gap-2"><span>🧒</span> Дети-сироты</li>
                    <li className="flex items-center gap-2"><span>🤝</span> Малообеспеченные семьи</li>
                </ul>
                <p className="text-center text-gray-700">
                    <span className="font-medium">Как получить грант?</span><br/>
                    Оставьте заявку через форму обратной связи и прикрепите документы, подтверждающие статус.<br/>
                    Мы рассмотрим заявку в течение 3 рабочих дней.
                </p>
            </div>
        </div>
    </section>
);
export default Grants;
