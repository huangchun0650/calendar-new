import React from "react";
import Moment from 'react-moment';
import 'moment-timezone';
import moment from 'moment';

export default function SmallDateDisplay() {
    const day = moment().day();
    const current = new Date();
    const weeks = ['星期日', '星期一', '星期二', '星期三', '星期四', '星期五', '星期六'];
    return (
        <div className="p-4 font-bold text-lg flex bg-gray-300 w-full ease-in-out">
            <div className="flex-1 text-center text-7xl">
                <Moment format="DD">{current}</Moment>
            </div>
            <div className="flex-row flex-1">
                <div className="flex-1 text-left text-2xl">
                    <Moment format="YYYY.MM">{current}</Moment>
                </div>
                <div className="flex-1 text-left text-xl">
                    {weeks[day]}
                </div>
            </div>
        </div>
    )
}