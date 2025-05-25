import React, {useCallback, useState} from "react";
import logo from "../../assets/logo.png"
import InputApp from "../../components/InputApp.jsx";
import ButtonApp from "../../components/ButtonApp.jsx";
import {Link, useNavigate} from "react-router-dom";


const LoginPage = () => {

    const [phone, setPhone] = useState("");
    const [password, setPassword] = useState("");
    const [valid, setValid] = useState({ phone: false, password: false });


    const navigate = useNavigate();

    const onLogin = useCallback((e, user) => {
        e.preventDefault();
        localStorage.setItem('pddonline', JSON.stringify(user));
        navigate("/dashboard", { replace: true });
    }, [navigate]);

    return (
        <div className="min-h-screen px-6 pt-8 bg-[#f7f8fa] flex flex-col px-2">
            <Link to="/" className="flex justify-center items-center mt-6 mb-2">
                <img src={logo} alt="PDD online" className="w-20 h-20 mb-4 mr-4" />
                <h1 className="text-4xl font-extrabold text-[#1769E0]">PDD online</h1>
            </Link>

            <form className="max-w-md w-full mx-auto mt-2 bg-transparent flex flex-col items-stretch">
                <h2 className="text-2xl font-semibold text-center mb-1 mt-4">
                    Вход
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

                {/* Ссылка "Забыли пароль" */}
                {/*<div className="flex justify-end mb-4">*/}
                {/*    <a href="#" className="text-[#1769E0] text-sm hover:underline">*/}
                {/*        Забыли пароль?*/}
                {/*    </a>*/}
                {/*</div>*/}

                {/* Кнопка */}
                <ButtonApp
                    type="submit"
                    onClick={(e) => onLogin(e,{phone, password})}
                    disabled={!phone || !password}
                >
                    Войти
                </ButtonApp>

                {/* Ссылка на регистрацию */}
                <div className="text-center text-gray-700 text-sm mt-6">
                    Нет аккаунта?{" "}
                    <Link to="/auth/register" className="text-[#1769E0] hover:underline font-medium">
                        Зарегистрироваться
                    </Link>
                </div>
            </form>
        </div>
    )
}

export default LoginPage;
