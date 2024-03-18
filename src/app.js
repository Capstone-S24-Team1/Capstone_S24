import './app.css';
import React from 'react';
import {BrowserRouter, Navigate, Route, Routes} from "react-router-dom";
import Menubar from './components/menubar';

const App = () => {

    return (
        <BrowserRouter>
            <Routes>
                <Route
                    exact path={"/menubar"}
                    element={<Menubar/>}
                />
            </Routes>
        </BrowserRouter>
    );
}

export default App;
