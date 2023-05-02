import { User } from './users.model';
import { createUserDto } from './dto/create-user.dto';
export declare class UsersService {
    private userModel;
    constructor(userModel: typeof User);
    findOne(filter: {
        where: {
            id?: string;
            username?: string;
            email?: string;
        };
    }): Promise<User>;
    create(createUserDto: createUserDto): Promise<User | {
        warningMessage: string;
    }>;
}
