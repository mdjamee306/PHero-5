/* eslint-disable react/jsx-key */
import { useEffect } from "react";
import { useState } from "react";

const Courses = () => {
    const [courses, setCourses] = useState([]);
    useEffect(() => {
        fetch('./data.json')
            .then(res => res.json())
            .then(data => setCourses(data))
    }, [])
    return (
        <div className="container mx-auto ">
                {/* parent of courses */}
            <div className="grid grid-cols-3 gap-6 w-2/3 mb-20">
                {
                    courses.map((courses) => (
                        <div key={courses.id} className="shadow-2xl rounded p-4">
                            {/* child of course */}
                            <div className="">
                                {/* img div */}
                                <div><img className="w-full mt-4" src={courses.img} alt="" /></div>
                                <h3 className="my-4 text-xl font-semibold">{courses.title}</h3>
                                <p className="font-normal text-[#1C1B1B99] text-sm">{courses.description}</p>
                                <div className="flex mt-4">
                                    <p>$ price: {courses.price}</p>
                                    <p>$ credit: {courses.credit}</p>
                                </div>
                                <button className="font-semibold text-xl text-white bg-[#2F80ED] px-28 py-2 rounded-lg mt-6 hover:bg-slate-300 hover:text-black">Select</button>
                            </div>
                        </div>
                    ))
                }
            </div>
        </div>
    );
};

export default Courses;