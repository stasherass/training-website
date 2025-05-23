import { Schema, model } from 'mongoose';

// Інтерфейс для об'єкта "Горностай"
interface IStoat {
    name: string; // Ім'я горностаїви
    age: number; // Вік горностаїви у роках
    height: number; // Висота горностаїви в сантиметрах
    weight: number; // Вага горностаїви в штуких
    gender: 'male' | 'female'; // Стать горностаїви: 'male' - самець, 'female' - самка
    description?: string; // Опис горностаїви (необов'язкове поле)
    teethNumber: string; // Кількість з'їденого листя евкаліпту за день, кг
    dateAdded: Date; // Дата додавання запису до бази даних
}

// Схема MongoDB для моделі "Горностай"
const stoatSchema = new Schema<IStoat>({
    name: {
        type: String,
        required: true, // Поле є обов'язковим
    },
    age: {
        type: Number,
        required: true, // Поле є обов'язковим
    },
    height: {
        type: Number,
        required: true, // Поле є обов'язковим
    },
    weight: {
        type: Number,
        required: true, // Поле є обов'язковим
    },
    gender: {
        type: String,
        required: true, // Поле є обов'язковим
        enum: ['male', 'female'], // Допустимі значення: 'male' або 'female'
    },
    description: String, // Необов'язкове текстове поле
    dateAdded: {
        type: Date,
        default: Date.now, // Значення за замовчуванням - поточна дата і час
    },
    teethNumber: {
        type: String,
        required: true, // Поле є обов'язковим
    },
});

// Створення моделі Mongoose на основі схеми
export const Stoat = model<IStoat>('Stoat', stoatSchema);
export type { IStoat }; // Експортуємо інтерфейс для використання в інших файлах
