import React, { useContext } from 'react';
import { NavLink } from 'react-router-dom';
import { MainContext } from '../../Context/MainContext';
import Profile from './images/profile.png';
const SideBar = () => {
    const { showSidebar, setShowSidebar, showDrowdown, setShowDrowdown } = useContext(MainContext);


    const activeClass = ({ isActive }) => {
        if(isActive) return 'flex px-4 py-3 group items-center font-medium text-xs text-slate-600 rounded-lg dark:bg-slate-900 dark:from-transparent dark:to-transparent bg-gradient-to-r from-sky-600 to-blue-500 text-white';
        return 'flex px-4 py-3 group items-center font-medium text-xs text-slate-600 hover:bg-slate-100 dark:hover:bg-slate-700 dark:text-white rounded-lg';
    };

    
    return (
        <aside className={`fixed ${showSidebar ? 'right-0 opacity-100' : '-right-96 opacity-0'} top-0 duration-300 z-40 min-h-screen bg-white dark:bg-slate-800 shadow-2xl shadow-slate-200 dark:shadow-slate-700 border-l border-l-slate-300 dark:border-l-slate-700 w-64`}>
            <div className="overflow-y-auto h-screen">

                <div className="mx-auto text-center flex flex-col items-center mt-5">
                    <button type="button" className="relative cursor-pointer rounded-md flex items-center" onClick={() => setShowDrowdown(!showDrowdown)}>
                        <img src={Profile} className="max-w-full w-14 rounded-full shadow-xl shadow-slate-400 dark:shadow-slate-900" alt="Profile" />
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-1 fill-slate-600 dark:fill-slate-200" viewBox="0 0 20 20" fill="currentColor">
                            <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
                        </svg>
                    </button>

                    
                    <ul className={`bg-slate-100 dark:bg-slate-700 font-semibold shadow-xl w-3/4 rounded-md mt-5 transition-all duration-700 absolute ${showDrowdown ? 'opacity-100 top-16' : 'opacity-0 -top-80'}`}>
                        <li className="w-full hover:bg-slate-300 dark:hover:bg-gray-900 rounded-md">
                            <a href="#" className="w-full text-sky-600 dark:text-white p-3 text-right block text-xs ">پروفایل</a>
                        </li>

                        <li className="w-full hover:bg-slate-300 dark:hover:bg-gray-900 rounded-md">
                            <a href="#" className="w-full text-sky-600 dark:text-white p-3 text-right block text-xs ">خروج</a>
                        </li>
                    </ul>
                </div>

                <ul id="sideBarMenu" className="mt-5 overflow-y-auto mb-10 duration-300">
                    <li className="px-1 mt-3 duration-200">
                        <NavLink to="/" className={activeClass} onClick={() => setShowSidebar(false)}>
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                                <path strokeLinecap="round" strokeLinejoin="round" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
                            </svg>
                            <span>صفحه اصلی</span>
                        </NavLink>
                    </li>

                    <li className="px-1 mt-3 duration-200">
                        <NavLink to="/users" className={activeClass} onClick={() => setShowSidebar(false)}>
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                                <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
                            </svg>
                            <span>کاربر ها</span>
                        </NavLink>
                    </li>

                    <li className="px-1 mt-3 duration-200">
                        <NavLink to="/gallery" className={activeClass} onClick={() => setShowSidebar(false)}>
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                                <path strokeLinecap="round" strokeLinejoin="round" d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                            </svg>
                            <span>گالری</span>
                        </NavLink>
                    </li>

                    <li className="px-1 mt-3 duration-200">
                        <NavLink to="/posts" className={activeClass} onClick={() => setShowSidebar(false)}>
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                                <path strokeLinecap="round" strokeLinejoin="round" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01" />
                            </svg>
                            <span>پست ها</span>
                        </NavLink>
                    </li>
                </ul>
            </div>
        </aside>
    );
};

export default SideBar;