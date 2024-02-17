import React, { useState } from "react";
import style from "./Modal.module.scss";

function Modal() {
    const [isOpen, setIsOpen] = useState(false);

    const openModal = () => {
        setIsOpen(true);
        document.body.style.overflow = "hidden"; // Запрещаем прокрутку страницы
    };

    // Функция для закрытия модального окна
    const closeModal = () => {
        setIsOpen(false);
        document.body.style.overflow = ""; // Восстанавливаем прокрутку страницы
    };

    return (
        <div>
            <button type={"button"} onClick={openModal}>
                Открыть модальное окно
            </button>
            {isOpen && (
                <div className={style.modal_overlay} onClick={closeModal}>
                    <div className={style.modal}>
                        <span className={style.close} onClick={closeModal}>
                            &times;
                        </span>
                        <div className={style.modal_content}>
                            <h2>Произвольный текст в модальном окне</h2>
                            <p>Это модальное окно содержит произвольный текст.</p>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
}

export default Modal;
