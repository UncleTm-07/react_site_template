import {$host} from "../../../app/api";
import {AxiosResponse} from "axios";
import {AuthResponse, RegisterAuthResponse} from "../model/response/AuthResponse";

export default class AuthService {
    static async login(email: string, password: string): Promise<AxiosResponse<AuthResponse>> {
        return $host.post<AuthResponse>("/auth/authenticate", {email, password})
    }

    static async register(firstName: string, lastName: string, email: string, password: string): Promise<AxiosResponse<RegisterAuthResponse>> {
        return $host.post<RegisterAuthResponse>("/auth/register", {email, password, firstName, lastName})
    }

    static async logout(): Promise<void> {
        return $host.post("/auth/logout")
    }

}
