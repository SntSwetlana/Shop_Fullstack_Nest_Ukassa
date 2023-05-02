export declare class LoginUserRequest {
    username: string;
    password: string;
}
export declare class LoginUserResponse {
    user: {
        userId: number;
        username: string;
        email: string;
    };
    password: string;
}
