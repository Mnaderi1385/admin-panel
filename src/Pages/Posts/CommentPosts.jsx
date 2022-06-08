import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Title from '../../Components/Title/Title';
import { jpAxios } from '../../ConfigAxios/JpAxios';
import Loading from '../../Components/Loading/Loading';



const CommentPosts = () => {
    const [comments, setComments] = useState([]);
    const { postId } = useParams();

    useEffect(() => {
        jpAxios.get(`/comments?postId=${postId}`)
            .then((res) => {
                setComments(res.data);
            })
    }, []);

    return (
        <>
            <Title>نظرات</Title>
            {
                (comments.length > 0) ? (
                    <div className="grid md:grid-cols-2 gap-4">
                        {
                            comments.map((comment) => (
                                <div className="bg-white dark:bg-slate-700 p-3 shadow-xl rounded-lg duration-300 hover:-translate-y-1">
                                    <span className="rounded-full w-8 h-8 bg-indigo-600 text-white text-xs font-semibold mb-3 flex justify-center items-center">{ comment.id }</span>
                                    <h4 className="text-slate-700 dark:text-white font-semibold text-sm">{ comment.name }</h4>
                                    <p className="text-xs text-slate-600 dark:text-slate-300 font-medium mt-5">{ comment.body }</p>
                                </div>
                            ))
                        }
                    </div>
                ) : (
                    <div className="flex justify-center mt-10">
                        <Loading />
                    </div>
                )
            }
        </>
    );
};

export default CommentPosts;