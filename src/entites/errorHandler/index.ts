import {AxiosError} from "axios";
import {RouterNames} from "../../shared/enums/RouterName";

export const errorHandler = (e: AxiosError) => {
    if(e.code === "ERR_NETWORK") {
        window.location.href = RouterNames.SERVERERROR
        return true
    }

    if(!e.request.status) {
        return true
    }

    if(e.request.status === 403) {
        window.location.href = RouterNames.FORBIDDENPAGE
        return true
    }

    if(e.request.status === 404) {
        window.location.href = RouterNames.NOTFOUNDPAGE
        return true
    }


    return false
}
