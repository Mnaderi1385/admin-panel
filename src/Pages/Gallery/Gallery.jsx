import React, { useState } from 'react';
import Title from '../../Components/Title/Title';

const Gallery = () => {
    const [photos, setPhotos] = useState([
        {
            id: 1,
            url: 'https://images.unsplash.com/photo-1564865878688-9a244444042a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8Y29kZXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60',
            name: 'test Image',
        },
        {
            id: 2,
            url: 'https://images.unsplash.com/photo-1522252234503-e356532cafd5?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8N3x8Y29kZXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60',
            name: 'test Image',
        },
        {
            id: 3,
            url: 'https://images.unsplash.com/photo-1522252234503-e356532cafd5?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8N3x8Y29kZXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60',
            name: 'test Image',
        },
        {
            id: 4,
            url: 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8Y29kZXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60',
            name: 'test Image',
        },
        {
            id: 5,
            url: 'https://images.unsplash.com/photo-1566837945700-30057527ade0?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTR8fGNvZGV8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60',
            name: 'test Image',
        },
        {
            id: 6,
            url: 'https://images.unsplash.com/photo-1566837945700-30057527ade0?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTR8fGNvZGV8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60',
            name: 'test Image',
        },
        {
            id: 7,
            url: 'https://images.unsplash.com/photo-1603468620905-8de7d86b781e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTh8fGNvZGV8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60',
            name: 'test Image',
        },
        {
            id: 8,
            url: 'https://images.unsplash.com/photo-1537884944318-390069bb8665?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTJ8fGNvZGV8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60',
            name: 'test Image',
        },
        {
            id: 9,
            url: 'https://images.unsplash.com/photo-1603468620905-8de7d86b781e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTh8fGNvZGV8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60',
            name: 'test Image',
        },
        {
            id: 10,
            url: 'https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTB8fGNvZGV8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60',
            name: 'test Image',
        },
    ]);

    return (
        <>
            <Title>گالری عکس</Title>
            <ul className="grid md:grid-cols-2 lg:grid-cols-4 my-10">

                {
                    photos.map((photo) => (
                        <li id="card" className="rounded-lg relative duration-500" key={photo.id}>
                            <figure className="duration-500">
                                <img src={photo.url} className="w-full h-48 max-w-full" alt="Image" />
                                <figcaption className="scale-0 duration-500 absolute bottom-0 top-1/2 w-full text-center block text-base text-white font-bold p-4 z-50">{ photo.name }</figcaption> 
                            </figure>
                            <div id="overlay" className="w-full h-full bg-gray-700/75 duration-500 absolute top-0 rounded-sm hidden"></div>
                        </li>
                    ))
                }
            </ul>
                
        </>
    );
};

export default Gallery;