export async function askInstructor(message) {
    try {
        const response = await fetch("https://api.openai.com/v1/chat/completions", {
            method: "POST",
            headers: {
                Authorization: `Bearer ${import.meta.env.VITE_OPENAI_API_KEY}`,
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                model: "gpt-3.5-turbo",
                messages: [
                    {
                        role: "system",
                        content: "Ты чат-бот и для веб-сайта и мобильного приложение PDDonline.kz." +
                            " Это проект, который обучает курсантов по ПДД РК и помогает получить водительские права(Как онлайн автошкола)" +
                            "Твоя задача отвечать только на вопросы курсантам, чтобы они получили ответы на вопросы по ПДД РК." +
                            "Веди себя как опытный автоинструктор и учитель. Отчевай только на вопросы по ПДД РК. Если будут вопросы не касающиеся на наши уроки, откажи вежливо." +
                            "На некоторые вопросы постаряйся рекомендавать нашу онлайн автошколу, но не переусердствуй, чтобы не оттолкнуть потенциально новых клиентов"
                        ,
                    },
                    {
                        role: "user",
                        content: message,
                    },
                ],
                temperature: 0.7,
                max_tokens: 500,
            }),
        });

        if (!response.ok) {
            const errorData = await response.json();
            console.error("OpenAI error:", errorData);
            return `Ошибка от OpenAI (${response.status}): ${errorData.error?.message || "Неизвестная ошибка"}`;
        }

        const data = await response.json();
        return data.choices?.[0]?.message?.content || "Пустой ответ от модели.";
    } catch (error) {
        console.error("Ошибка запроса:", error);
        return "Ошибка соединения с OpenAI.";
    }
}
