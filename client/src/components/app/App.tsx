import React, { useState } from "react";
import style from "./App.module.scss";
import InputMask from "react-input-mask";

const App = () => {
    const [name, setName] = useState<string>("");
    const [email, setEmail] = useState<string>("");
    const [phone, setPhone] = useState<string>("");
    const [message, setMessage] = useState<string>("");

    return (
        <div className={style.feedback_form}>
            <h1>Форма обратной связи</h1>
            <form>
                <div className={style.form_group}>
                    <label htmlFor="name">Имя:</label>
                    <input type="text" id="name" value={name} onChange={(e) => setName(e.target.value)} required />
                </div>
                <div className={style.form_group}>
                    <label htmlFor="email">E-mail:</label>
                    <input type="email" id="email" value={email} onChange={(e) => setEmail(e.target.value)} required />
                </div>
                <div className={style.form_group}>
                    <label htmlFor="phone">Телефон:</label>
                    <InputMask
                        className={style.input_mask}
                        mask="+375 (29) 999-99-99"
                        maskChar="_"
                        id="phone"
                        value={phone}
                        onChange={(e) => setPhone(e.target.value)}
                        placeholder="+375 (__) ___-__-__"
                        required
                    />
                </div>
                <div className={style.form_group}>
                    <label htmlFor="message">Сообщение:</label>
                    <textarea
                        id="message"
                        value={message}
                        onChange={(e) => setMessage(e.target.value)}
                        rows={4}
                        required
                    ></textarea>
                </div>
                <button type="button">Отправить</button>
            </form>
        </div>
    );
};

export default App;
