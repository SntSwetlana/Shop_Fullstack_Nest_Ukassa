import { ConfigService } from '@nestjs/config';
import { SequelizeOptionsFactory, SequelizeModuleOptions } from '@nestjs/sequelize';
export declare class SequelizeConfigService implements SequelizeOptionsFactory {
    private readonly configService;
    constructor(configService: ConfigService);
    createSequelizeOptions(): SequelizeModuleOptions;
}
