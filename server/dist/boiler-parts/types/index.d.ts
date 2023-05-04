declare class BoilerParts {
    id: number;
    boiler_manufacturer: string;
    price: number;
    parts_manufacturer: string;
    vendor_code: string;
    name: string;
    description: string;
    compatibility: string;
    images: string;
    in_stock: number;
    bestseller: boolean;
    new: boolean;
    popularity: number;
    createdAt: string;
    updatedAt: string;
}
export declare class PaginateAndFilterResponse {
    count: number;
    rows: BoilerParts;
}
export declare class Bestsellers extends BoilerParts {
    bestseller: boolean;
}
export declare class GetBestsellersResponse extends PaginateAndFilterResponse {
    count: number;
    rows: Bestsellers;
}
export declare class NewParts extends BoilerParts {
    new: boolean;
}
export declare class GetNewResponse extends PaginateAndFilterResponse {
    count: number;
    rows: NewParts;
}
export declare class SearchByLetterResponse extends BoilerParts {
    name: string;
}
export declare class SearchResponse extends PaginateAndFilterResponse {
    rows: SearchByLetterResponse;
}
export declare class SearchRequest {
    search: string;
}
export declare class GetByNameResponse extends BoilerParts {
    name: string;
}
export declare class GetByNameRequest {
    name: string;
}
export declare class FindOneResponse extends BoilerParts {
}
export interface IBoilerPartQuery {
    limit: string;
    offset: string;
}
export {};
