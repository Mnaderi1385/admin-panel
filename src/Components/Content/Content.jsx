import React, { useContext } from 'react';
import { Route, Routes } from 'react-router-dom';
import { MainContext } from '../../Context/MainContext';
import Posts from '../../Pages/Posts/Posts';
import AddUser from '../../Pages/Users/AddUser';
import AddPost from '../../Pages/Posts/AddPost';
import Users from '../../Pages/Users/Users';
import CommentPosts from '../../Pages/Posts/CommentPosts';
import Gallery from '../../Pages/Gallery/Gallery';
import Home from '../../Pages/Home/Home';
import NotFound from '../../Pages/NotFound/NotFound';

const Content = () => {
    const { showSidebar, setShowSidebar, setShowDrowdown } = useContext(MainContext);

    return (
        <>
            <main className={`${showSidebar ? 'lg:mr-72' : ''} duration-300 px-5 w-full`} onClick={() => {
                setShowDrowdown(false)
                if(window.innerWidth < 1080) setShowSidebar(false);
            }}>
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/users" element={<Users />} />
                    <Route path="/users/add" element={<AddUser />}>
                        <Route path=":userId" />
                    </Route>
                    <Route path="/posts" element={<Posts />} />
                    <Route path="/posts/comment/:postId" element={<CommentPosts />} />
                    <Route path="/posts/add" element={<AddPost />}>
                        <Route path=":postId" />
                    </Route>
                    <Route path="/gallery" element={<Gallery />} />
                    <Route path="*" element={<NotFound />} />
                </Routes>
            </main>
        </>
    );
};

export default Content;