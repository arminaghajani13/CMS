import React from 'react'

// icons
import { IoMdNotificationsOutline, IoMdSettings } from "react-icons/io";
import { MdOutlineLanguage } from "react-icons/md";

export default function topbar() {
    return (
        <div className="flex justify-between topbar">
            <div className="topRight">
                <div className="logoBox">
                    ExirPooyan
                </div>
            </div>
            <div className="flex topLeft">
                <div className="topbarSingleIcon">
                    <IoMdNotificationsOutline size={24} />
                    <span className='topbarIconBadge'>2</span>
                </div>
                <div className="topbarSingleIcon">
                    <MdOutlineLanguage size={24} />
                </div>
                <div className="topbarSingleIcon">
                    <IoMdSettings size={24} />
                </div>
                <div className="topbarSingleIcon">
                    <img className='topbarUserAvatar' src="https://placehold.co/50" alt="" />
                </div>
            </div>
        </div>
    )
}
