import React, {createContext} from 'react';
import ReactDOM from 'react-dom/client';
import App from "./app"
import UserStore from "./entites/user/store/userStore";

interface AuthState {
    userStore: UserStore
}

const root = ReactDOM.createRoot(
    document.getElementById('root') as HTMLElement
);

const userStore = new UserStore()

export const AuthContext = createContext<AuthState>({
    userStore: userStore,
})



root.render(
    <AuthContext.Provider value={{userStore: userStore}}>
        <App />
    </AuthContext.Provider>
);

