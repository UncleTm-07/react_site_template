import React, {useContext, useEffect} from "react";
import {Route, Routes} from "react-router-dom";
import {RouterNames} from "../shared/enums/RouterName";
import ProtectedRoute from "./ProtectedRoute";
import {observer} from "mobx-react-lite";
import {AuthContext} from "../index";

const Routing = () => {
    const {userStore} = useContext(AuthContext)

    useEffect(() => {
        if (!userStore.isAuth) {
            userStore.refresh()
        }
    }, [userStore]);


    return (
        <Routes>
            <Route element={<ProtectedRoute isAuth={userStore.isAuth} isLoading={userStore.isLoading}/>}>
                /*  This must be Route  */
            </Route>

            {/*<Route path={RouterNames.LOGIN} element={<LoginPage/>}/>*/}
            {/*<Route path={RouterNames.REGISTER} element={<RegisterPage/>}/>*/}
            {/*<Route path={RouterNames.SERVERERROR} element={<ServerErrorPage/>}/>*/}
            {/*<Route path={RouterNames.NOTFOUNDPAGE} element={<NotFoundErrorPage/>}/>*/}
            {/*<Route path={RouterNames.FORBIDDENPAGE} element={<ForbiddenPage/>}/>*/}
        </Routes>
    );
};

export default observer(Routing)
