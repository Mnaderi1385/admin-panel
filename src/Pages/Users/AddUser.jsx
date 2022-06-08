import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import Loading from '../../Components/Loading/Loading';
import Title from '../../Components/Title/Title';
import { addUserService, updateUserService, setDataInput } from '../../Services/UserServices';

const AddUser = () => {
    const { userId } = useParams();
    const navigate = useNavigate();
    const [data, setData] = useState({
        name : '',
        userName : '',
        email : '',
        address: {
            city: '',
        },
    });

    useEffect(() => {
        // Set Data In inputs for Edite User
        setDataInput(userId, setData);
    }, []);


    const handleAddUser = (e) => {
        e.preventDefault();
        if(!userId) {
            addUserService(data);
        }else {
            updateUserService(data, userId);
        };
    };

    return (
        <>
            <Title>{ userId ? 'صفحه ویرایش کاربر' : 'صفحه افزودن کاربر' }</Title>
            <div className="flex justify-center items-center">
                <div className="max-w-3xl w-full mx-auto bg-white dark:bg-slate-700 p-5 mt-10 rounded-md shadow-2xl">
                    {
                        (userId) ? (
                            (data.name && data.userName && data.email && data.address.city) ? (
                                <form action="#" onSubmit={handleAddUser}>
                                    <div className="mb-4">
                                        <label className="text-xs md:text-sm font-medium dark:text-white" htmlFor="name">نام:</label>
                                        <input type="text" id="name" className="text-sm w-full block border p-2 shadow-sm bg-white dark:bg-slate-900 dark:text-white outline-none dark:border-none rounded-md dark:focus:ring-4 focus:ring-2 ring-indigo-600" value={data.name} onChange={(e) => setData({...data, name: e.target.value})} />
                                    </div>

                                    <div className="mb-4">
                                        <label className="text-xs md:text-sm font-medium dark:text-white" htmlFor="userName">نام کاربری:</label>
                                        <input type="text" id="userName" className="text-sm w-full block border p-2 shadow-sm bg-white dark:bg-slate-900 dark:text-white outline-none dark:border-none rounded-md dark:focus:ring-4 focus:ring-2 ring-indigo-600" value={data.userName} onChange={(e) => setData({...data, userName: e.target.value})} />
                                    </div>

                                    <div className="mb-4">
                                        <label className="text-xs md:text-sm font-medium dark:text-white" htmlFor="email">ایمیل:</label>
                                        <input type="email" id="email" className="text-sm w-full block border p-2 shadow-sm bg-white dark:bg-slate-900 dark:text-white outline-none dark:border-none rounded-md dark:focus:ring-4 focus:ring-2 ring-indigo-600" value={data.email} onChange={(e) => setData({...data, email: e.target.value})} />
                                    </div>

                                    <div className="mb-4">
                                        <label className="text-xs md:text-sm font-medium dark:text-white" htmlFor="city">شهر:</label>
                                        <input type="text" id="city" className="text-sm w-full block border p-2 shadow-sm bg-white dark:bg-slate-900 dark:text-white outline-none dark:border-none rounded-md dark:focus:ring-4 focus:ring-2 ring-indigo-600" value={data.address.city} onChange={(e) => setData({...data, address: {...data.address, city: e.target.value} })} />
                                    </div>

                                    <div className="flex justify-between md:justify-start items-center mt-10">
                                        <button type="submit" className="text-xs sm:text-sm bg-green-600 rounded-md py-3 px-5 text-white flex items-center ml-2 focus:ring-4 ring-green-500 select-none">
                                            {
                                                (userId) ? (
                                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                                                        <path strokeLinecap="round" strokeLinejoin="round" d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
                                                    </svg>
                                                ) : (
                                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-1" viewBox="0 0 20 20" fill="currentColor">
                                                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-11a1 1 0 10-2 0v2H7a1 1 0 100 2h2v2a1 1 0 102 0v-2h2a1 1 0 100-2h-2V7z" clipRule="evenodd" />
                                                    </svg>
                                                )
                                            }
                                            <span>{ userId ? 'ویرایش کاربر' : 'افزودن کاربر' }</span>
                                        </button>
                                        <button type="button" className="text-xs sm:text-sm bg-red-600 rounded-md py-3 px-5 text-white flex items-center focus:ring-4 ring-red-500 select-none" onClick={() => navigate(-1)}>
                                            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                                                <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                                            </svg>
                                            <span>بازگشت</span>
                                        </button>
                                    </div>
                                </form>
                            ) : (
                                <div className="flex justify-center">
                                    <Loading />
                                </div>
                            )
                        ) : (
                            <form action="#" onSubmit={handleAddUser}>
                                    <div className="mb-4">
                                        <label className="text-xs md:text-sm font-medium dark:text-white" htmlFor="name">نام:</label>
                                        <input type="text" id="name" className="text-sm w-full block border p-2 shadow-sm bg-white dark:bg-slate-900 dark:text-white outline-none dark:border-none rounded-md dark:focus:ring-4 focus:ring-2 ring-indigo-600" value={data.name} onChange={(e) => setData({...data, name: e.target.value})} />
                                    </div>

                                    <div className="mb-4">
                                        <label className="text-xs md:text-sm font-medium dark:text-white" htmlFor="userName">نام کاربری:</label>
                                        <input type="text" id="userName" className="text-sm w-full block border p-2 shadow-sm bg-white dark:bg-slate-900 dark:text-white outline-none dark:border-none rounded-md dark:focus:ring-4 focus:ring-2 ring-indigo-600" value={data.userName} onChange={(e) => setData({...data, userName: e.target.value})} />
                                    </div>

                                    <div className="mb-4">
                                        <label className="text-xs md:text-sm font-medium dark:text-white" htmlFor="email">ایمیل:</label>
                                        <input type="email" id="email" className="text-sm w-full block border p-2 shadow-sm bg-white dark:bg-slate-900 dark:text-white outline-none dark:border-none rounded-md dark:focus:ring-4 focus:ring-2 ring-indigo-600" value={data.email} onChange={(e) => setData({...data, email: e.target.value})} />
                                    </div>

                                    <div className="mb-4">
                                        <label className="text-xs md:text-sm font-medium dark:text-white" htmlFor="city">شهر:</label>
                                        <input type="text" id="city" className="text-sm w-full block border p-2 shadow-sm bg-white dark:bg-slate-900 dark:text-white outline-none dark:border-none rounded-md dark:focus:ring-4 focus:ring-2 ring-indigo-600" value={data.address.city} onChange={(e) => setData({...data, address: {...data.address, city: e.target.value} })} />
                                    </div>

                                    <div className="flex justify-between md:justify-start items-center mt-10">
                                        <button type="submit" className="text-xs sm:text-sm bg-green-600 rounded-md py-3 px-5 text-white flex items-center ml-2 focus:ring-4 ring-green-500 select-none">
                                            {
                                                (userId) ? (
                                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                                                        <path strokeLinecap="round" strokeLinejoin="round" d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
                                                    </svg>
                                                ) : (
                                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-1" viewBox="0 0 20 20" fill="currentColor">
                                                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-11a1 1 0 10-2 0v2H7a1 1 0 100 2h2v2a1 1 0 102 0v-2h2a1 1 0 100-2h-2V7z" clipRule="evenodd" />
                                                    </svg>
                                                )
                                            }
                                            <span>{ userId ? 'ویرایش کاربر' : 'افزودن کاربر' }</span>
                                        </button>
                                        <button type="button" className="text-xs sm:text-sm bg-red-600 rounded-md py-3 px-5 text-white flex items-center focus:ring-4 ring-red-500 select-none" onClick={() => navigate(-1)}>
                                            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                                                <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                                            </svg>
                                            <span>بازگشت</span>
                                        </button>
                                    </div>
                            </form>
                        )
                    }
                </div>
            </div>
        </>
    );
};

export default AddUser;