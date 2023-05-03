import { BoilerPartsService } from './boiler-parts.service';
export declare class BoilerPartsController {
    private readonly boilerPartsService;
    constructor(boilerPartsService: BoilerPartsService);
    paginateAndFilter(query: any): Promise<{
        count: number;
        rows: import("./boiler-parts.model").BoilerParts[];
    }>;
}
