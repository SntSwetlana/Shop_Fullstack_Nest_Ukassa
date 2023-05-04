declare class ShoppingCartItem {
    id: number;
    name: string;
    image: string;
    partId: number;
    price: number;
    in_stock: number;
    count: number;
    total_price: number;
    userId: number;
    boiler_manufacturer: string;
    parts_manufacturer: string;
    updatedAt: string;
    createdAt: string;
}
export declare class GetAllResponse extends ShoppingCartItem {
}
export declare class AddToCartResponse extends ShoppingCartItem {
}
export declare class UpdateCountResponse {
    count: number;
}
export declare class UpdateCountRequest {
    count: number;
}
export declare class TotalPriceResponse {
    total_price: number;
}
export declare class TotalPriceRequest {
    total_price: number;
}
export {};
