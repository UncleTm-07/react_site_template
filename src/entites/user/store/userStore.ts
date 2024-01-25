import {makeAutoObservable} from "mobx";
import AuthService from "../utils/AuthService";
import {$host} from "../../../app/api";
import {AuthResponse} from "../model/response/AuthResponse";
import {UserProfileResponse} from "../model/response/UserResponse";
import UserService from "../utils/UserService";
import {errorHandler} from "../../errorHandler";
// import {AxiosError} from "axios/index";

export default class UserStore {
    isAuth = false
    isLoading = true
    user: UserProfileResponse = {} as UserProfileResponse

    constructor() {
        makeAutoObservable(this)
    }

    setAuth(bool: boolean) {
        this.isAuth = bool
    }

    setIsLoading(bool: boolean) {
        this.isLoading = bool
    }

    setUser(user: UserProfileResponse) {
        this.user = user
    }


    async login(email: string, password: string) {
        try {
            this.setIsLoading(true)
            const response = await AuthService.login(email, password)

            localStorage.setItem("token", response.data.accessToken)
            this.setAuth(true)
            await this.getUserProfile()
            return response
        } catch (error) {
            throw error
        } finally {
            this.setIsLoading(false)
        }
    }

    async register(firstName: string, lastName: string, email: string, password: string) {
        try {
            this.setIsLoading(true)
            await AuthService.register(firstName, lastName, email, password)
            return await this.login(email, password)
        } catch (error) {
            throw error
        } finally {
            this.setIsLoading(false)
        }
    }

    async logout() {
        try {
            this.setIsLoading(true)
            await AuthService.logout()
            localStorage.removeItem("token")
            this.setAuth(false)
        } catch (error) {
            throw error
        } finally {
            this.setIsLoading(false)
        }
    }

    async refresh() {
        try {
            this.setIsLoading(true)
            const response =
                await $host.post<AuthResponse>(`/auth/refresh-token`)

            localStorage.setItem("token", response.data.accessToken)
            this.setAuth(true)
            await this.getUserProfile()
        } catch (error) {
            console.log(error)
        } finally {
            this.setIsLoading(false)
        }
    }
    async getUserProfile() {
        this.setIsLoading(true)
        try {
            const response = await UserService.getProfile()
            this.setUser(response.data)
        } catch (e) {
            // errorHandler(e as AxiosError)
        } finally {
            this.setIsLoading(false)
        }

    }
}
