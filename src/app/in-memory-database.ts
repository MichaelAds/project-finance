import { Category } from './pages/categories/shared/category.model';
import { InMemoryDbService } from 'angular-in-memory-web-api';

export class InMemoryDataBase implements InMemoryDbService {
    createDb() {
        const categories: Category[] = [
            { id: 1, name: 'Lazer', description: 'Cinema, Parque, Praia, etc...' },
            { id: 2, name: 'Saúde', description: 'Plano de saúde e remédios' },
            { id: 3, name: 'Moradia', description: 'Pagamentos de contas da casa' },
            { id: 4, name: 'Salário', description: 'Recebimento de Salário' },
            { id: 5, name: 'Freelas', description: 'Trabalho como freelancer' }
        ];

        return {categories};
    }
}
