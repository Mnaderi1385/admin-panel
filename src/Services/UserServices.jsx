import Swal from 'sweetalert2';
import { jpAxios } from '../ConfigAxios/JpAxios';

export const addUserService = (data) => {
    jpAxios.post('/users', data)
        .then((res) => {
            // console.log(res)
            if(res.status === 201 || res.status === 200) {
                Swal.fire({
                    icon: 'success',
                    title: 'کاربر با موفقیت ایجاد شد',
                    confirmButtonText: 'باشه !',
                    background: document.documentElement.classList.contains('dark') ? '#0f172a' : '#fff',
                });
            }
        }).catch((err) => {
            Swal.fire({
                icon: 'error',
                title: 'خطا !',
                text: 'مشکلی پیش اومده لطفا دوباره تلاش کنید',
                confirmButtonText: 'باشه !',
                background: document.documentElement.classList.contains('dark') ? '#0f172a' : '#fff',
            });
        });
};
export const updateUserService = (data, userId) => {
    jpAxios.put(`/users/${userId}`, data)
        .then((res) => {
            console.log(res);
            if(res.status === 201 || res.status === 200) {
                Swal.fire({
                    icon: 'success',
                    title: 'اطلاعات کاربر با موفقیت ویرایش شد',
                    confirmButtonText: 'باشه !',
                    background: document.documentElement.classList.contains('dark') ? '#0f172a' : '#fff',
                });
            }
        }).catch((err) => {
            Swal.fire({
                icon: 'error',
                title: 'خطا !',
                text: 'مشکلی پیش اومده لطفا دوباره تلاش کنید',
                confirmButtonText: 'باشه !',
                background: document.documentElement.classList.contains('dark') ? '#0f172a' : '#fff',
            });
        });
};

export const deleteUserService = (id, setUsers, users) => {
    jpAxios.delete(`/users/${id}`)
        .then((res) => {
            if(res.status === 200) {
                let newUsers = users.filter((user) => user.id !== id);
                setUsers(newUsers);
                Swal.fire({
                    icon: 'success',
                    title: 'کاربر مورد نظر با موفقیت حذف شد',
                    confirmButtonText: 'باشه !',
                    background: document.documentElement.classList.contains('dark') ? '#0f172a' : '#fff',
                });
            };
        });
};

export const getUserService = (setUsers, setMainUsers) => {
    // Get Users From API
    jpAxios.get('/users')
    .then((res) => {
        setUsers(res.data);
        setMainUsers(res.data);
    });
};

export const setDataInput = (userId, setData) => {
    jpAxios.get(`/users/${userId}`)
        .then((res) => {
            setData({
                name : res.data.name,
                userName : res.data.username,
                email : res.data.email,
                address: {
                    city: res.data.address.city,
                },
            });
        });
};