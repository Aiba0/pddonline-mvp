import Intro from "../../components/Landing/Intro.jsx";
import AdvantageBlock from "../../components/Landing/Advantages.jsx";
import examImage from "../../assets/desktop-mobile.png";
import aiChatImage from "../../assets/ai-chat.png";
import courseImage from "../../assets/3d-course.png";
import priceImage from "../../assets/price.png";
import React from "react";
import DemoExam from "../../components/Landing/DemoExam.jsx";
import Tariffs from "../../components/Landing/Tariffs.jsx";
import FAQBlock from "../../components/Landing/FAQBlock.jsx";
import FooterBlock from "../../components/Landing/Footer.jsx";
import ForWhom from "../../components/Landing/ForWhom.jsx";
import LearningStages from "../../components/Landing/LearningStages.jsx";
import FeedbackForm from "../../components/Landing/FeedbackForm.jsx";
import Grants from "../../components/Landing/Grants.jsx";

export default function Landing() {
    return (
        <div>
            <Intro/>
            <AdvantageBlock
                title="3D Видеокурсы по ПДД"
                subtitle="Учиться — легко и интересно"
                desc="Уникальные 3D-видеоуроки: сложные ситуации показаны наглядно. Ты не просто учишь правила — ты реально видишь, как всё работает на дороге. Подходит для любого уровня подготовки."
                img={courseImage}
                imgLeft={true}
            />
            <AdvantageBlock
                title="Тесты — как на экзамене"
                subtitle="Тесты, которые реально будут в СпецЦОНе (актуальные на 2025 год)"
                desc="Наши тесты полностью соответствуют заданиям в СпецЦОНах Казахстана. Всегда актуальная база вопросов, никаких сюрпризов на настоящем экзамене."
                img={examImage}
                imgLeft={false}
            />
            <AdvantageBlock
                title="ИИ-чат"
                subtitle="Твой виртуальный инструктор 24/7"
                desc="Не понял тему? Просто спроси у ИИ-чата — он объяснит правила, поможет решить задачи и поддержит на каждом этапе подготовки."
                img={aiChatImage}
                imgLeft={true}
            />
            <AdvantageBlock
                title="Лучшая цена"
                subtitle="Самая низкая цена на рынке"
                desc="У нас честная и прозрачная цена без скрытых платежей. Мы предлагаем полный доступ к видеокурсам, тестам и поддержке дешевле, чем где-либо ещё в Казахстане."
                img={priceImage}
                imgLeft={false}
            />
            {/*<div className="w-full flex items-center justify-center">*/}
            {/*    <a href="/auth"*/}
            {/*       className="w-80 inline-block bg-yellow-400 text-gray-800 px-8 py-4 text-center rounded-xl text-lg font-semibold shadow hover:bg-yellow-300 transition-transform duration-200 hover:scale-105 focus:scale-95 active:scale-95">*/}
            {/*        Зарегистрироваться*/}
            {/*    </a>*/}
            {/*</div>*/}
            <DemoExam/>
            <ForWhom/>
            <LearningStages/>
            <Grants/>
            <Tariffs/>
            <FAQBlock/>
            <FeedbackForm/>
            <FooterBlock/>
        </div>
    )
}