import Swal from "sweetalert2";
import { jpAxios } from "../ConfigAxios/JpAxios";

export const getPostsService = (setPosts, setMainPosts) => {
    jpAxios.get('/posts')
        .then((res) => {
            setPosts(res.data);
            setMainPosts(res.data);
        }).catch((err) => {
            Swal.fire({
                icon: 'error',
                title: 'خطا !!!',
                text: 'مشکلی پیش اومده!! لطفا دوباره تلاش کنید',
                confirmButtonText: 'باشه',
                background: document.documentElement.classList.contains('dark') ? '#0f172a' : '#fff',
            });
        });
}

export const deletePostsService = (posts, setPosts, id) => {
    jpAxios.delete(`/posts/${id}`)
        .then((res) => {
            let newPosts = posts.filter((post) => post.id !== id)
            setPosts(newPosts);
            Swal.fire({
                icon: 'success',
                title: 'عملیات با موفقیت انجام شد',
                confirmButtonText: 'باشه',
                background: document.documentElement.classList.contains('dark') ? '#0f172a' : '#fff',
            });
        });
};

export const addPostService = (data) => {
    jpAxios.post('/posts', data)
        .then((res) => {
            if(res.status === 200 || res.status === 201) {
                Swal.fire({
                    icon: 'success',
                    title: 'پست با موفقیت ایجاد شد',
                    confirmButtonText: 'باشه',
                    background: document.documentElement.classList.contains('dark') ? '#0f172a' : '#fff',
                })
            };
        });
};

export const editePost = (postId, data) => {
    jpAxios.put(`/posts/${postId}`, data)
        .then((res) => {
            if(res.status === 200 || res.status === 201) {
                console.log(res);
                Swal.fire({
                    icon: 'success',
                    title: 'پست با موفقیت ویرایش شد',
                    confirmButtonText: 'باشه',
                    background: document.documentElement.classList.contains('dark') ? '#0f172a' : '#fff',
                });
            };
        });
};

export const setPostInput = (postId, data, setData) => {
    jpAxios.get(`/posts/${postId}`)
        .then((res) => {
            setData({
                title: res.data.title,
                body: res.data.body,
            });
        });
};