import { useEffect, useRef, useState } from "react";
import { RecaptchaVerifier, signInWithPhoneNumber } from "firebase/auth";
import { auth } from "../firebase";

export default function Login() {
    const [phone, setPhone] = useState("");
    const [code, setCode] = useState("");
    const [confirmation, setConfirmation] = useState(null);
    const recaptchaRef = useRef(null);

    useEffect(() => {
        auth.settings.appVerificationDisabledForTesting = true;

        if (!window.recaptchaVerifier && recaptchaRef.current) {
            const verifier = new RecaptchaVerifier(
                recaptchaRef.current,
                {
                    size: "invisible",
                    callback: (response) => {
                        console.log("reCAPTCHA прошла:", response);
                    },
                },
                auth
            );

            verifier.render().then((widgetId) => {
                window.recaptchaWidgetId = widgetId;
                window.recaptchaVerifier = verifier;
            });
        }
    }, []);

    const handleSendCode = async () => {
        try {
            const result = await signInWithPhoneNumber(auth, phone, window.recaptchaVerifier);
            setConfirmation(result);
            alert("Код отправлен!");
        } catch (err) {
            console.error("Ошибка при отправке:", err);
        }
    };

    const handleVerifyCode = async () => {
        try {
            await confirmation.confirm(code);
            alert("Вы вошли!");
        } catch (err) {
            console.error("Неверный код:", err);
        }
    };

    return (
        <div className="min-h-screen flex flex-col items-center justify-center p-4 bg-gray-100">
            <h1 className="text-2xl font-bold mb-4">Вход</h1>

            <input
                type="tel"
                placeholder="+7 777 123 4567"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                className="border p-2 rounded w-full max-w-sm mb-3"
            />

            <div ref={recaptchaRef} id="recaptcha-container" />

            {!confirmation ? (
                <button onClick={handleSendCode} className="bg-blue-600 text-white px-4 py-2 rounded">
                    Отправить код
                </button>
            ) : (
                <>
                    <input
                        type="text"
                        value={code}
                        onChange={(e) => setCode(e.target.value)}
                        placeholder="Код из СМС"
                        className="border p-2 rounded w-full max-w-sm mb-3"
                    />
                    <button onClick={handleVerifyCode} className="bg-green-600 text-white px-4 py-2 rounded">
                        Подтвердить
                    </button>
                </>
            )}
        </div>
    );
}
