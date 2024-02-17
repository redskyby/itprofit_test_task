export interface FormDataResponse {
    status: "success" | "error";
    fields?: {
        [fieldName: string]: string; // атрибут name поля с ошибкой: сообщение об ошибке
    };
    msg?: string; // сообщение для вывода в форме
}


