import React, {useContext} from 'react';
import './index.scss';
import {withProviders} from "./providers";
import Routing from "../pages";
import {observer} from "mobx-react-lite";
import {AuthContext} from "../index";
// import LoadingWindow from "../widgets/LoadingWindow/LoadingWindow";

const App = () => {
    const {userStore} = useContext(AuthContext)

    return (
        <>
            {/*<Header/>*/}
            <Routing/>
            {/*<LoadingWindow isLoading={userStore.isLoading}/>*/}
        </>
    )
}

export default observer(withProviders(App))
