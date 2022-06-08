import React from 'react';
import { Bar, Line } from "react-chartjs-2";
import Chart from 'chart.js/auto';
import { CategoryScale } from 'chart.js'; 


const Home = () => {
    const data = {
        defaultFontFamily: "Vazir",
        labels: ['مرداد', 'شهریور', 'مهر', 'آبان', 'آذر', 'دی', 'بهمن', 'اسفند'],
        responsive: true,
        datasets: [
            {
                label: "1400",
                data: [10, 20, 33, 66, 87],
                fill: false,
                backgroundColor: "#888",
                borderColor: "#03a9f4"
            },
            {
                label: "1399",
                data: [4, 20, 50, 70, 99],
                fill: false,
                borderColor: "#ff9800",
                backgroundColor: "#555",
            },
        ],
    };

    return (
        <>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-3 pt-10 pb-16">
                <div className="bg-gradient-to-r from-sky-500 to-blue-700 rounded-md shadow-xl hover:shadow-2xl p-6 flex justify-between items-center min-h-[8rem]">
                    <div className="">
                        <h4 className="text-base sm:text-lg text-white font-semibold">تعداد کاربران</h4>
                        <span className="text-xs text-slate-200 mt-4 block">1024</span>
                    </div>

                    <div className="">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 stroke-slate-200 stroke-slate-700 bg-slate-200 rounded-full p-1" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                            <path strokeLinecap="round" strokeLinejoin="round" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                        </svg>
                    </div>
                </div>

                <div className="bg-gradient-to-r from-red-600 to-red-800 rounded-md shadow-xl hover:shadow-2xl p-6 flex justify-between items-center min-h-[8rem]">
                    <div className="">
                        <h4 className="text-base sm:text-lg text-white font-semibold">درآمد امروز</h4>
                        <span className="text-xs text-slate-200 mt-4 block">1/500/000</span>
                    </div>

                    <div className="">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 stroke-slate-200 fill-slate-700 bg-slate-200 rounded-full p-1" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                            <path strokeLinecap="round" strokeLinejoin="round" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>

                    </div>
                </div>

                <div className="bg-gradient-to-r from-green-600 to-green-800 rounded-md shadow-xl hover:shadow-2xl p-6 flex justify-between items-center min-h-[8rem]">
                    <div className="">
                        <h4 className="text-base sm:text-lg text-white font-semibold">تعداد نظرات</h4>
                        <span className="text-xs text-slate-200 mt-4 block">988</span>
                    </div>

                    <div className="">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 stroke-slate-200 fill-slate-700 bg-slate-200 rounded-full p-1" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                            <path strokeLinecap="round" strokeLinejoin="round" d="M7 8h10M7 12h4m1 8l-4-4H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-3l-4 4z" />
                        </svg>

                    </div>
                </div>

                <div className="bg-gradient-to-r from-yellow-500 to-amber-600 rounded-md shadow-xl hover:shadow-2xl p-6 flex justify-between items-center min-h-[8rem]">
                    <div className="">
                        <h4 className="text-base sm:text-lg text-white font-semibold">تعداد دوره ها</h4>
                        <span className="text-xs text-slate-200 mt-4 block">6</span>
                    </div>

                    <div className="">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 stroke-slate-200 fill-slate-700 bg-slate-200 rounded-full p-1" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                            <path strokeLinecap="round" strokeLinejoin="round" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                        </svg>

                    </div>
                </div>
            </div>

            <div className="grid lg:grid-cols-2 gap-5 pb-10">
                <div className="w-full bg-white dark:bg-slate-700 shadow-2xl rounded-md" >
                    <div className="bg-gradient-to-tr from-pink-500 to-pink-700 text-white text-center font-bold shadow-xl p-4 w-full rounded-md -translate-y-6">آمار سود</div>
                    <Line data={data} width={'100%'} height={80} />
                </div>

                <div className="w-full bg-white dark:bg-slate-700 shadow-2xl rounded-md mt-5 md:mt-0" >
                    <div className="bg-gradient-to-r from-sky-500 to-blue-800  text-white text-center font-bold shadow-xl p-4 w-full rounded-md -translate-y-6">آمار فروش</div>
                    <Bar data={data} width={'100%'} height={80} />
                </div>
            </div>
        </>
    );
};


export default Home;