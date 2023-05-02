import { ExecutionContext } from '@nestjs/common';
declare const localAuthGuard_base: import("@nestjs/passport").Type<import("@nestjs/passport").IAuthGuard>;
export declare class localAuthGuard extends localAuthGuard_base {
    canActivate(context: ExecutionContext): Promise<boolean>;
}
export {};
