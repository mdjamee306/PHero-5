/* eslint-disable react/jsx-key */
import { useEffect } from "react";
import { useState } from "react";
import Carts from "../Carts/Carts";
// // toast 
// import toast, { Toaster } from 'react-hot-toast'; 

const Courses = () => {
    const [courses, setCourses] = useState([]);
    const [selectItem, setSelectItem] = useState([]);
    const [remaining, setRemaining] = useState(0);
    const [total, setTotal] = useState(20);
    useEffect(() => {
        fetch('./data.json')
            .then(res => res.json())
            .then(data => setCourses(data))
    }, [])

    // handle click 

    const handleSelect = (courses) => {
        const isExist = selectItem.find((item) => item.id == courses.id);
        let count = courses.credit;
        if (isExist) {
            return alert('You cant take more than one course');
        }
        else {
            selectItem.forEach((item) => {
                count = count + item.credit;
            })
            if (count > 20) {
                return alert('You cant take more than 20 hours credit')
            }
            else {
                setTotal(count);
                const remainingCredit = 20 - count;
                setRemaining(remainingCredit)
                setSelectItem([...selectItem, courses])
            }
        }
    }

    return (
        <div className="container mx-auto flex gap-7">
            {/* parent of courses */}
            <div className="grid grid-cols-3 gap-6 w-2/3 mb-20">
                {
                    courses.map((courses) => (
                        <div key={courses.id} className="shadow-2xl rounded-xl p-4 ">
                            {/* child of course */}
                            <div className="">
                                {/* img div */}
                                <div><img className="w-full mt-4" src={courses.img} alt="" /></div>
                                <h3 className="my-4 text-xl font-semibold">{courses.title}</h3>
                                <p className="font-normal text-[#1C1B1B99] text-sm">{courses.description}</p>
                                <div className="flex gap-3 mt-4">
                                    <p>$ price: {courses.price}</p>
                                    <p>$ credit: {courses.credit}hr</p>
                                </div>
                                <button onClick={() => handleSelect(courses)} className="font-semibold text-xl text-white bg-[#2F80ED] px-28 py-2 rounded-lg mt-6 hover:bg-slate-300 hover:text-black">Select</button>
                            </div>
                        </div>
                    ))
                }
            </div>
            {/* carts */}
            <div className="w-[312px]">
                <Carts remaining={remaining} total={total} selectItem={selectItem}></Carts>
            </div>
        </div>
    );
};

export default Courses;