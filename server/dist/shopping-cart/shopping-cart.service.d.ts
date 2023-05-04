import { ShoppingCart } from './shopping-cart.model';
import { UsersService } from 'src/users/users.service';
import { BoilerPartsService } from 'src/boiler-parts/boiler-parts.service';
export declare class ShoppingCartService {
    private shoppingCardModel;
    private readonly usersService;
    private readonly boilerPartsService;
    constructor(shoppingCardModel: typeof ShoppingCart, usersService: UsersService, boilerPartsService: BoilerPartsService);
    findAll(userId: number | string): Promise<ShoppingCart[]>;
    add(addToCardDto: any): Promise<ShoppingCart>;
    updateCount(count: number, partId: number | string): Promise<{
        count: number;
    }>;
    updateTotalPrice(total_price: number, partId: number | string): Promise<{
        total_price: number;
    }>;
    remove(partId: number | string): Promise<void>;
    removeAll(userId: number | string): Promise<void>;
}
