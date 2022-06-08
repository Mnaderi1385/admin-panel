import React, { useContext } from 'react';
import { MainContext } from '../../Context/MainContext';
import useDarkMode from '../../DarkMode/useDarkMode';


const Nav = () => {
    const { showSidebar, setShowSidebar, isConnect } = useContext(MainContext);
    const [colorTheme, setTheme] = useDarkMode();


    // Handle Show or Hide SideBar When Click
    const handleShowSidebar = () => {
        setShowSidebar(!showSidebar);
    };
    
    return (
        <nav className={`${showSidebar ? 'lg:pr-72' : ''} duration-300 flex justify-between items-center border-b px-10 bg-white dark:bg-slate-800 border-b-slate-200 dark:border-b-slate-700 py-5 z-20 sticky top-0`}>
            <div className="rightNav flex items-center">
                <h1 className="text-sm sm:text-base font-semibold text-slate-700 dark:text-slate-100">وبسایت آموزشی کدیاد</h1>
                
                <button onClick={handleShowSidebar} type="button" className="mr-5 text-indigo-600 hover:text-indigo-800">
                    <svg className="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h7"></path>
                    </svg>
                </button>
            </div>

            <div className="leftNav flex items-center">
                <button type="button" onClick={() => setTheme(colorTheme)} className="ml-2">
                    {
                        colorTheme === 'light' ? (
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 stroke-yellow-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                                <path strokeLinecap="round" strokeLinejoin="round" d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
                            </svg>
                        ) : (
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 stroke-slate-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                                <path strokeLinecap="round" strokeLinejoin="round" d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
                            </svg>
                        )
                    }
                </button>

                <div title={isConnect ? 'اتصال برقرار است' : 'اتصال قطع است'}>
                    {
                        (isConnect) ? (
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-7 stroke-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                                <path strokeLinecap="round" strokeLinejoin="round" d="M5.636 18.364a9 9 0 010-12.728m12.728 0a9 9 0 010 12.728m-9.9-2.829a5 5 0 010-7.07m7.072 0a5 5 0 010 7.07M13 12a1 1 0 11-2 0 1 1 0 012 0z" />
                            </svg>
                        ) : (
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-7 stroke-red-500 animate-bounce" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                                <path strokeLinecap="round" strokeLinejoin="round" d="M18.364 5.636a9 9 0 010 12.728m0 0l-2.829-2.829m2.829 2.829L21 21M15.536 8.464a5 5 0 010 7.072m0 0l-2.829-2.829m-4.243 2.829a4.978 4.978 0 01-1.414-2.83m-1.414 5.658a9 9 0 01-2.167-9.238m7.824 2.167a1 1 0 111.414 1.414m-1.414-1.414L3 3m8.293 8.293l1.414 1.414" />
                            </svg>
                        )
                    }
                </div>
            </div>
        </nav>
    );
};

export default Nav;