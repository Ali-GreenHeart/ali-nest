export interface UserSignIn {
    email: string;
    password: string;
}

export interface UserSignInResponse {
    token: string;
    message: string;
}
export interface UserSignUpResponse {
    message: string;
}
