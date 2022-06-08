import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';
import Loading from '../../Components/Loading/Loading';
import Title from '../../Components/Title/Title';
import { deletePostsService, getPostsService } from '../../Services/PostServices';

const Posts = () => {
    const [posts, setPosts] = useState([]);
    const [mainPosts, setMainPosts] = useState([]);
    const navigate = useNavigate();


    useEffect(() => {
        // Get User From API
        getPostsService(setPosts, setMainPosts);
    }, []);

    const handleDeletePost = (id) => {
        Swal.fire({
            icon: 'question',
            title: 'حذف !!',
            text: 'آیا از انجام عملیات اطمینان دارید ؟',
            showLoaderOnConfirm: true,
            confirmButtonText: 'حذف',
            cancelButtonText: 'بستن',
            showCancelButton: true,
            background: document.documentElement.classList.contains('dark') ? '#0f172a' : '#fff',
        }).then((result) => {
            if (result.isConfirmed) {
                deletePostsService(posts, setPosts, id);
            };
        })
    };


    const handleSearchPost = (e) => {
        setPosts( mainPosts.filter((post) => post.title.includes(e.target.value)))
    }

    return (
        <>
            <Title>پست ها</Title>
            <div className="flex flex-col md:flex-row justify-between items-center w-full">
                <form action="#" className="w-full md:w-2/5">
                    <input type="search" placeholder="جستجو ..." className="bg-white dark:bg-slate-700 dark:text-white shadow-xl p-3 rounded-md outline-none text-xs w-full focus:ring-2 ring-indigo-600 focus:border-transparent" onChange={handleSearchPost} />
                </form>

                <div className="w-full md:w-auto mt-4 md:mt-0">
                    <button className="flex justify-center text-xs shadow-xl bg-white dark:bg-slate-700 dark:text-white text-indigo-700 text-center px-4 py-2 rounded-md w-full hover:-translate-y-1 duration-300" title="نوشتن پست جدید" onClick={() => navigate('/posts/add')}>
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                            <path strokeLinecap="round" strokeLinejoin="round" d="M9 13h6m-3-3v6m5 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                        </svg>
                    </button>
                </div>
            </div>

            

            <div className="my-10">
                {
                    (posts.length > 0) ? (
                        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-3">
                            {
                                posts.map((post) => (
                                    <div className="bg-white dark:bg-slate-700 p-3 rounded-md relative shadow-xl duration-300 hover:-translate-y-1" key={post.id}>
                                        <h4 className="text-sm font-semibold text-slate-700 dark:text-white">{ post.title }</h4>
                                        <p className="text-xs text-slate-600 dark:text-slate-200 h-[100px] overflow-y-auto my-3">{ post.body.slice(40) + '...' }</p>
                                        <div className="flex flex-row-reverse items-center justify-center mb-3 absolute bottom-0">
                                            {/* Delete Button */}
                                            <button title="حذف پست" type="button" className="text-red-500 ml-1" onClick={() => handleDeletePost(post.id)}>
                                                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                                                    <path strokeLinecap="round" strokeLinejoin="round" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                                                </svg>
                                            </button>
                                            {/* Edite Button */}
                                            <button title="ویرایش پست" type="button" className="text-green-500 ml-1" onClick={() => navigate(`/posts/add/${post.id}`)}>
                                                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                                                    <path strokeLinecap="round" strokeLinejoin="round" d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
                                                </svg>
                                            </button>
                                            {/* Comment Button */}
                                            <button title="نظرات پست" type="button" className="text-indigo-500 ml-1" onClick={() => navigate(`/posts/comment/${post.id}`)}>
                                                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                                                    <path strokeLinecap="round" strokeLinejoin="round" d="M7 8h10M7 12h4m1 8l-4-4H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-3l-4 4z" />
                                                </svg>
                                            </button>
                                        </div>
                                    </div>
                                ))
                            }
                        </div>
                    ) : (
                        <div className="flex justify-center">
                            <Loading />
                        </div>
                    )
                }

            </div>

        </>
    );
};

export default Posts;