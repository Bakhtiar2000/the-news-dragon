import React from 'react';
import Header from '../Pages/Shared/Header/Header';
import { Outlet } from 'react-router-dom';
import Footer from '../Pages/Shared/Footer/Footer';

const Main = () => {
    return (
        <div>
            <Header></Header>
            <Footer></Footer>
            {/* <Outlet></Outlet> */}
        </div>
    );
};

export default Main;