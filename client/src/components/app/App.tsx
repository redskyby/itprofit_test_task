import React, { useState } from "react";
import style from "./App.module.scss";
import InputMask from "react-input-mask";
import { FormDataResponse } from "../../services/Interfaces";
import Modal from "../modal/Modal";

const App = () => {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [phone, setPhone] = useState("");
    const [message, setMessage] = useState("");
    const [errorMessage, setErrorMessage] = useState("");
    const [successMessage, setSuccessMessage] = useState("");

    const handleClick = () => {
        // Создаем объект с данными для отправки на сервер
        const formData = {
            name,
            email,
            phone,
            message,
        };
        fetch("http://localhost:5000/api/validation/check", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(formData),
        })
            .then((response) => response.json())
            .then((data: FormDataResponse) => {
                if (data.status === "error") {
                    // Обработка ошибок
                    setErrorMessage(data.fields.inputName);
                    setSuccessMessage("");
                } else if (data.status === "success") {
                    // Обработка успешной отправки
                    setErrorMessage("");
                    setSuccessMessage(data.msg);
                    // Очищаем поля формы
                    setName("");
                    setEmail("");
                    setPhone("");
                    setMessage("");
                }
            })
            .catch((error) => {
                alert(error);
                console.error("Ошибка при отправке данных:", error);
            });
    };

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
                <button type="button" onClick={handleClick}>
                    Отправить
                </button>
            </form>
            {errorMessage && <div className={style.error}>{errorMessage}</div>}
            {successMessage && <div className={style.success}>{successMessage}</div>}
            <Modal />
        </div>
    );
};

export default App;
