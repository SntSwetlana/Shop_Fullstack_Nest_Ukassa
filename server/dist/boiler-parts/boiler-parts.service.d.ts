import { BoilerParts } from './boiler-parts.model';
import { IBoilerPartQuery } from './types';
export declare class BoilerPartsService {
    private boilerPartsModel;
    constructor(boilerPartsModel: typeof BoilerParts);
    paginateAndFilter(query: IBoilerPartQuery): Promise<{
        count: number;
        rows: BoilerParts[];
    }>;
    bestsellers(): Promise<{
        count: number;
        rows: BoilerParts[];
    }>;
    new(): Promise<{
        count: number;
        rows: BoilerParts[];
    }>;
    findOne(id: number | string): Promise<BoilerParts>;
    findOneByName(name: string): Promise<BoilerParts>;
    searchByString(str: string): Promise<{
        count: number;
        rows: BoilerParts[];
    }>;
}
