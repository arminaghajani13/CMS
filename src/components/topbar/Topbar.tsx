import React from 'react'
import { IoMdNotifications } from "react-icons/io";
export default function topbar() {
    return (

        <div className="flex justify-between">
            <div className="topLeft text-left">
                logo Is here
            </div>
            <div className="topRight text-right">
                <IoMdNotifications />
            </div>
        </div>
    )
}
