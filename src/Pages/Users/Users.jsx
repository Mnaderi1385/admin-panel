import React, { useEffect, useRef, useState } from 'react';
import Swal from 'sweetalert2';
import { useNavigate } from 'react-router-dom';
import Loading from '../../Components/Loading/Loading';
import { deleteUserService, getUserService } from '../../Services/UserServices.jsx'
import Title from '../../Components/Title/Title';


const Users = () => {
    // Array Users
    const [users, setUsers] = useState([]);
    const [mainUsers, setMainUsers] = useState([]);
    const navigate = useNavigate();
    const searchInput = useRef();
    
    useEffect(() => {
        searchInput.current.focus();

        // Get Users From API
        getUserService(setUsers, setMainUsers);
    }, []);

    // Handle Delete User
    const handleDeleteUser = (id) => {
        Swal.fire({
            icon: 'warning',
            title: 'حذف !!!',
            text: 'آیا از حذف کاربر مطمئن هستید ؟',
            showCancelButton: true,
            confirmButtonText: 'حذف !',
            cancelButtonText: 'بستن',
            background: document.documentElement.classList.contains('dark') ? '#0f172a' : '#fff',
        }).then((result) => {
            if (result.isConfirmed) {
                deleteUserService(id, setUsers, users);
            };
        })
    };

    const handleSearchUser = (e) => {
        setUsers(
            mainUsers.filter((user) => user.name.includes(e.target.value))
        );
    };

    return (
        <>
            <Title>مدیریت کاربران</Title>
            <div className="flex flex-col md:flex-row justify-between items-center w-full">
                <form action="#" className="w-full md:w-2/5">
                    <input type="search" placeholder="جستجو ..." className="bg-white dark:bg-slate-700 dark:text-white shadow-xl p-3 rounded-md outline-none text-xs w-full focus:ring-2 ring-indigo-600 focus:border-transparent" ref={searchInput} onChange={handleSearchUser} />
                </form>

                <div className="w-full md:w-auto mt-4 md:mt-0">
                    <button onClick={() => navigate('/users/add')} className="flex justify-center text-xs shadow-xl bg-white dark:bg-slate-700 text-indigo-700 dark:text-white text-center px-4 py-2 rounded-md w-full hover:-translate-y-1 duration-300" title="افزودن کاربر">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                            <path strokeLinecap="round" strokeLinejoin="round" d="M18 9v3m0 0v3m0-3h3m-3 0h-3m-2-5a4 4 0 11-8 0 4 4 0 018 0zM3 20a6 6 0 0112 0v1H3v-1z" />
                        </svg>
                    </button>
                </div>
            </div>

            <div className="overflow-auto my-10 rounded-md">
                {
                    (users.length > 0) ? (
                        <table className="w-full shadow-xl">
                            <thead className="border-b-2 border-b-slate-400 bg-slate-200 dark:bg-slate-900 dark:text-white dark:border-b-slate-800">
                                <tr>
                                    <th className="text-sm p-4">#</th>
                                    <th className="text-sm p-4">نام</th>
                                    <th className="text-sm p-4">نام کاربری</th>
                                    <th className="text-sm p-4">ایمیل</th>
                                    <th className="text-sm p-4">عملیات</th>
                                </tr>
                            </thead>

                            <tbody>
                                {
                                    // Show Users In Table
                                    users.map((user) => (
                                        <tr className="pt-3 hover:bg-slate-200 dark:bg-slate-700 dark:hover:bg-slate-800" key={user.id}>
                                            <td className="text-xs text-center border-b-2 border-b-slate-500 dark:border-b-slate-800 font-normal p-4 dark:text-gray-300">{ user.id }</td>
                                            <td className="text-xs text-center border-b-2 border-b-slate-500 dark:border-b-slate-800 font-normal p-4 dark:text-gray-300">{ user.name }</td>
                                            <td className="text-xs text-center border-b-2 border-b-slate-500 dark:border-b-slate-800 font-normal p-4 dark:text-gray-300">{ user.username }</td>
                                            <td className="text-xs text-center border-b-2 border-b-slate-500 dark:border-b-slate-800 font-normal p-4 dark:text-gray-300">{ user.email }</td>
                                            <td className="text-xs text-center border-b-2 border-b-slate-500 dark:border-b-slate-800 font-normal p-4 dark:text-gray-300">
                                                <div className="flex items-center justify-center">
                                                    {/* Delete Button */}
                                                    <button title="حذف کاربر" type="button" className="text-red-500 ml-2" onClick={() => handleDeleteUser(user.id)}>
                                                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                                                            <path strokeLinecap="round" strokeLinejoin="round" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                                                        </svg>
                                                    </button>
                                                    {/* Edite Button */}
                                                    <button title="ویرایش کاربر" type="button" className="text-green-500" onClick={() => navigate(`/users/add/${user.id}`)}>
                                                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                                                            <path strokeLinecap="round" strokeLinejoin="round" d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
                                                        </svg>
                                                    </button>
                                                </div>
                                            </td>
                                        </tr>
                                    ))
                                }
                            </tbody>
                        </table>
                    ) : (
                        <div className="mx-auto text-center flex justify-center overflow-hidden">
                            <Loading />
                        </div>
                    )
                }
                
            </div>
        </>
    );
};

export default Users;