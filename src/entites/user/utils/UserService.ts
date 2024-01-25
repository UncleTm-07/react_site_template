import {AxiosResponse} from "axios";
import {UserProfileResponse} from "../model/response/UserResponse";
import {$host} from "../../../app/api";

export default class UserService {
    static async getProfile(): Promise<AxiosResponse<UserProfileResponse>> {
        return $host.get<UserProfileResponse>("/users/profile")
    }
}
