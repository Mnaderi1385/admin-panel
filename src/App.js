import React, { useEffect, useState } from 'react';
import { BrowserRouter } from 'react-router-dom';
import Swal from 'sweetalert2';
import './app.css'
import Content from './Components/Content/Content';
import Nav from './Components/Nav/Nav';
import SideBar from './Components/SideBar/SideBar.jsx';
import { MainContext } from './Context/MainContext';

const App = () => {
    // State For Show or hide SideBar
    const [showSidebar, setShowSidebar] = useState(false);
    const [showDrowdown, setShowDrowdown] = useState(false);
    // State For Check Net
    const [isConnect, setIsConnect] = useState(true);

    useEffect(() => {
        if(window.innerWidth > 1080) setShowSidebar(true);
        window.addEventListener('resize', () => {
            // Close SideBar When Resize Page
            setShowSidebar(false);
            // Close Drowdown When Resize Page
            setShowDrowdown(false);
        });

        
        // Check The Net
        if(!navigator.onLine) {
            // Show Alert error
            Swal.fire({
                icon: 'error',
                title: 'قطع اتصال !!!',
                text: 'لطفا از اتصال به اینترنت مطمئن شوید',
                confirmButtonText: 'باشه',
                background: document.documentElement.classList.contains('dark') ? '#0f172a' : '#fff',
            });
            setIsConnect(false);
            navigator.vibrate(700);
        };
        window.addEventListener('offline', () => {
            // Show Alert error
            Swal.fire({
                icon: 'error',
                title: 'قطع اتصال !!!',
                text: 'لطفا از اتصال به اینترنت مطمئن شوید',
                confirmButtonText: 'باشه',
                background: document.documentElement.classList.contains('dark') ? '#0f172a' : '#fff',
            });
            setIsConnect(false);
            navigator.vibrate(700);
        });

        window.addEventListener('online', () => {
            // Show Alert success
            Swal.fire({
                icon: 'success',
                title: 'اتصال به اینترنت با موفقیت انجام شد',
                confirmButtonText: 'باشه',
                background: document.documentElement.classList.contains('dark') ? '#0f172a' : '#fff',
            });
            setIsConnect(true);
        });

        
    }, []);

    return (
        <MainContext.Provider value={{showSidebar, setShowSidebar, showDrowdown, setShowDrowdown, isConnect,}}>
            <div className={`w-full h-full bg-gray-900/40 fixed top-0 right-0 z-30 ${showSidebar ? 'lg:hidden' : 'hidden'}`} onClick={() => {
                if(window.innerWidth < 1080) setShowSidebar(false);
                setShowDrowdown(false);
            }}></div>
            <Nav />
            <section className="flex">
                <BrowserRouter>
                    <SideBar />

                    <Content />
                </BrowserRouter>
            </section>
        </MainContext.Provider>
    );
};

export default App;