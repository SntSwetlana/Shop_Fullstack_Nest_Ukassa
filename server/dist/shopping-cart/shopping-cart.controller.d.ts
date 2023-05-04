import { ShoppingCartService } from './shopping-cart.service';
import { AddToCartDto } from './dto/add-to-cart.dto';
export declare class ShoppingCartController {
    private readonly shoppingCardService;
    constructor(shoppingCardService: ShoppingCartService);
    getAll(userId: string): Promise<import("./shopping-cart.model").ShoppingCart[]>;
    addToCart(addToCartDto: AddToCartDto): Promise<import("./shopping-cart.model").ShoppingCart>;
    updateCount({ count }: {
        count: number;
    }, partId: string): Promise<{
        count: number;
    }>;
    updateTotalPrice({ total_price }: {
        total_price: number;
    }, partId: string): Promise<{
        total_price: number;
    }>;
    removeOne(partId: string): Promise<void>;
    removeAll(userId: string): Promise<void>;
}
