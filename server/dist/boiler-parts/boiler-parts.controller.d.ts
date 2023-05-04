import { BoilerPartsService } from './boiler-parts.service';
export declare class BoilerPartsController {
    private readonly boilerPartsService;
    constructor(boilerPartsService: BoilerPartsService);
    paginateAndFilter(query: any): Promise<{
        count: number;
        rows: import("./boiler-parts.model").BoilerParts[];
    }>;
    getOne(id: string): Promise<import("./boiler-parts.model").BoilerParts>;
    getBestseller(): Promise<{
        count: number;
        rows: import("./boiler-parts.model").BoilerParts[];
    }>;
    getNew(): Promise<{
        count: number;
        rows: import("./boiler-parts.model").BoilerParts[];
    }>;
    search({ search }: {
        search: string;
    }): Promise<{
        count: number;
        rows: import("./boiler-parts.model").BoilerParts[];
    }>;
    getByName({ name }: {
        name: string;
    }): Promise<import("./boiler-parts.model").BoilerParts>;
}
