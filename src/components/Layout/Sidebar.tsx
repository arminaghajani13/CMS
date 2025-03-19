import React, { useState, useEffect } from "react";
import {
    FaCog,
    FaSignOutAlt,
    FaHome,
    FaChartBar,
    FaDollarSign,
    FaUsers,
    FaUserPlus,
    FaAngleLeft,
    FaAngleRight
} from "react-icons/fa";
import { TbCubePlus } from "react-icons/tb";
import { HiMiniCube } from "react-icons/hi2";

import { Link, useLocation } from "react-router";

function Sidebar() {
    const [isCollapsed, setIsCollapsed] = useState(false)
    const location = useLocation(); // To get the current route
    const menuCategories = [
        {
            title: "Dashboard",
            items: [
                { icon: <FaHome />, label: "Home", link: "/" },
                { icon: <FaChartBar />, label: "Analyze", link: "/analyze" },
                { icon: <FaDollarSign />, label: "Sales", link: "/sales" },
            ],
        },
        {
            title: "Quick Menu",
            items: [
                { icon: <FaUsers />, label: "Users", link: "/users" },
                { icon: <FaUserPlus />, label: "New Users", link: "/users/new" },
                { icon: <HiMiniCube />, label: "Products", link: "/products" },
                { icon: <TbCubePlus />, label: "New Products", link: "/products/new" },
            ],
        },
        {
            title: "Settings",
            items: [
                { icon: <FaCog />, label: "Settings", link: "/setting" },
                { icon: <FaSignOutAlt />, label: "Logout", link: "/logout" },
            ],
        },
    ];
    const toggleSidebar = () => {
        setIsCollapsed(!isCollapsed)
    }

    return (
        <div className={`sidebar ${isCollapsed ? "collapsed" : ""}`}>
            <div className="CollapseBtn">
                <button onClick={toggleSidebar}>
                    {isCollapsed ? <FaAngleRight /> : <FaAngleLeft />}
                </button>
            </div>
            {menuCategories.map((category, index) => (
                <div key={index} className="menuBox">
                    {!isCollapsed && (
                        <p className={`category-title ${index !== 0 ? "with-margin" : ""}`}>
                            {category.title}
                        </p>
                    )}
                    <ul>
                        {category.items.map((item, itemIndex) => (
                            <Link
                                key={itemIndex}
                                to={item.link}
                                className={`menu_item ${isCollapsed ? "collapsed" : ""}
                                     ${location.pathname === item.link ? "active" : ""}`
                                }
                            >
                                <li>
                                    <span className={`icon ${isCollapsed ? "collapsed" : " "}`}>{item.icon}</span>
                                    {!isCollapsed && <span className="label">{item.label}</span>}
                                </li>
                            </Link>
                        ))}
                    </ul>
                </div>
            ))}
        </div>
    );
}

export default Sidebar;