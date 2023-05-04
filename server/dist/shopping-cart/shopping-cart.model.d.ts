import { Model } from 'sequelize-typescript';
export declare class ShoppingCart extends Model {
    userId: number;
    partId: number;
    boiler_manufacturer: string;
    price: number;
    parts_manufacturer: string;
    name: string;
    image: string;
    in_stock: number;
    count: number;
    total_price: number;
}
