import { FC } from "react";
import { Navigate, Outlet } from "react-router-dom";


interface IProtectedRoute {
    isAuth: boolean;
    redirectPath?: string;
    isLoading: boolean
}

const ProtectedRoute: FC<IProtectedRoute> = ({ isAuth, redirectPath = '/login', isLoading }) => {
    if (!isAuth && !isLoading) {
        return <Navigate to={redirectPath} replace />;
    }

    return <Outlet />;
};

export default ProtectedRoute;
