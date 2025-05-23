// Експорт специфікації Swagger/OpenAPI для документації про API
export const swaggerSpec = {
    // Версія специфікації OpenAPI
    openapi: '3.0.0',
    // Загальна інформація про API
    info: {
        title: 'API Сайту про Горностаїв',
        version: '1.0.0',
        description: 'Документація API для Сайту про Горностаїв',
    },
    // Налаштування серверів для тестування API
    servers: [
        {
            url:
                process.env.CODESPACE_NAME !== undefined
                    ? `https://${process.env.CODESPACE_NAME}-5000.app.github.dev`
                    : 'http://localhost:5000',
            description: 'Development server',
        },
    ],
    // Визначення роутерів API та операцій з ними
    paths: {
        '/api/stoats': {
            // GET запит для отримання всіх горностаїв
            get: {
                summary: 'Отримати всіх горностаїв',
                responses: {
                    '200': {
                        description: 'Список всіх горностаїв',
                        content: {
                            'application/json': {
                                schema: {
                                    type: 'array',
                                    items: { $ref: '#/components/schemas/Stoat' },
                                },
                            },
                        },
                    },
                },
            },

            // POST запит для створення нового горностая
            post: {
                summary: 'Створити нового горностая',
                requestBody: {
                    required: true,
                    content: {
                        'application/json': {
                            schema: { $ref: '#/components/schemas/Stoat' },
                        },
                    },
                },
                responses: {
                    '201': {
                        description: "Створений об'єкт горностая",
                        content: {
                            'application/json': {
                                schema: { $ref: '#/components/schemas/Stoat' },
                            },
                        },
                    },
                },
            },
        },

        // Операції для конкретного горностая за ID
        '/api/stoats/{id}': {
            // GET запит для отримання горностая за ID
            get: {
                summary: 'Отримати горностая за ID',
                parameters: [
                    {
                        in: 'path',
                        name: 'id',
                        required: true,
                        schema: { type: 'string' },
                        description: 'ID горностая',
                        teethNumber: '',
                    },
                ],
                responses: {
                    '200': {
                        description: "Об'єкт горностая",
                        content: {
                            'application/json': {
                                schema: { $ref: '#/components/schemas/Stoat' },
                            },
                        },
                    },
                    '404': { description: 'Горностая не знайдено' },
                },
            },

            // PUT запит для повного оновлення горностая за ID
            put: {
                summary: 'Повністю оновити горностая',
                parameters: [
                    {
                        in: 'path',
                        name: 'id',
                        required: true,
                        schema: { type: 'string' },
                        description: 'ID горностая',
                        teethNumber: '',
                    },
                ],
                requestBody: {
                    required: true,
                    content: {
                        'application/json': {
                            schema: { $ref: '#/components/schemas/Stoat' },
                        },
                    },
                },
                responses: {
                    '200': {
                        description: "Оновлений об'єкт горностая",
                        content: {
                            'application/json': {
                                schema: { $ref: '#/components/schemas/Stoat' },
                            },
                        },
                    },
                    '404': { description: 'Горностая не знайдено' },
                },
            },
            // PATCH запит для часткового оновлення горностая за ID
            patch: {
                summary: 'Частково оновити горностая',
                parameters: [
                    {
                        in: 'path',
                        name: 'id',
                        required: true,
                        schema: { type: 'string' },
                        description: 'ID горностая',
                        teethNumber: '',
                    },
                ],
                requestBody: {
                    required: true,
                    content: {
                        'application/json': {
                            schema: { $ref: '#/components/schemas/Stoat' },
                        },
                    },
                },
                responses: {
                    '200': {
                        description: "Оновлений об'єкт горностая",
                        content: {
                            'application/json': {
                                schema: { $ref: '#/components/schemas/Stoat' },
                            },
                        },
                    },
                    '404': { description: 'Горностая не знайдено' },
                },
            },
            // DELETE запит для видалення даних про горностая за ID
            delete: {
                summary: 'Видалити дані про горностая',
                parameters: [
                    {
                        in: 'path',
                        name: 'id',
                        required: true,
                        schema: { type: 'string' },
                        description: 'ID горностая',
                        teethNumber: '',
                    },
                ],
                responses: {
                    '200': { description: 'Повідомлення про успішне видалення' },
                    '404': { description: 'Горностая не знайдено' },
                },
            },
        },
    },

    // Визначення компонентів для повторного використання
    components: {
        // Схеми даних
        schemas: {
            // Схема об'єкта Горностай
            Stoat: {
                type: 'object',
                required: ['name', 'age', 'height', 'weight', 'gender'],
                properties: {
                    name: {
                        type: 'string',
                        description: "Ім'я горностая",
                    },
                    age: {
                        type: 'number',
                        description: 'Вік горностая у роках',
                    },
                    height: {
                        type: 'number',
                        description: 'Висота горностая в сантиметрах',
                    },
                    weight: {
                        type: 'number',
                        description: 'Вага горностая в штуких',
                    },
                    gender: {
                        type: 'string',
                        enum: ['male', 'female'],
                        description: 'Стать горностая',
                    },
                    description: {
                        type: 'string',
                        description: "Опис горностая (необов'язкове поле)",
                    },
                    teethNumber: {
                        type: 'string',
                        description: 'Кількість зїдання  евкалипта в день',
                    },
                },
            },
        },
    },
};
