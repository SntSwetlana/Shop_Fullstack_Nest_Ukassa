import { UsersService } from './users.service';
import { createUserDto } from './dto/create-user.dto';
export declare class UsersController {
    private readonly userService;
    constructor(userService: UsersService);
    createUser(createUserDto: createUserDto): Promise<import("./users.model").User | {
        warningMessage: string;
    }>;
    login(req: any): {
        user: any;
        msg: string;
    };
    loginCheck(req: any): any;
    logout(req: any): {
        msg: string;
    };
}
