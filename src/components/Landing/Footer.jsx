import { Mail, Instagram, Youtube } from "lucide-react";

export default function Footer() {
    return (
        <footer id="footer" className="w-full bg-[#1769E0] py-10 px-4 mt-12">
            <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center md:items-start gap-8">
                {/* Лого и краткое описание */}
                <div className="flex flex-col items-center md:items-start mb-4 md:mb-0">
                    <a href="/" className="text-white text-2xl font-extrabold tracking-wide mb-2">
                        pdd2025.kz
                    </a>
                    <span className="text-blue-100 text-base mb-2 text-center md:text-left">
            Современная подготовка к экзамену по ПДД: <br />
            тесты, 3D-видеокурсы, ИИ-помощник.
          </span>
                    <span className="text-blue-100 text-xs mt-1">
            © {new Date().getFullYear()} pdd2025.kz. Все права защищены.
          </span>
                </div>
                {/* Меню */}
                <nav className="flex flex-col md:flex-row gap-2 md:gap-8 text-center md:text-left">
                    <a href="#pricing" className="text-blue-100 hover:text-yellow-300 transition font-medium">Тарифы</a>
                    <a href="#faq" className="text-blue-100 hover:text-yellow-300 transition font-medium">FAQ</a>
                    <a href="/register" className="text-blue-100 hover:text-yellow-300 transition font-medium">Регистрация</a>
                    <a href="/login" className="text-blue-100 hover:text-yellow-300 transition font-medium">Вход</a>
                </nav>
                {/* Контакты и соцсети */}
                <div className="flex flex-col items-center md:items-end gap-2">
                    <div className="flex gap-4 mb-1">
                        <a href="mailto:support@pdd2025.kz" target="_blank" rel="noopener noreferrer" className="text-blue-100 hover:text-yellow-300">
                            <Mail className="w-6 h-6" />
                        </a>
                        <a href="https://www.instagram.com/pddonline.kz/" target="_blank" rel="noopener noreferrer" className="text-blue-100 hover:text-yellow-300">
                            <Instagram className="w-6 h-6" />
                        </a>
                        <a href="https://youtube.com/вашканал" target="_blank" rel="noopener noreferrer" className="text-blue-100 hover:text-yellow-300">
                            <Youtube className="w-6 h-6" />
                        </a>
                    </div>
                    <span className="text-blue-100 text-sm">support@pdd2025.kz</span>
                </div>
            </div>
        </footer>
    );
}
