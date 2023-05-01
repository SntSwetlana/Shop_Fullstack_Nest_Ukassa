export declare const databaseConfig: (() => {
    sql: {
        dialect: import("sequelize").Dialect;
        logging: boolean;
        host: string;
        port: string;
        password: string;
        database: string;
        autoLoadEntities: boolean;
        synchronize: boolean;
    };
}) & import("@nestjs/config").ConfigFactoryKeyHost<{
    sql: {
        dialect: import("sequelize").Dialect;
        logging: boolean;
        host: string;
        port: string;
        password: string;
        database: string;
        autoLoadEntities: boolean;
        synchronize: boolean;
    };
}>;
