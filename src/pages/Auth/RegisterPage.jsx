import React, {useCallback, useState} from "react";
import logo from "../../assets/logo.png";
import InputApp from "../../components/InputApp.jsx";
import ButtonApp from "../../components/ButtonApp.jsx";
import {Link, useNavigate} from "react-router-dom";

const RegisterPage = () => {
    const [method, setMethod] = useState("whatsapp");
    const [phone, setPhone] = useState("");
    const [name, setName] = useState("");
    const [password, setPassword] = useState("");
    const [valid, setValid] = useState({ phone: false, password: false });

    const navigate = useNavigate();

    const onRegister = useCallback((e, user) => {
        e.preventDefault();
        localStorage.setItem('pddonline', JSON.stringify(user));
        navigate("/dashboard", { replace: true });
    }, [navigate]);

    return (
        <div className="min-h-screen bg-[#f7f8fa] flex flex-col px-6">
            <Link to="/" className="flex justify-center items-center mt-6 mb-2">
                <img src={logo} alt="PDD online" className="w-20 h-20 mb-4 mr-4" />
                <h1 className="text-4xl font-extrabold text-[#1769E0]">PDD online</h1>
            </Link>

            <form className="max-w-md w-full mx-auto mt-2 bg-transparent flex flex-col items-stretch">
                {/* Табы */}
                <div className="mb-8">
                    <div className="flex border-b border-gray-200">
                        <button
                            type="button"
                            className={`w-1/2 py-2 text-lg font-semibold transition-colors duration-200
                ${method === "whatsapp"
                                ? "text-[#1769E0] border-b-2 border-[#1769E0]"
                                : "text-[#22223b] border-b-2 border-transparent"}
              `}
                            onClick={() => setMethod("whatsapp")}
                        >
                            WhatsApp
                        </button>
                        <button
                            type="button"
                            className={`w-1/2 py-2 text-lg font-semibold transition-colors duration-200
                ${method === "sms"
                                ? "text-[#1769E0] border-b-2 border-[#1769E0]"
                                : "text-[#22223b] border-b-2 border-transparent"}
              `}
                            onClick={() => setMethod("sms")}
                        >
                            SMS
                        </button>
                    </div>
                </div>

                <h2 className="text-3xl font-bold text-center mb-2 mt-1 text-[#22223b]">
                    Регистрация
                </h2>

                <InputApp
                    label="Номер телефона"
                    name="phone"
                    type="tel"
                    mask="+7 (000) 000-00-00"
                    value={phone}
                    onChange={e => setPhone(e.target.value)}
                    required
                    onValidChange={({ name, valid }) =>
                        setValid(v => ({ ...v, [name]: valid }))
                    }
                />
                <InputApp
                    label="Имя и Фамилия"
                    name="name"
                    type="text"
                    value={name}
                    onChange={e => setName(e.target.value)}
                    required
                    onValidChange={({ name, valid }) =>
                        setValid(v => ({ ...v, [name]: valid }))
                    }
                />
                <InputApp
                    label="Пароль"
                    name="password"
                    type="password"
                    value={password}
                    onChange={e => setPassword(e.target.value)}
                    required
                    onValidChange={({ name, valid }) =>
                        setValid(v => ({ ...v, [name]: valid }))
                    }
                />


                {/* Чекбокс — соглашение с правилами */}
                {/*<label className="flex items-center mb-5 text-gray-700 text-sm select-none">*/}
                {/*    <input*/}
                {/*        type="checkbox"*/}
                {/*        className="accent-[#1769E0] rounded mr-2"*/}
                {/*        required*/}
                {/*    />*/}
                {/*    Я соглашаюсь с <a href="#" className="ml-1 text-[#1769E0] underline">правилами сервиса</a>*/}
                {/*</label>*/}

                <ButtonApp
                    type="submit"
                    onClick={(e) => onRegister(e,{name, phone, password})}
                    disabled={!valid.name || !valid.phone || !valid.password}
                >
                    Зарегистрироваться
                </ButtonApp>

                {/* Ссылка на вход */}
                <div className="text-center text-gray-700 text-sm my-4">
                    Уже есть аккаунт?{" "}
                    <Link to="/auth/login" className="text-[#1769E0] hover:underline font-medium">
                        Войти
                    </Link>
                </div>
            </form>
        </div>
    );
};

export default RegisterPage;
