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
export declare class LogoutUserResponse {
    msg: string;
}
export declare class LoginCheckResponse {
    userId: string;
    user: string;
    email: string;
}
export declare class SignupResponse {
    id: string;
    username: string;
    password: string;
    email: string;
    updatedAt: string;
    createdAt: string;
}
