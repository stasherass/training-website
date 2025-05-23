import { Router, Request, Response } from 'express';
import { container } from '../config/container';
import { StoatRepository } from '../repositories/StoatRepository';

// Створюємо новий роутер Express
const router = Router();
// Отримуємо екземпляр репозиторію горностая з контейнера інверсії залежностей
const stoatRepository = container.get(StoatRepository);

// Роутер для HTTP метода GET / - отримання всіх записів горностая
router.get('/', (async (_req: Request, res: Response) => {
    try {
        // Отримуємо всі записи горностая з бази даних через репозиторій
        const stoats = await stoatRepository.findAll();
        res.json(stoats);
    } catch (error) {
        // Обробка помилки
        const errorMessage = error instanceof Error ? error.message : 'Виникла невідома помилка';
        res.status(500).json({ message: errorMessage });
    }
}) as unknown as (req: Request, res: Response) => void);

// Роутер для HTTP метода GET /:id - отримання запису одного горностая за ідентифікатором
router.get('/:id', (async (req: Request, res: Response) => {
    try {
        // Пошук горностая за ідентифікатором
        const stoat = await stoatRepository.findById(req.params.id);
        if (stoat) {
            res.json(stoat);
        } else {
            // Якщо горностай не знайдений, повертаємо 404 помилку
            res.status(404).json({ message: 'Запис горностая не знайдено' });
        }
    } catch (error) {
        // Обробка помилки
        const errorMessage = error instanceof Error ? error.message : 'Виникла невідома помилка';
        res.status(500).json({ message: errorMessage });
    }
}) as unknown as (req: Request, res: Response) => void);

// Роутер для HTTP метода POST / - створення нового запису горностая
router.post('/', (async (req: Request, res: Response) => {
    try {
        // Створюємо новий запис горностаяи з даних запиту
        const newStoat = await stoatRepository.create(req.body);
        // Повертаємо статус 201 (Created) і дані створеного горностая
        res.status(201).json(newStoat);
    } catch (error) {
        // Обробка помилки
        const errorMessage = error instanceof Error ? error.message : 'Виникла невідома помилка';
        res.status(400).json({ message: errorMessage });
    }
}) as unknown as (req: Request, res: Response) => void);

// Роутер для HTTP метода PUT /:id - повне оновлення запису горностая
router.put('/:id', (async (req: Request, res: Response) => {
    try {
        // Перевірка наявності всіх обов'язкових полів для PUT запиту
        const requiredFields = ['name', 'age', 'height', 'weight', 'gender'];
        const missingFields = requiredFields.filter(field => !(field in req.body));

        // Якщо є відсутні поля, повертаємо помилку 400 Bad Request
        if (missingFields.length > 0) {
            return res.status(400).json({
                message: `Відсутні обов'язкові поля: ${missingFields.join(', ')}`,
            });
        }

        // Оновлюємо горностая з вказаним ID
        const stoat = await stoatRepository.update(req.params.id, req.body);
        if (stoat) {
            return res.json(stoat);
        } else {
            // Якщо горностай не знайдений, повертаємо 404 помилку
            return res.status(404).json({ message: 'Запис горностая не знайдено' });
        }
    } catch (error) {
        // Обробка помилки
        const errorMessage = error instanceof Error ? error.message : 'Виникла невідома помилка';
        return res.status(400).json({ message: errorMessage });
    }
}) as unknown as (req: Request, res: Response) => void);

// Роутер для HTTP метода PATCH /:id - часткове оновлення запису горностая
router.patch('/:id', (async (req: Request, res: Response) => {
    try {
        // Часткове оновлення запису горностая - передаються лише ті поля, які потрібно змінити
        const stoat = await stoatRepository.patch(req.params.id, req.body);
        if (stoat) {
            res.json(stoat);
        } else {
            // Якщо горностай не знайдений, повертаємо 404 помилку
            res.status(404).json({ message: 'Запис горностая не знайдено' });
        }
    } catch (error) {
        // Обробка помилки
        const errorMessage = error instanceof Error ? error.message : 'Виникла невідома помилка';
        res.status(400).json({ message: errorMessage });
    }
}) as unknown as (req: Request, res: Response) => void);

// Роутер для HTTP метода DELETE /:id - видалення запису горностая
router.delete('/:id', (async (req: Request, res: Response) => {
    try {
        // Видаляємо дані про горностая за ID
        const stoat = await stoatRepository.delete(req.params.id);
        if (stoat) {
            // У разі успіху повертаємо повідомлення про видалення
            res.json({ message: 'Запис про горностая видалено' });
        } else {
            // Якщо горностай не знайдена, повертаємо 404 помилку
            res.status(404).json({ message: 'Запис про горностая не знайдено' });
        }
    } catch (error) {
        // Обробка помилки
        const errorMessage = error instanceof Error ? error.message : 'Виникла невідома помилка';
        res.status(500).json({ message: errorMessage });
    }
}) as unknown as (req: Request, res: Response) => void);

export default router;
