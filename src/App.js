import './App.css';
import React from 'react';
import {BrowserRouter, Navigate, Route, Routes} from "react-router-dom";
import HomePageWith from './components/homepage_withaccess'

const App = () => {

    return (
        <BrowserRouter>
            <Routes>
                <Route
                    exact path={"/homepage"}
                    element={<HomePageWith/>}
                />
            </Routes>
        </BrowserRouter>
    );
}

export default App;
