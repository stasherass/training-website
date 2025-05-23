import { injectable } from 'inversify';
import { Stoat, IStoat } from '../models/stoat';

// Клас-репозиторій для роботи з горностаями
// Анотація injectable дозволяє впровадити цей репозиторій через IoC контейнер
@injectable()
export class StoatRepository {
    // Метод для отримання всіх горностаїв з бази даних
    public async findAll(): Promise<IStoat[]> {
        return Stoat.find();
    }

    // Метод для пошуку горностаїви за унікальним ідентифікатором
    public async findById(id: string): Promise<IStoat | null> {
        return Stoat.findById(id);
    }

    // Метод для створення нової горностаїви в базі даних
    public async create(stoatData: IStoat): Promise<IStoat> {
        const stoat = new Stoat(stoatData);
        return stoat.save();
    }

    // Метод для видалення горностаїв за ідентифікатором
    public async delete(id: string): Promise<boolean> {
        const result = await Stoat.findByIdAndDelete(id);
        return result !== null;
    }

    // Метод для повного оновлення даних про горностая (заміна всіх полів)
    public async update(id: string, stoatData: IStoat): Promise<IStoat | null> {
        return Stoat.findByIdAndUpdate(id, stoatData, { new: true });
    }

    // Метод для часткового оновлення даних про горностая (оновлення лише вказаних полів)
    public async patch(id: string, stoatData: Partial<IStoat>): Promise<IStoat | null> {
        return Stoat.findByIdAndUpdate(id, { $set: stoatData }, { new: true });
    }
}
