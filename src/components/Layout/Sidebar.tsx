import { iconClasses } from "@mui/material";
import React, { useState, useEffect } from "react";
import {
    FaUser,
    FaCog,
    FaSignOutAlt,
    FaBars,
    FaHome,
    FaChartBar,
    FaDollarSign,
    FaUsers,
    FaUserPlus,
} from "react-icons/fa";

function Sidebar() {
    // const [isCollapsed, setIsCollapsed] = useState(false);

    const [isCollapsed, setIsCollapsed] = useState(false)

    // const toggleSidebar = () => {
    //     setIsCollapsed(!isCollapsed);
    // };

    const menuCategories = [
        {
            title: "Dashboard",
            items: [
                { icon: <FaHome />, label: "Home" },
                { icon: <FaChartBar />, label: "Analyze" },
                { icon: <FaDollarSign />, label: "Sales" },
            ],
        },
        {
            title: "Quick Menu",
            items: [
                { icon: <FaUsers />, label: "Users" },
                { icon: <FaUserPlus />, label: "New Users" },
            ],
        },
        {
            title: "Settings",
            items: [
                { icon: <FaCog />, label: "Settings" },
                { icon: <FaSignOutAlt />, label: "Logout" },
            ],
        },
    ];

    const test = () => {
        menuCategories.map((category, index) => (
            console.log(category)
        ))
    }

    useEffect(() => {
        test()
    }, [])

    const toggleSidebar = () => {
        setIsCollapsed(!isCollapsed)
    }

    return (
        <div className={`sidebar ${isCollapsed ? 'collapsed' : ''}`}>
            <button onClick={toggleSidebar}>
                <FaBars />
            </button>
            {menuCategories.map((category, index) => (

                <div key={index} className="menuBox">
                    {!isCollapsed ? (<p className="category-title">{category.title}</p>) : ''}
                    {/* <p>{category.title}</p> */}
                    <ul>
                        {category.items.map((item, itemIndex) => (
                            <li key={itemIndex}>
                                <span>{item.icon}</span>
                                <span>{item.label}</span>
                            </li>
                        ))}
                    </ul>
                </div>
            ))}
        </div>
        // <div className={`sidebar ${isCollapsed ? "collapsed" : ""}`}>
        //     <button
        //         onClick={toggleSidebar}
        //         className="toggle-btn"
        //         title={isCollapsed ? "Expand" : "Collapse"}
        //     >
        //         <FaBars />
        //     </button>

        //     <div className="menu">
        //         {menuCategories.map((category, index) => (
        //             <div key={index} className="category">
        //                 {!isCollapsed && (
        //                     <h3 className="category-title">{category.title}</h3>
        //                 )}
        //                 <ul>
        //                     {category.items.map((item, itemIndex) => (
        //                         <li key={itemIndex} className="menu-item">
        //                             <span className="icon">{item.icon}</span>
        //                             {!isCollapsed && (
        //                                 <span className="label">{item.label}</span>
        //                             )}
        //                         </li>
        //                     ))}
        //                 </ul>
        //             </div>
        //         ))}
        //     </div>
        // </div>
    );
}

export default Sidebar;